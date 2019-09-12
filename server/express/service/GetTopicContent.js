let GetTopicTitle = require("./GetTopicTitle");
let CommentModel = require("../model/CommentModel");
class GetTopicContent{
    constructor(){}
    getTourismPostData(callBack){
     let   getTopicTitle = new GetTopicTitle();
     let   commentModel = new CommentModel();
     getTopicTitle.getTopicTitleDate(function(data){

        callBack(data);

     });
    }
}

module.exports = GetTopicContent;