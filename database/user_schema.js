var crypto = require('crypto');
var Schema = {};

Schema.createSchema = function(mongoose){
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

    
	UserSchema_profile
	.virtual('password')
    .set(function(password){
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function(){
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
    return UserSchema_profile;
}

module.exports = Schema;