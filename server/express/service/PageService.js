//引入模块
let UserModel = require("../model/UserModel");
let PostModel = require("../model/PostModel");
let MoneyModel = require("../model/MoneyModel");
let MineModel = require("../model/MineModel");
let FindModel = require("../model/FindModel");
let SetUpModel = require("../model/SetUpModel");
class PageService {
  constructor() {}
  getUser(callback) {
    //创建对象
    let userModel = new UserModel();
    //获得数据
    userModel.getAllUser(function(user) {
      let postModel = new PostModel();
      postModel.getAllPost(function(post){
        let moneyModel = new MoneyModel();
        moneyModel.getMoney(function(money){
          let mineModel = new MineModel();
          mineModel.getAllMine(function(mine){
            let findModel = new FindModel();
            findModel.getAllFind(function(find){
              let setUpModel = new SetUpModel();
              setUpModel.getAllSet(function(set){
                callback({
                  user: user 
                , post: post 
                , money:money 
                , mine: mine
                , find: find
                , set : set
              })
              })
            })
          })
        });
      });
    });
  }
}

module.exports = PageService;
