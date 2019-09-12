let GetTopicTitle = require("./GetTopicTitle");
let CommentModel = require("../model/CommentModel");
class GetTopicContent{
    constructor(){}
    getTourismPostData(callBack){
        
     new GetTopicTitle().getTopicTitleDate(function(data){

        callBack(data);

     });
    }
}

module.exports = GetTopicContent;