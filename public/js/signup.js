var i=0;
$(".form-control").on("keydown", function(event){
    i++
    if(i===4){
        i=0;
    }
    document.querySelectorAll(".signup-circle")[i].classList.add("signup-circle-up");
    window.setTimeout(function(){
        document.querySelectorAll(".signup-circle")[i].classList.remove("signup-circle-up");
    }, 60);
});