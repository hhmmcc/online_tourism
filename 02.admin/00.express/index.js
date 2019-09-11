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
  res.header("Access-Control-Allow-Origin", "http:// 192.168.3.109:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

let ip="http:// 192.168.3.109:";
let port = 8888;


let IndexControllers = require("./controllers/IndexControllers");
app.get('/index', IndexControllers.index);
//4,进行监听
app.listen(port, function () {
  console.log("启动");
})





