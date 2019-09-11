let GetTopicTitle = require("./GetTopicTitle");
let CommentModel = require("../model/CommentModel");
class GetTopicContent{
    constructor(){}
    getTourismPostData(callBack){
     let   getTopicTitle = new GetTopicTitle();
     let   commentModel = new CommentModel();
     getTopicTitle.getTopicTitleDate(function(data){

        // for(let i=0; i<data.length; i++){

        //     let length = data[i].topicContent.length;
        //     if(length == undefined || length == null){
        //             continue;
        //     }

        // for(let j=0; j<length; j++){
        //         let id = data[i].topicContent[j].id;
        //         commentModel.getComment(id, function(comment){
        //             // 回调机制
        //             data[i].topicContent[j].comment = comment;
        //             if(i==data.length.length-1){
                       
        //             }
        //         });
        //     }
        // }

        callBack(data);

     });
    }
}

module.exports = GetTopicContent;