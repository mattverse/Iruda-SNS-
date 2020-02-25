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
var flash = require('connect-flash');
var expressSession = require('express-session');

app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));


var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use( express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')));

var configPassport = require('./config/passport');
configPassport(app, passport);
var userPassport = require('./routes/user');
userPassport(router, passport);
var board_post = require('./routes/post_board');


app.post('/board/write', multer({dest: './tmp/'}).single('userFile'),
    board_post.board_post
);
app.use('/', router);

http.createServer(app).listen(app.get('port'), function(){
  
  ('Express server listening on port ' + app.get('port'));
  database.init(app, config);
});

