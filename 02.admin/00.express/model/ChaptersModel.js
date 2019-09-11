//引入模块
let Bqlbase = require("./SqlBase");
class ChaptersModel extends Bqlbase {
    constructor() {
        super();
    }
    getAllChapters(courses_id,callback) {
        //3,编写sql语句
        let sql = `select * from chapters where courses_id=${courses_id} `;
        //4,插入操作
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log("[[查询] - ", err.message);
                return;
            }
            callback(result);
        });
    }
}
module.exports = ChaptersModel;