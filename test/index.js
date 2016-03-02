var assert = require('assert');
var path = require('path');
var fs = require('fs');
var http = require('http');

var thinkjs = require('thinkjs');
var instance = new thinkjs();
instance.load();

var twig = require('twig');
var Class = require('../lib/index.js');

describe('think-template-twig', function() {
  it('run', function(done) {
    var instance = new Class();
    var filePath = path.join(__dirname, 'a.html');
    fs.writeFileSync(filePath, 'The {{ baked_good }} is a lie.');
    instance.run(filePath, {baked_good: 'cupcake'}).then(function(content) {
      assert.equal(content, 'The cupcake is a lie.');
      fs.unlinkSync(filePath);
      done();
    }).catch(function(err) {
      console.log(err.stack);
    });
  });

  it('extend', function(done) {
    var instance = new Class();
    var filePath = path.join(__dirname, 'b.html');
    fs.writeFileSync(filePath, '{{ repeat("_.", 10) }}');

    instance.run(filePath, {}, {
      prerender: function(Twig) {
        Twig.extendFunction('repeat', function(value, times) {
          return new Array(times+1).join(value);
        });
      }
    }).then(function(content) {
      assert.equal(content, '_._._._._._._._._._.');
      fs.unlinkSync(filePath);
      done();
    }).catch(function(err) {
      console.log(err.stack);
    });
  })
});
