//引入模块
let logsImgModel = require("../model/logsImgModel");
class LogsImgService {
  constructor() { }
  getData(callback) {
    let titleService = new logsImgModel();
    titleService.getAllImgs(function (imgs) {
      callback(imgs);
    });
  }
}
module.exports = LogsImgService;
