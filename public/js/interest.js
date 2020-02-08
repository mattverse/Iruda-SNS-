var interestArray = [];

$(".interest-card-1").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img1").addClass("img-invert");
        $(".interest-card-1").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-1").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-1").removeClass("card-big");
        },200);
        interestArray.push("exercise");
    } else {
        // even clicks
        $(".interest-card-img1").removeClass("img-invert")
        $(".interest-card-1").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-1").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-1").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("exercise");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-2").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img2").addClass("img-invert");
        $(".interest-card-2").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-2").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-2").removeClass("card-big");
        },200);
        interestArray.push("smoke");
    } else {
        // even clicks
        $(".interest-card-img2").removeClass("img-invert")
        $(".interest-card-2").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-2").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-2").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("smoke");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-3").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img3").addClass("img-invert");
        $(".interest-card-3").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-3").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-3").removeClass("card-big");
        },200);
        interestArray.push("selfdev");
    } else {
        // even clicks
        $(".interest-card-img3").removeClass("img-invert")
        $(".interest-card-3").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-3").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-3").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("selfdev");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-4").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img4").addClass("img-invert");
        $(".interest-card-4").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-4").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-4").removeClass("card-big");
        },200);
        interestArray.push("save");
    } else {
        // even clicks
        $(".interest-card-img4").removeClass("img-invert")
        $(".interest-card-4").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-4").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-4").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("save");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-5").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img5").addClass("img-invert");
        $(".interest-card-5").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-5").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-5").removeClass("card-big");
        },200);
        interestArray.push("certificate");
    } else {
        // even clicks
        $(".interest-card-img5").removeClass("img-invert")
        $(".interest-card-5").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-5").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-5").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("certificate");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-6").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img6").addClass("img-invert");
        $(".interest-card-6").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-6").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-6").removeClass("card-big");
        },200);
        interestArray.push("language");
    } else {
        // even clicks
        $(".interest-card-img6").removeClass("img-invert")
        $(".interest-card-6").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-6").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-6").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("language");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-7").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img7").addClass("img-invert");
        $(".interest-card-7").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-7").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-7").removeClass("card-big");
        },200);
        interestArray.push("alcohol");
    } else {
        // even clicks
        $(".interest-card-img7").removeClass("img-invert")
        $(".interest-card-7").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-7").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-7").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("alcohol");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-8").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img8").addClass("img-invert");
        $(".interest-card-8").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-8").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-8").removeClass("card-big");
        },200);
        interestArray.push("travel");
    } else {
        // even clicks
        $(".interest-card-img8").removeClass("img-invert")
        $(".interest-card-8").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-8").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-8").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("travel");
        if( idx > -1) interestArray.splice(idx, 1);
    }

    $(this).data('state', state);  
});

$(".interest-card-9").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        $(".interest-card-img9").addClass("img-invert");
        $(".interest-card-9").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-9").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-9").removeClass("card-big");
        },200);
        interestArray.push("book");
    } else {
        // even clicks
        $(".interest-card-img9").removeClass("img-invert")
        $(".interest-card-9").animate({width: "14.5rem"}, 100).animate({width: "14rem"},100);
        $(".interest-card-9").addClass("card-big");
        window.setTimeout(function(){
            $(".interest-card-9").removeClass("card-big");
        },200);
        const idx = interestArray.indexOf("book");
        if( idx > -1) interestArray.splice(idx, 1);
        
    }

    $(this).data('state', state);  
});


var all_interest = ""
$(document).ready(function(){
    $('#give_interest').click(function(){
        all_interest += interestArray.length;
        all_interest+= " ";
        for(var i=0; i<interestArray.length; i++){
            
            all_interest += interestArray[i];
            all_interest += " ";
        }
        $.ajax({
            url: '/process/interest',
            type: 'POST',
            data: {data : all_interest},
            success: function(finish){
                window.location.href = finish.finish;
            }
        })

        
    })

    
})