var Schema = {};

Schema.createSchema =  function(mongoose){
    BoardSchema_profile = mongoose.Schema({
        picture_url : {type:String, required:true},
        like_count : {type: Number},
        description :{type:String},
        author : {type:String},
        board_date: {type: String},
        interest : {type: String}   
    });
    return BoardSchema_profile;
}

module.exports = Schema;