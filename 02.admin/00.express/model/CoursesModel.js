//引入模块
let Bqlbase = require("./SqlBase");
class CoursesModel extends Bqlbase {
    constructor() {
        super();
    }
    getAllCourses(callback) {
        //3,编写sql语句
        let sql = "select * from courses";
        //4,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            callback(result);
        });
    }
}
module.exports = CoursesModel;