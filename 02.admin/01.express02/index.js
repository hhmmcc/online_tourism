//1,引入express
var express = require("express");
let mysql = require("mysql");
//2，获得express对象
var app = express();
//3,引入body-parser模块
var bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//5,设置静态文件
app.use(express.static("public"));

//6,设置跨域访问
app.all("*", function (req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://192.168.3.109:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

let ip="http://192.168.3.109:";
let port = 8888;


let IndexControllers = require("./controllers/IndexControllers");
app.get('/rank', IndexControllers.index);
//4,进行监听
app.listen(port, function () {
  console.log("启动");
})

















  // let ranks = [
  //  { id: 0, number: 4, url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=408399876,1648653762&fm=26&gp=0.jpg", name: "小明", count: 16 }, 
  //  { id: 1, number: 5, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567618581544&di=ffbb8b6bb86118903b9a3cb088a0c29f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9e82e82fa2f69c1426df9fc2335e4b7439630b6b10d15-aqBAmh_fw658", name: "太阳", count: 15 },
  //  { id: 2, number: 6, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567618581536&di=b1072c4a4a6c979d75595e244b0c1889&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190207%2Fc936c6a4d4104dd0ae77aea7ff9c3085.jpeg", name: "星星", count: 13 },
  //  { id: 3, number: 7, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567618581533&di=d6c4f6666ee2ad90d42de865decaffe6&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg", name: "月亮", count: 12 },
  //  { id: 4, number: 8, url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=408399876,1648653762&fm=26&gp=0.jpg", name: "张三", count: 11 },
  //  { id: 5, number: 9, url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3377302992,3361149372&fm=26&gp=0.jpg", name: "星星", count: 10 },
  //  { id: 6, number: 10, url: ip+port+"/imgs/0.jpg", name: "星星", count: 8 }
  // ];
  // let titles=[{
  //   index:0,
  //   name:"打卡"
  // }, {
  //     index: 1,
  //     name: "足迹"
  //   }, {
  //     index: 2,
  //     name: "排名"
  //   }
  // ];
  // res.json({ranks:ranks,titles:titles});