let TopicContentModel = require("../model/TopicContentModel");
let HotRankModel = require("../model/HotRankModel");
class HotRankService{
    constructor(){}
    getHotRankDate(callBack){
        let topicContentModel = new TopicContentModel();
        let hotRankModel = new HotRankModel();
        hotRankModel.getHotRank(function(rank){
                // 给每个对应的title赋相对应的内容运用for循环
                 for(let i = 0; i<rank.length; i++){
                        let id = rank[i].user_id;
                        topicContentModel.getTopicContentById(id,false, function(topicContent){
                            rank[i].topicContent = topicContent;
                            if(i === rank.length-1){
                               callBack(rank);
                          }
                        });
                }
        });

    }
}
module.exports = HotRankService;