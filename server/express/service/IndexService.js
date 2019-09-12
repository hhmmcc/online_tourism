//引入模块
let TitleService = require("./TitleService");
class IndexService {
  constructor() { }
  getData(callback) {
    let titleService = new TitleService();
    titleService.getTitles(function (titles) {
      let obj = { titles: titles};
      callback(obj);
    });
  }
}
module.exports = IndexService;
