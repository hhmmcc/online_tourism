let SqlBase = require("./SqlBase");
class MineModel extends SqlBase {
  constructor() {
    super();
  }
  getAllMine(callback) { 
    let sql = `select * from mine`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = MineModel;
