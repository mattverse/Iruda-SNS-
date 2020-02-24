var express = require('express')
  , http = require('http')
  , path = require('path')
  , ejs = require('ejs')
  , multer = require('multer')
  , config = require('./config/config')
  , database = require('./database/database')
  , bodyParser = require('body-parser')
  , static = require('serve-static');

var app = express();
var router = express.Router();


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use( express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')));
var userPassport = require('./routes/user');
userPassport(app, router);
var board_post = require('./routes/post_board');
app.post('/board/write', multer({dest: './tmp/'}).single('userFile'),
    board_post.board_post
);
app.use('/', router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  database.init(app, config);
});

