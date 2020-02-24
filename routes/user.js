module.exports = function(app, router){
    
    

    router.route('/').get(function(req, res){
        res.redirect('/public/homepage.html');
    })



    router.route('/process/register').post(function(req, res) {
        var database = req.app.get('database');
        var paramId = 	req.body.id || 	req.query.id;
        var paramPassword = req.body.password || req.query.password;
        var paramName = req.body.name || req.query.name;
        var paramEmail = req.body.email || req.body.email;
        login_name = paramName;
        login_id = paramId;
        app.set('login_id', login_id);
        login_password = paramPassword;
        login_email = paramEmail;
        if (database.db) {
            addUser_profile(database, paramName, paramId, paramPassword, paramEmail, function(err, addedUser) {
                if (err) {
                    console.error('사용자 추가 중 에러 발생 : ' + err.stack)
                    return;
                }
                if (addedUser) {
                    console.dir(addedUser);
                    res.redirect('/public/interest.html');
                } 
                else {  
                }
            });
        } 
        
        else {  
            
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
        var database = req.app.get('database');
        user_data(database, paramId);
        login_id = paramId;
        app.set('login_id', login_id);
        login_password = paramPassword
        if (database.db) {
                authUser(database, paramId, paramPassword, function(err, docs) {
                    if (err) {
                        console.error('Error while logging in : ' + err.stack);
                        return;
                    }
                    
                    if (docs) {        
                        var username = docs[0].name;
                        var userid = docs[0].id;
                        login_email = docs[0].email;
                        res.redirect('/board/' + login_id);
                    }
                    else { 
                }
            });
        } 
        else {  
            console.log('no dB')
        }
    })

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
        var database = req.app.get('database');
        var arr = data.split(" ");

        for(var i =0; i<arr.length; i++){
            if(arr[i] === "exercise")   exercise = true;
            else if(arr[i] === "smoke") smoke = true;
            else if(arr[i] === "selfdev")   selfdev = true;
            else if(arr[i] === "save")  money = true;
            else if(arr[i] === "certificate")   certificate = true;
            else if(arr[i] === "language")  language = true;
            else if(arr[i] === "alcohol")   alcohol = true;
            else if(arr[i] === "travel") travel = true;
            else if(arr[i] === "book")  book = true;
        } 
        database.UserModel_profile.find({name: login_name}).remove().exec();
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

    router.get('/board/:id', function(req, res){
        var database = req.app.get('database');
        database.BoardModel_profile.find({author:login_id}, function(err, board){
            res.render('profile', {board: board, login_name: login_name, login_email: login_email});
        })
    });


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
        var database = req.app.get('database');
        if(exercise === true) user_interest_1 += "exercise";
        if(smoke === true) user_interest_2 += "smoke";
        if(selfdev === true) user_interest_3 += "selfdev";
        if(money === true) user_interest_4 += "money";
        if(certificate === true) user_interest_5 +="certificate";
        if(language === true) user_interest_6 += "language";
        if(alcohol === true) user_interest_7 += "alcohol";
        if(travel ===true) user_interest_8 += "travel";
        if(book === true) user_interest_9 += "book";
        database.BoardModel_profile.find({$or: [{interest: user_interest_1 }, {interest: user_interest_2}, {interest: user_interest_3}, {interest: user_interest_4}, {interest : user_interest_5}, {interest :user_interest_6}, {interest: user_interest_7}, {interest : user_interest_8}, {interest : user_interest_9}]}, function(err, board){
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

    
    var addUser_profile = function(database, name, id, password, email, callback){
        var temp_user = new database.UserModel_profile({'name': name, 'id': id, 'password': password, 'email':email, 'exercise': exercise, 'smoke' : smoke, 'selfdev': selfdev, 'money': money, 'certificate': certificate, 'language': language, 'alcohol':alcohol, 'travel': travel, 'book':book}); 
        temp_user.save(function(err,addedUser){
            if(err){
                callback(err,null);
                return ;
            
            }
            callback(null, addedUser);
        })
    }

    var authUser = function(database, id, password, callback){
        var user_interest_1 = "";
        var user_interest_2 = "" ;
        var user_interest_3 = "";
        var user_interest_4 = "" ;	
        var user_interest_5 = "";
        var user_interest_6 = "";
        var user_interest_7 = "";
        var user_interest_8 = "";
        var user_interest_9 = "";
        database.UserModel_profile.findById(id, function(err, results){
        
            if (err){
                callback(err, null);
                return;
            }
            
            if(results.length > 0){
                exercise = results[0].exercise;
                smoke = results[0].smoke;
                selfdev = results[0].selfdev;
                money = results[0].money;
                certificate = results[0].certificate;
                language = results[0].language;
                alcohol = results[0].alcohol;
                travel = results[0].travel;
                book = results[0].book;
                
                var user = new database.UserModel_profile({id:id});
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
        database.UserModel_profile.findById(id, function(err, results){
            if(err){
                console.log('error in user_data');
                return ;
            }

            if(results.length > 0){
                login_name = results[0].name;
            }
        })
    }


    
}