let TopicContentModel = require("../model/TopicContentModel");
let TopicTitleModel = require("../model/TopicTitleModel");
let CommentModel = require("../model/CommentModel");
class GetTopicTitle{
    constructor(){    
    }
    getTopicTitleDate(callBack){
           let topicContentModel = new TopicContentModel();
           let topicTitleModel = new TopicTitleModel();
           let  commentModel = new CommentModel();         
            topicTitleModel.getTopicTitle(function(topicTitle){
                // 给每个对应的title赋相对应的内容运用for循环
             for(let i = 0; i<topicTitle.length; i++){
                    let id = topicTitle[i].id;
                    topicContentModel.getTopicContentById(id,true,  function(topicContent1){
                        topicTitle[i].topicContent = topicContent1;
                            for(let j = 0; j<topicContent1.length; j++){
                                let userId = topicContent1[j].id
                                commentModel.getComment(userId, function(comment){
                                    topicContent1[j].comment = comment;
                                    if(j == topicContent1.length-1){
                                        topicTitle[i].topicContent = topicContent1;
                                    } 
                                });

                         }
                        if(i == topicTitle.length-1){
                            callBack(topicTitle);
                        }
                    });

                }
        });

    }
}
module.exports = GetTopicTitle;