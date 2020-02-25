var LocalStrategy = require('passport-local').Strategy; 


module.exports = new LocalStrategy({
    usernameField : 'id',
    passwordField : 'password',
    passReqToCallback : true   
}, function(req, id, password, done) { 
    
    var database = req.app.get('database');

    database.UserModel_profile.findOne({ 'id' :  id }, function(err, user) {
        if (err) { return done(err); }

    
        if (!user) {
            console.log('THERE IS NO ID.');
            return done(null, false, req.flash('loginMessage', 'there is no id registered.'));  
        }
        
        
        var authenticated = user.authenticate(password, user._doc.salt, user._doc.hashed_password);
        if (!authenticated) {
            console.log('WRONG PASSWORD');
            return done(null, false, req.flash('loginMessage', 'wrong password.'));  
        } 
        
    
        console.log('login sucess');
        return done(null, user); 
    });

});