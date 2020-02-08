
var express = require('express')
  , http = require('http')
  , path = require('path');
var ejs = require('ejs');  
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var crypto = require('crypto');
var multer = require('multer');

var database;
var UserSchema_profile;
var UserModel;
var UserModel_profile

var bodyParser = require('body-parser')
  , static = require('serve-static');
var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');


app.use( express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')));

function connectDB(){
	var databaseUrl = 'mongodb://127.0.0.1:27017/iruda';
	
	mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;
	
	database.on('error',console.error.bind(console, 'mongoose connection error...'));
    database.on('open', function(){
		console.log('connected to DB : ' + databaseUrl);
		UserSchema_profile = mongoose.Schema({
			name : {type : String, required: true, unique: true},
			id : {type:String, required:true, unique:true },
			hashed_password : {type: String, required:true},
			email :{type: String, required: true},
            salt : {type:String, required :true},
            category : {type:String},
            exercise : {type:Boolean, default:false, overwrite: true},
            smoke : {type:Boolean, default:false, overwrite: true},
            selfdev : {type:Boolean, default:false, overwrite:true},
            money : {type:Boolean, default:false, oveerwrite : true},
            certificate : {type:Boolean, default:false, overwrite: true},
            language : {type:Boolean, default:false},
            alcohol : {type:Boolean, default:false},
            travel : {type:Boolean, default:false},
            book : {type:Boolean, default:false},        
        });
        
        BoardSchema_profile = mongoose.Schema({
            picture_url : {type:String, required:true},
            like_count : {type: Number},
            description :{type:String},
            author : {type:String},
            board_date: {type: String},
            interest : {type: String}   
        })
		
		UserSchema_profile
		.virtual('password')
        .set(function(password){
            this._password = password;
            this.salt = this.makeSalt();
            this.hashed_password = this.encryptPassword(password);
            // console.log('virtual password 의 set 호출됨 : ' + this.hashed_password);
        })
        .get(function(){
            // console.log('virtual function 의 get 호출됨');
            return this._password;
        })
        
        UserSchema_profile.static('findById', function(id, callback){
            return this.find({id:id}, callback)
        });
    
        UserSchema_profile.static('save_insterest', function(exercise, smoke, selfdev, money, certificate, language, alcohol, travel, book){
            this.exercise = exercise;
            this.smoke = smoke;
            this.selfdev = selfdev;
            this.money = money;
            this.certificate = certificate;
            this.language = language;
            this.alcohol = alcohol;
            this.travel = travel;
            this.book = book;
        })
        UserSchema_profile.static('findAll', function(callback){
            return this.find({}, callback);
        });
    
        UserSchema_profile.method('encryptPassword', function(plainText, inSalt){
            if(inSalt){
                return crypto.createHmac('sha1', inSalt).update(plainText).digest('hex');
            }
            else{
                return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
            }
        })   
        UserSchema_profile.method('makeSalt', function(){
            return Math.round((new Date().valueOf() * Math.random())) + '';
        });
    
        UserSchema_profile.method('authenticate', function(plainText, inSalt, hashed_password) {
            if (inSalt) {
                // console.log('authenticate 호출됨 : %s -> %s : %s', plainText, this.encryptPassword(plainText, inSalt), hashed_password);
                return this.encryptPassword(plainText, inSalt) === hashed_password;
            }
            else {
                // console.log('authenticate 호출됨 : %s -> %s : %s', plainText, this.encryptPassword(plainText), this.hashed_password);
                return this.encryptPassword(plainText) === this.hashed_password;
            }
        });


        // console.log('UserSchema_profile has been defined');

        UserModel_profile = mongoose.model("users_profiles",UserSchema_profile);
        BoardModel_profile = mongoose.model("boards", BoardSchema_profile)
        database.on('disconnected', function(){
            // console.log('disconnected... tying to reconnect');
            setInterval(connectDB, 5000);
        });
		
		
	})
}


var addUser_profile = function(database, name, id, password, email, callback){
    // console.log('addUser_profile has been called' + "name:  " + name + "   id: " + id +   "  password: " + password +  "  emai: " + email );
    var temp_user = new UserModel_profile({'name': name, 'id': id, 'password': password, 'email':email, 'exercise': exercise, 'smoke' : smoke, 'selfdev': selfdev, 'money': money, 'certificate': certificate, 'language': language, 'alcohol':alcohol, 'travel': travel, 'book':book}); 

    temp_user.save(function(err,addedUser){
		if(err){
			callback(err,null);
			return ;
		
		}
		
		// console.log('user info added');
		callback(null, addedUser);
	})
}

var authUser = function(database, id, password, callback){
	// console.log('authUser has been called');
	
	var user_interest_1 = "";
	var user_interest_2 = "" ;
	var user_interest_3 = "";
	var user_interest_4 = "" ;	
	var user_interest_5 = "";
	var user_interest_6 = "";
	var user_interest_7 = "";
	var user_interest_8 = "";
	var user_interest_9 = "";
	UserModel_profile.findById(id, function(err, results){
	
		if (err){
			callback(err, null);
			return;
		}
		
		if(results.length > 0){
			// console.log("THIS IS THE RESULT!!!!   : " +results);
			// console.log("this is type of result: " + typeof(results[0]));
			// console.log(typeof(results[0].exercise));
			
			exercise = results[0].exercise;
			// console.log(exercise);
			
			smoke = results[0].smoke;
			selfdev = results[0].selfdev;
			money = results[0].money;
			certificate = results[0].certificate;
			language = results[0].language;
			alcohol = results[0].alcohol;
			travel = results[0].travel;
			book = results[0].book;
			
			var user = new UserModel_profile({id:id});
			
			var authenticated = user.authenticate(password, results[0]._doc.salt, results[0]._doc.hashed_password);
			
			if(authenticated){
	
				callback(null, results);
			}
			else{
	
				callback(null, null);
			}
		}
	})
}

var user_data = function(database, id){
    UserModel_profile.findById(id, function(err, results){
        
        if(err){
            console.log('error in user_data');
            return ;
        }

        if(results.length > 0){
            login_name = results[0].name;
        }
    })
}




router.route('/').get(function(req, res){
	res.redirect('/public/homepage.html');
})



router.route('/process/register').post(function(req, res) {
	// console.log('/process/login 처리함.');

	// console.log(req);
    
	var paramId = 	req.body.id || 	req.query.id;
	var paramPassword = req.body.password || req.query.password;
    var paramName = req.body.name || req.query.name;
    var paramEmail = req.body.email || req.body.email;

    
    login_name = paramName;
    login_id = paramId;
    login_password = paramPassword;
	login_email = paramEmail;
    
    console.log('요청 파라미터 : ' + paramId + ', ' + paramPassword + ', ' + paramName);
    
    // 데이터베이스 객체가 초기화된 경우, addUser 함수 호출하여 사용자 추가
	if (database) {
		addUser_profile(database, paramName, paramId, paramPassword, paramEmail, function(err, addedUser) {
            // 동일한 id로 추가하려는 경우 에러 발생 - 클라이언트로 에러 전송
			if (err) {
                console.error('사용자 추가 중 에러 발생 : ' + err.stack)
                
                return;
            }
			
            // 결과 객체 있으면 성공 응답 전송
			if (addedUser) {
                console.dir(addedUser);
                res.redirect('/public/interest.html');
            } 
            
            else {  // 결과 객체가 없으면 실패 응답 전송
				
			}
		});
    } 
    
    else {  // 데이터베이스 객체가 초기화되지 않은 경우 실패 응답 전송
		
	}

});


var login_email = 'l@l';
var login_name;
var login_id;
var login_password;
var login_picture;


router.route('/process/login').post(function(req, res){
	
	var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    

    user_data(database, paramId);
    login_id = paramId;
    login_password = paramPassword

	if (database) {
			authUser(database, paramId, paramPassword, function(err, docs) {
				// 에러 발생 시, 클라이언트로 에러 전송
				if (err) {
					console.error('사용자 로그인 중 에러 발생 : ' + err.stack);
					
					
					
					return;
				}
				
				// 조회된 레코드가 있으면 성공 응답 전송
				if (docs) {
            
                    console.dir('success');
                    // 조회 결과에서 사용자 이름 확인
                    
                    var username = docs[0].name;
                    var userid = docs[0].id;
					login_email = docs[0].email;

                   
                    res.redirect('/board/' + login_id);
            
            
                }
			
				else {  // 조회된 레코드가 없는 경우 실패 응답 전송
				console.log('wrong password')
			}
		});
    } 

	else {  // 데이터베이스 객체가 초기화되지 않은 경우 실패 응답 전송
		console.log('no dB')
	}
})



//      PROFILE      :         PROFILE      :         PROFILE      :         

router.route('/process/profile_id').post(function(req, res){
    res.send({login_id: login_id});
})

router.route('/process/profile_name').post(function(req, res){
    // console.log('in processing...profile..');
    res.send({login_name:login_name });
})


  
router.route('/gotoprofile').get(function(req, res){
	res.redirect('/board/' + login_id);
})




//      INTEREST     :       INTEREST          :    INTEREST


var exercise = false;
var smoke = false;
var selfdev = false;
var money = false;
var certificate = false;
var language = false;
var alcohol = false;
var travel = false;
var book = false;

router.route('/process/interest').post(function(req, res){
    var data = req.body.data;

    // console.log('in processing...user interest....');

    // console.log(data);

    var arr = data.split(" ");

    for(var i =0; i<arr.length; i++){
        if(arr[i] === "exercise"){
            // user_interest_exercise(database, login_name);
			
            exercise = true;
			// console.log("JUST CHANGED EXERCISE");
			// console.log("THIS IS THE VALUE OF EXERCISE: "  + exercise);
        } 
        else if(arr[i] === "smoke") {
            // user_interest_smoke(database, login_name);
            smoke = true;
        }
        else if(arr[i] === "selfdev") {
            // user_interest_selfdev(database, login_name);
            selfdev = true;
        }
        else if(arr[i] === "save"){
            // user_interest_money(database, login_name);
            money = true;
        }
        else if(arr[i] === "certificate"){
            // user_interest_certificate(database, login_name);
            certificate = true;
        } 
        else if(arr[i] === "language"){
            // user_interest_language(database, login_name);
            language = true;
        } 
        else if(arr[i] === "alcohol"){
            // user_interest_alcohol(database, login_name);
            alcohol = true;
        }
        else if(arr[i] === "travel"){
            // user_interest_travel(database, login_name);
            travel = true;
        } 
        else if(arr[i] === "book"){
            // user_interest_book(database, login_name);
            book = true;
        } 

        
    }


    UserModel_profile.find({name: login_name}).remove().exec();
    addUser_profile(database, login_name, login_id, login_password, login_email, function(err, addedUser){
        if(err){
            console.log('error while adding users category');
            return;
        }
        if(addedUser){
            console.log('succesfully updated user profile');
            // console.log(UserModel_profile.find({name: login_name}));
            var finish = "/board/" + login_id;
            res.send({finish:finish});
        }
    });
})






router.route('/write').get(function(req, res){
    res.redirect('/public/upload-popup.html');
})


app.post('/board/write', multer({dest: './tmp/'}).single('userFile'),
    function(req, res){
        var id = login_id;
        // console.log(req.file);
        var fName = req.file.originalname;
        var firstPath = './public/uploads/'
        fs.renameSync('./tmp/' + req.file.filename, firstPath + fName);
        temp_filename = '/public/uploads/' + fName;

        // console.log(temp_filename);

        var interest;

        if(req.body.exercise === "on") interest = "exercise";
        else if(req.body.smoke ==="on") interest = "smoke";
        else if(req.body.selfdev ==="on") interest = "selfdev";
        else if(req.body.money ==="on") interest ="money";
        else if(req.body.certificate ==="on") interest ="certificate";
        else if(req.body.language ==="on") interest = "language";
        else if(req.body.alcohol ==="on") interest = "alcohol";
        else if(req.body.travel ==="on") interest = "travel";
        else if(req.body.book ==="on") interest ="book";


        var board = new BoardModel_profile();
        board.picture_url = temp_filename;

        board.like_count = 0;
        var year = new Date().getFullYear();
        var month = new Date().getMonth()+1;
        var day = new Date().getDate();
        const date = (year + "년 "+month+"월 "+day+"일");
        board.board_date = date;
        board.description = req.body.description;
        board.author = login_id;
    
        board.interest = interest;
        
        board.save(function(err){
            if(err){
                console.log(error);
            }
            res.redirect('board'+ login_id);
        });

    }
);




router.get('/board/:id', function(req, res){
    BoardModel_profile.find({author:login_id}, function(err, board){
        res.render('profile', {board: board, login_name: login_name, login_email: login_email});
    })
});

// var user_interest_1 = UserModel_profile.find({name: login_name}).exercise;

var user_interest_1 = "";
var user_interest_2 = "" ;
var user_interest_3 = "";
var user_interest_4 = "" ;	
var user_interest_5 = "";
var user_interest_6 = "";
var user_interest_7 = "";
var user_interest_8 = "";
var user_interest_9 = "";
router.route('/board').get(function(req, res){
	
	// console.log("test: " + exercise);
	if(exercise === true) user_interest_1 += "exercise";
	
	if(smoke === true) user_interest_2 += "smoke";
	
	if(selfdev === true) user_interest_3 += "selfdev";
	
	if(money === true) user_interest_4 += "money";
	
	if(certificate === true) user_interest_5 +="certificate";
	
	if(language === true) user_interest_6 += "language";
	
	if(alcohol === true) user_interest_7 += "alcohol";
	
	if(travel ===true) user_interest_8 += "travel";
	
	if(book === true) user_interest_9 += "book";
	
	
	// console.log("THUS IS USER INTEREST 2  " + user_interest_2);
    BoardModel_profile.find({$or: [{interest: user_interest_1 }, {interest: user_interest_2}, {interest: user_interest_3}, {interest: user_interest_4}, {interest : user_interest_5}, {interest :user_interest_6}, {interest: user_interest_7}, {interest : user_interest_8}, {interest : user_interest_9}]}, function(err, board){
		// console.log("THIS IS USERINTEREST 1 " + user_interest_1);
		// console.log("This is the value of exercise  :" +exercise);
		// console.log(board);
        res.render('feed', {board: board});
    });
});

router.route('/process/upload-popup').get(function(req, res){
    var year = new Date().getFullYear();
    var month = new Date().getMonth()+1;
    var day = new Date().getDate();
    const date = (year + "년 "+month+"월 "+day+"일");
    res.render('upload-popup',{date: date});
});



app.use('/', router);


// Express 서버 시작x
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));

  connectDB();
});

