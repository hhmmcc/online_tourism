// 引入服务器
let express = require("express");

// 获得服务器对象
let app = express();

// 设置静态文件public文件夹
app.use(express.static('public'));

//3,引入body-parser模块,对josn的数据格式进行处理
var bodyParser = require("body-parser");

// 4，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//3,设置跨域访问
app.all("*", function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");//所有的PC机都可以访问
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

// 避免ip地址发生变化，所以先定义一个变量
let ip = "http://192.168.3.192:";
let port = 8666;
let PostController = require("./controller/PostController");

app.get('/tourism',  new PostController().PostRespanse);


let HotRankController = require("./controller/HotRankController");
let hotRankController = new HotRankController();
app.get('/hotrank', hotRankController.PostRespanse);


let pageController = require("./controller/PageController");
app.get("/page", pageController.index);
// 端口监听
app.listen(port, function(){
    console.log("启动");
});
