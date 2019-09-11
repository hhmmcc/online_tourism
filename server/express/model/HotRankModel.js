// 获取发布具体的内容
let SqlBase = require("./SqlBase");
class HotRankModel extends SqlBase{
    constructor(){
        super();
    }
    getHotRank(callBack){
        let sql = `select * from hot_rank`;
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
module.exports = HotRankModel;