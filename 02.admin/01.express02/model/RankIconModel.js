let SqlBase = require("./SqlBase");
class RankIconModel extends SqlBase{
    constructor(){
        super();
    }
    getAllRankIcon(callback){
        let sql = `select * from clockCard `;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            callback(result);
        });
    }

}
module.exports = RankIconModel;