module.exports = function(router, passport){
    
    var login_email = 'l@l';
    var login_name;
    var login_id;

    router.route('/').get(function(req, res){
        res.redirect('/public/homepage.html');
    })

    router.route('/process/login').post(passport.authenticate('local-login', {
        successRedirect : '/board/load_profile',
        failureRedirect : '/login', 
        failureFlash : true 
    }));

    router.route('/process/register').post(passport.authenticate('local-signup', {
        successRedirect : '/public/interest.html', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));

    router.route('/board/load_profile').get(function(req, res){
        res.redirect('/board/' + req.user.id);
    })

    router.route('/process/profile_id').post(function(req, res){
        res.send({login_id: login_id});
    })

    router.route('/process/profile_name').post(function(req, res){
        res.send({login_name:login_name });
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
        var login_name = req.user.name;
        var login_id = req.user.id;
        var login_email = req.user.email;   
        var salt = req.user.salt;
        var hased_password = req.user.hashed_password;
        database.UserModel_profile.findOneAndDelete({name:login_name}, function(err){
            if(err) console.log(err);
        })
        addUser_profile(database, login_name, login_id, salt, hased_password, login_email, function(err, addedUser){
            if(err){
                console.log('error while adding users category');
                return;
            }
            if(addedUser){
                var finish = "/board/" + login_id;
                res.send({finish: finish});
            }
            else{
                console.log("HERE");
            }
        });
    })


    router.route('/write').get(function(req, res){
        res.redirect('/public/upload-popup.html');
    })

///TO DO: if accessed through login, works fine but if accessed after register, doesn't work.
    router.get('/board/:id', function(req, res){
        var database = req.app.get('database');
        var login_name = req.user.name;
        var login_email = req.user.email;
    
        database.BoardModel_profile.find({author:req.user.id}, function(err, board){
            res.render('profile.ejs', {board: board, login_name: login_name, login_email: login_email});
        });
    });

    var addUser_profile = function(database, name, id, salt, hased_password, email, callback){
        
        var temp_user = new database.UserModel_profile({'name': name, 'id': id, 'salt': salt,'hashed_password':hased_password, 'email':email, 'exercise': exercise, 'smoke' : smoke, 'selfdev': selfdev, 'money': money, 'certificate': certificate, 'language': language, 'alcohol':alcohol, 'travel': travel, 'book':book}); 
        temp_user.save(function(err,addedUser){
            if(err){
                callback(err,null);
                return ;
            
            }
            callback(null, addedUser);
        })
    }

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

    

    
}