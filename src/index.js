'use strict';

import Twig, {twig} from 'twig';

let Base = think.adapter('template', 'base');
/**
 * Twig teplate adapter
 */
export default class extends Base {
  /**
   * run
   * @param {String} templateFile []
   * @param {Object} tVar         []
   * @param {Object} config       []
   * @return {Promise}            []
   */
   async run(templateFile, tVar, config) {
     let options = this.parseConfig(config);

     this.prerender(options, Twig, templateFile);
     let content = await this.getContent(templateFile);

     return twig({data: content}).render(tVar);
   }
}
