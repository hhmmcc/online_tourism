let HotRankService = require("../service/HotRankService");
class HotRankController{
    constructor(){

    }
    PostRespanse(req, res){
         // 通过service返回数据
         let hotRankService = new HotRankService();
         hotRankService.getHotRankDate(function(data){
            res.json(data);
         });
    }
}
module.exports = HotRankController;