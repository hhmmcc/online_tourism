let GetTopicContent = require("../service/GetTopicContent");
class PostController{
    constructor(){
    }
    PostRespanse(req, res){
         // 通过service返回数据
         let getTopicContent = new GetTopicContent();
         getTopicContent.getTourismPostData(function(data){
            res.json(data);
         });
    }
}
module.exports = PostController;