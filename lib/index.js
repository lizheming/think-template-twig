'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _twig = require('twig');

var _twig2 = _interopRequireDefault(_twig);

var Base = think.adapter('template', 'base');
/**
 * Twig teplate adapter
 */

var _default = (function (_Base) {
  _inherits(_default, _Base);

  function _default() {
    _classCallCheck(this, _default);

    _Base.apply(this, arguments);
  }

  /**
   * run
   * @param {String} templateFile []
   * @param {Object} tVar         []
   * @param {Object} config       []
   * @return {Promise}            []
   */

  _default.prototype.run = function run(templateFile, tVar, config) {
    var options, content;
    return _regeneratorRuntime.async(function run$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          options = this.parseConfig(config);

          this.prerender(options, _twig2['default'], templateFile);
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(this.getContent(templateFile));

        case 4:
          content = context$2$0.sent;
          return context$2$0.abrupt('return', _twig.twig({ data: content }).render(tVar));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  };

  return _default;
})(Base);

exports['default'] = _default;
module.exports = exports['default'];