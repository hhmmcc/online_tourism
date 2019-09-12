let TopicContentModel = require("../model/TopicContentModel");
let TopicTitleModel = require("../model/TopicTitleModel");
class GetTopicTitle{
    constructor(){}
    getTopicTitleDate(callBack){
        let topicContentModel = new TopicContentModel();
        let topicTitleModel = new TopicTitleModel();       
        topicTitleModel.getTopicTitle(function(topicTitle){
                // 给每个对应的title赋相对应的内容运用for循环
          for(let i = 0; i<topicTitle.length; i++){
                    let id = topicTitle[i].id;
                        topicContentModel.getTopicContentById(id,true,  function(topicContent1){
                              topicTitle[i].topicContent = topicContent1;
                              if(i == topicTitle.length-1){
                                callBack(topicTitle); 
                               }  
                        });

                }
        });

    }
}
module.exports = GetTopicTitle;