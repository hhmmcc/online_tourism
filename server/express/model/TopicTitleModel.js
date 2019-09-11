let SqlBase = require("./SqlBase");
class   TopicTitleModel extends SqlBase{
    constructor(){
        super();
    }

    getTopicTitle(callBack){
        let sql = `SELECT * FROM topic_name`;
        let sqlBase = new SqlBase();
        sqlBase.connection.query(sql, function(err, result){
            if (err) {
                console.log("[SELECT ERROR] - ", err.message);
                return;
            }
             callBack(result);
        });
    }
}

module.exports = TopicTitleModel;