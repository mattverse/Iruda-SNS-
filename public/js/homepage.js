// Activate
$("img").on("mouseover", function(){
    $("img").removeClass("homepage-black-img").animate({width: "18rem"}, 100).animate({width: "17rem"},100);
    $(".homepage-span").text("\"이루다!\"").addClass("font-pink");
});

$(".nav-link").on("mouseover", function(){
    $("img").removeClass("homepage-black-img").animate({width: "18rem"}, 100).animate({width: "17rem"},100);
    $(".homepage-span").text("\"이루다!\"").addClass("font-pink");
});

$(".navbar-brand").on("mouseover", function(){
    $("img").removeClass("homepage-black-img").animate({width: "18rem"}, 100).animate({width: "17rem"},100);
    $(".homepage-span").text("\"이루다!\"").addClass("font-pink");
});

// Deactivate

$("img").on("mouseleave", function(){
    $("img").addClass("homepage-black-img")
    $(".homepage-span").text("이루다").removeClass("font-pink");
});

$(".nav-link").on("mouseleave", function(){
    $("img").addClass("homepage-black-img")
    $(".homepage-span").text("이루다").removeClass("font-pink");
});

$(".navbar-brand").on("mouseleave", function(){
    $("img").addClass("homepage-black-img")
    $(".homepage-span").text("이루다").removeClass("font-pink");
});