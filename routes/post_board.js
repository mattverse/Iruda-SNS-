var fs = require('fs');

var board_post = function(req, res){
    var database = req.app.get('database');
    var id = req.app.get('login_id');
    var fName = req.file.originalname;
    var firstPath = './public/uploads/'
    fs.renameSync('./tmp/' + req.file.filename, firstPath + fName);
    temp_filename = '/public/uploads/' + fName;
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
    var board = new database.BoardModel_profile();
    board.picture_url = temp_filename;
    board.like_count = 0;
    var year = new Date().getFullYear();
    var month = new Date().getMonth()+1;
    var day = new Date().getDate();
    const date = (year + "년 "+month+"월 "+day+"일");
    board.board_date = date;
    board.description = req.body.description;
    board.author = id;
    board.interest = interest;
    board.save(function(err){
        if(err) console.log(err);
        res.redirect('board'+ id);
    });
}


module.exports.board_post = board_post;