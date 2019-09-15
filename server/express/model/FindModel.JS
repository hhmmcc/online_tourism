let SqlBase = require("./SqlBase");
class FindModel extends SqlBase {
  constructor() {
    super();
  }
  getAllFind(callback) { 
    let sql = `select * from find`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = FindModel;
