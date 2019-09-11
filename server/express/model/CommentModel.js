// 获取发布具体的内容
let SqlBase = require("./SqlBase");
class CommentModel extends SqlBase{
    constructor(){
        super();
    }
    getComment(id, callBack){
        let sql = `select * from comments where user_id=${id}`;
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
module.exports = CommentModel;