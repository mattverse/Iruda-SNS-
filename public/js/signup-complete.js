var duration = 10000;

$(document).ready(function(){
    loadingMotion();
    for(var i=600; i<duration; i+=600){
        window.setTimeout(loadingMotion, i);
    }
});

function loadingMotion(){
    document.querySelectorAll(".complete-circle")[0].classList.add("complete-circle-big");
    window.setTimeout(function(){
        document.querySelectorAll(".complete-circle")[0].classList.remove("complete-circle-big");
        document.querySelectorAll(".complete-circle")[1].classList.add("complete-circle-big");
    }, 100);
    window.setTimeout(function(){
        document.querySelectorAll(".complete-circle")[1].classList.remove("complete-circle-big");
        document.querySelectorAll(".complete-circle")[2].classList.add("complete-circle-big");
        window.setTimeout(function(){
            document.querySelectorAll(".complete-circle")[2].classList.remove("complete-circle-big");
            document.querySelectorAll(".complete-circle")[3].classList.add("complete-circle-big");
        }, 100);
    }, 200);
    window.setTimeout(function(){
        document.querySelectorAll(".complete-circle")[3].classList.remove("complete-circle-big");
        document.querySelectorAll(".complete-circle")[4].classList.add("complete-circle-big");
        window.setTimeout(function(){
            document.querySelectorAll(".complete-circle")[4].classList.remove("complete-circle-big");
        }, 100);
    }, 400);  
}
