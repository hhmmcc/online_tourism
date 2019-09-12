let SqlBase = require("./SqlBase");
class logsImgModel extends SqlBase{
    constructor(){
        super();
    }
    getAllImgs(callback){
        let sql = `select * from logs_titles_image`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[INSERT ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = logsImgModel;
