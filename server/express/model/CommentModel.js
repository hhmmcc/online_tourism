// 获取发布具体的内容
let SqlBase = require("./SqlBase");
class CommentModel extends SqlBase{
    constructor(){
        super();
        this.sqlBase = new SqlBase();
    }
    getComment(id, callBack){
        let sql = `select * from comments where user_id=${id}`;
        this.sqlBase.connection.query(sql, function(err, result){
            if (err) {
                console.log("[SELECT ERROR] - ", err.message);
                return;
            }
             callBack(result);
        });
    }
}
module.exports = CommentModel;