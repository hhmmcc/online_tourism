let IndexService = require("../services/IndexService");
module.exports.index = function (req, res) {
    let indexService = new IndexService();
    indexService.getData(function (obj) {
        res.json(obj);
    });
};
