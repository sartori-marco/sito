(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery



// CLOCK AND DATE
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    var days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);


    // SETTIMANA 1
    if(curDay >= '24' && curDay <= '26' && curMonth == 'Agosto'){
        document.getElementById("prova1").style.display = 'block';
        var test = document.getElementById("prova1");
        test.classList.add("prova_colore");
        document.getElementById("prova2").style.display = 'none';
        document.getElementById("prova2_vee").style.display = 'none';
        document.getElementById("prova2_fer").style.display = 'none';
        document.getElementById("prova2_skip").style.display = 'none';
        document.getElementById("settimana1").style.backgroundColor = "#dff0d8";
        document.getElementById("settimana1_vee").style.backgroundColor = "#dff0d8";
        document.getElementById("settimana1_fer").style.backgroundColor = "#dff0d8";
        document.getElementById("settimana1_skip").style.backgroundColor = "#dff0d8";
    }
    else{
        document.getElementById("settimana1").style.backgroundColor = "white";
        document.getElementById("settimana1_vee").style.backgroundColor = "white";
        document.getElementById("settimana1_fer").style.backgroundColor = "white";
        document.getElementById("settimana1_skip").style.backgroundColor = "white";
    }

    // SETTIMANA 2
    if(curDay >= '27' && curDay <= '29' && curMonth == 'Agosto'){
        document.getElementById("prova2").style.display = 'block';
        document.getElementById("prova2_vee").style.display = 'block';
        document.getElementById("prova2_fer").style.display = 'block';
        document.getElementById("prova2_skip").style.display = 'block';
        document.getElementById("prova1").style.display = 'none';
        document.getElementById("settimana2").style.backgroundColor = "#dff0d8";
    }

    // SETTIMANA 3
    if(curDay >= '30' && curMonth == 'Agosto' || curDay <= '1' && curMonth == 'Settembre'){
        document.getElementById("prova3").style.display = 'block';
        document.getElementById("prova2").style.display = 'none';
        document.getElementById("prova1").style.display = 'none';
        document.getElementById("settimana1").style.backgroundColor = "white";
        document.getElementById("settimana2").style.backgroundColor = "white";
        document.getElementById("settimana3").style.backgroundColor = "#dff0d8";
    }






}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}




// POPUP
$(".click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('model-open');
});

// VEE
$(".click-here_vee").on('click', function() {
    $(".custom-model-main_vee").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_vee").removeClass('model-open');
});
// FERRARI GT3
$(".click-here_fer").on('click', function() {
    $(".custom-model-main_fer").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_fer").removeClass('model-open');
});
// SKIPPY
$(".click-here_skip").on('click', function() {
    $(".custom-model-main_skip").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_skip").removeClass('model-open');
});
// USF
$(".click-here_usf").on('click', function() {
    $(".custom-model-main_usf").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_usf").removeClass('model-open');
});
// AD MAZDA
$(".click-here_adma").on('click', function() {
    $(".custom-model-main_adma").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_adma").removeClass('model-open');
});
// F3 CHAMPIONSHIP
$(".click-here_f3c").on('click', function() {
    $(".custom-model-main_f3c").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_f3c").removeClass('model-open');
});
// F3 FIXED
$(".click-here_f3f").on('click', function() {
    $(".custom-model-main_f3f").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_f3f").removeClass('model-open');
});
// RADICAL
$(".click-here_rad").on('click', function() {
    $(".custom-model-main_rad").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_rad").removeClass('model-open');
});
// VRS ENDURANCE
$(".click-here_vrsend").on('click', function() {
    $(".custom-model-main_vrsend").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_vrsend").removeClass('model-open');
});
// GT3 FIXED
$(".click-here_gt3f").on('click', function() {
    $(".custom-model-main_gt3f").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_gt3f").removeClass('model-open');
});
// GTE ENDURANCE
$(".click-here_gte").on('click', function() {
    $(".custom-model-main_gte").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_gte").removeClass('model-open');
});
// IMSA
$(".click-here_ims").on('click', function() {
    $(".custom-model-main_ims").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_ims").removeClass('model-open');
});
// LMP2
$(".click-here_lmp2").on('click', function() {
    $(".custom-model-main_lmp2").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_lmp2").removeClass('model-open');
});
// VRS GT SPRINT 
$(".click-here_vrss").on('click', function() {
    $(".custom-model-main_vrss").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_vrss").removeClass('model-open');
});
// PURE DRIVING
$(".click-here_pur").on('click', function() {
    $(".custom-model-main_pur").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_pur").removeClass('model-open');
});
//************************************* */ AUTO
// GT3
$(".click-here_gt3car").on('click', function() {
    $(".custom-model-main_gt3car").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_gt3car").removeClass('model-open');
});
// GTE
$(".click-here_gtecar").on('click', function() {
    $(".custom-model-main_gtecar").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main_gtecar").removeClass('model-open');
});