let SqlBase = require("./SqlBase");
class CardContentModel extends SqlBase{
    constructor(){
        super();
    }
    getAllCardContents(titles_id,callback){
        let sql = `select * from cardContent where titles_id=${titles_id} `;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[INSERT ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = CardContentModel;
