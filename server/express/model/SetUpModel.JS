let SqlBase = require("./SqlBase");
class SetUpModel extends SqlBase {
  constructor() {
    super();
  }
  getAllSet(callback) { 
    let sql = `select * from setUp`;
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = SetUpModel;
