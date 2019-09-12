let LogsImgService = require("../service/LogsImgService");
module.exports.imgs = function (req, res) {
    let logsImgService = new LogsImgService();
    logsImgService.getData(function (imgs) {
        res.json(imgs);
    });
};
