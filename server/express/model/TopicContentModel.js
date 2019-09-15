// 获取发布具体的内容
let SqlBase = require("./SqlBase");
class TopicContentModel extends SqlBase{
    constructor(){
        super();
        this.sqlBase = new SqlBase();
    }
    getTopicContentById(id,flag, callBack){
        let sql;
        if(flag==true){
            sql = `select * from topics_content where topics_id=${id}`;
        }else{
            sql = `select * from topics_content where id=${id}`;
        }
        this.sqlBase.connection.query(sql, function(err, result){
            if (err) {
                console.log("[SELECT ERROR] - ", err.message);
                return;
            }
             callBack(result);
        });
    }
}
module.exports = TopicContentModel;