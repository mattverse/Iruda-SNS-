var uploadInterestArray = []

$(".upload-goal1").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal1").addClass("img-invert");
            $(".upload-goal1").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal1").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal1").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("exercise");
            $("#exercise_btn").click();
        } else {
            $(".upload-goal1").addClass("img-invert");
            $(".upload-goal1").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal1").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal1").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
        
    } else {
        // even clicks
        $(".upload-goal1").removeClass("img-invert")
        $(".upload-goal1").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal1").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal1").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("exercise");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#exercise_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal2").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal2").addClass("img-invert");
            $(".upload-goal2").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal2").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal2").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("smoke");
            $("#smoke_btn").click();
        } else {
            $(".upload-goal2").addClass("img-invert");
            $(".upload-goal2").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal2").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal2").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal2").removeClass("img-invert")
        $(".upload-goal2").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal2").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal2").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("smoke");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#smoke_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal3").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal3").addClass("img-invert");
            $(".upload-goal3").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal3").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal3").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("selfdev");
            $("#selfdev_btn").click();
        } else {
            $(".upload-goal3").addClass("img-invert");
            $(".upload-goal3").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal3").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal3").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal3").removeClass("img-invert")
        $(".upload-goal3").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal3").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal3").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("selfdev");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#selfdev_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal4").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal4").addClass("img-invert");
            $(".upload-goal4").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal4").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal4").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("money");
            $("#money_btn").click();
        } else {
            $(".upload-goal4").addClass("img-invert");
            $(".upload-goal4").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal4").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal4").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal4").removeClass("img-invert")
        $(".upload-goal4").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal4").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal4").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("money");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#money_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal5").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal5").addClass("img-invert");
            $(".upload-goal5").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal5").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal5").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("certificate");
            $("#certificate_btn").click();
        } else {
            $(".upload-goal5").addClass("img-invert");
            $(".upload-goal5").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal5").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal5").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal5").removeClass("img-invert")
        $(".upload-goal5").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal5").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal5").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("certificate");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#certificate_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal6").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal6").addClass("img-invert");
            $(".upload-goal6").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal6").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal6").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("language");
            $("#language_btn").click();
        } else {
            $(".upload-goal6").addClass("img-invert");
            $(".upload-goal6").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal6").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal6").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal6").removeClass("img-invert")
        $(".upload-goal6").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal6").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal6").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("language");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#language_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal7").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal7").addClass("img-invert");
            $(".upload-goal7").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal7").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal7").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("alcohol");
            $("#alcohol_btn").click();
        } else {
            $(".upload-goal7").addClass("img-invert");
            $(".upload-goal7").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal7").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal7").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal7").removeClass("img-invert")
        $(".upload-goal7").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal7").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal7").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("alcohol");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#alcohol_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal8").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal8").addClass("img-invert");
            $(".upload-goal8").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal8").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal8").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("travel");
            $("#travel_btn").click();
        } else {
            $(".upload-goal8").addClass("img-invert");
            $(".upload-goal8").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal8").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal8").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal8").removeClass("img-invert")
        $(".upload-goal8").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal8").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal8").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("travel");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#travel_btn").click();
    }

    $(this).data('state', state);  
});

$(".upload-goal9").on('click',function(){

    var state = $(this).data('state');  

    state = !state; 

    if (state) {
        // odd clicks
        if (uploadInterestArray.length === 0) {
            $(".upload-goal9").addClass("img-invert");
            $(".upload-goal9").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal9").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal9").removeClass("upload-goal-big");
            },200);
            uploadInterestArray.push("book");
            $("#book_btn").click();
        } else {
            $(".upload-goal9").addClass("img-invert");
            $(".upload-goal9").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
            $(".upload-goal9").addClass("upload-goal-big");
            window.setTimeout(function(){
                $(".upload-goal9").removeClass("upload-goal-big");
            },200);
            alert("하나의 목표만 선택할 수 있습니다!");
        }
    } else {
        // even clicks
        $(".upload-goal9").removeClass("img-invert")
        $(".upload-goal9").animate({width: "4.5rem"}, 100).animate({width: "4rem"},100);
        $(".upload-goal9").addClass("upload-goal-big");
        window.setTimeout(function(){
            $(".upload-goal9").removeClass("upload-goal-big");
        },200);
        const idx = uploadInterestArray.indexOf("book");
        if( idx > -1) uploadInterestArray.splice(idx, 1);
        $("#book_btn").click();
    }

    $(this).data('state', state);  
});



