let SqlBase = require("./SqlBase");
class RankModel extends SqlBase {
    constructor() {
        super();
    }
    getAllRanks(callback) {
        let sql = "select * from rank";
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            callback(result);
        });
    }
}
module.exports = RankModel;
