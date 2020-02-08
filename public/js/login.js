var deg=0;
$(".form-control").on("keydown", function(event){
    deg+=20;
    $(".login-bubbles").css("transform", "rotate("+deg+"deg)").animate({width: "7.5rem"}, 80).animate({width: "7rem"},80);;

});