
var LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
		usernameField : 'id',
		passwordField : 'password',
		passReqToCallback : true    // 이 옵션을 설정하면 아래 콜백 함수의 첫번째 파라미터로 req 객체 전달됨
	}, function(req, id, password, done) {
        // 요청 파라미터 중 name 파라미터 확인
        var paramName = req.body.name || req.query.name;
		var paramEmail = req.body.email || req.query.email;

		// console.log('passport의 local-signup 호출됨 : ' + email + ', ' + password + ', ' + paramName);
		
	    // findOne 메소드가 blocking되지 않도록 하고 싶은 경우, async 방식으로 변경
	    process.nextTick(function() {
	    	var database = req.app.get('database');
		    database.UserModel_profile.findOne({ 'id' :  id }, function(err, user) {

				if (err) {
		            return done(err);
		        }
		        
		        if (user) {
		        	console.log('기존에 계정이 있음.');
		            return done(null, false, req.flash('signupMessage', '계정이 이미 있습니다.'));  // 검증 콜백에서 두 번째 파라미터의 값을 false로 하여 인증 실패한 것으로 처리
				} 
				else {
		        	var user = new database.UserModel_profile({'name': paramName, 'id': id, 'password': password, 'email':paramEmail, 'exercise': false, 'smoke' : false, 'selfdev': false, 'money': false, 'certificate': false, 'language': false, 'alcohol': false, 'travel': false, 'book':false});
		        	user.save(function(err) {
		        		if (err) {
		        			throw err;
		        		}
		        	
		        	    console.log("Registered new user");
		        	    return done(null, user); 
		        	});
		        }
		    });    
	    });

	});
