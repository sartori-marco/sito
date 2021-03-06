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



// DISPLAY NONE AL CALC PER LAPS
document.getElementById("calc_laps").style.display='none';


// COLORE AL BOTTONE TIME
if(document.getElementById("calc_time").style.display = 'block'){
    document.getElementById("lengthBtn").style.backgroundColor = '#262626';
    
}

// CLICK SUI BOTTONI TIME O LAPS
function clickLaps(){
    document.getElementById("calc_laps").style.display='block';
    document.getElementById("calc_time").style.display='none';
    document.getElementById("lapsBtn").style.backgroundColor = '#262626';
    document.getElementById("lengthBtn").style.backgroundColor = '#d6d6d6';
    document.getElementById("minuti").value = "";
    document.getElementById("secondi").value = "";
    document.getElementById("millisecondi").value = "";
    document.getElementById("race_hr").value = "";
    document.getElementById("race_min").value = "";
    document.getElementById("fuel_laps").value = "";
    document.getElementById("tank_capacity").value = "";
    document.getElementById("risultato_fuel").style.display = 'none';
    document.getElementById("fuel_safe").style.display = 'none';
    document.getElementById("stints").style.display = 'none';
    document.getElementById("last_stint").style.display = 'none';
    document.getElementById("race_duration").style.display = 'none';
}

function clickLength(){
    document.getElementById("calc_laps").style.display='none';
    document.getElementById("calc_time").style.display='block';
    document.getElementById("lengthBtn").style.backgroundColor = '#262626';
    document.getElementById("lapsBtn").style.backgroundColor = '#d6d6d6';
    document.getElementById("race_lp").value = "";
    document.getElementById("minuti_lp").value = "";
    document.getElementById("secondi_lp").value = "";
    document.getElementById("millisecondi_lp").value = "";
    document.getElementById("fuel_lp").value = "";
    document.getElementById("tank_capacity_lp").value = "";
    document.getElementById("risultato_fuel_lp").style.display = 'none';
    document.getElementById("fuel_safe_lp").style.display = 'none';
    document.getElementById("stints_lp").style.display = 'none';
    document.getElementById("last_stint_lp").style.display = 'none';
    document.getElementById("race_duration_lp").style.display = 'none';
}



// //*******************/ON ENTER CALCOLO FUEL PER TEMPO DI GARA**********
var input = document.getElementById("tank_capacity");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        calculatorLength();
    }
});


//***************/ CALCOLO FUEL PER TEMPO DI GARA**************
function calculatorLength(){
    // CALCOLO DELLA GARA IN SECONDI
    var rah = document.getElementById("race_hr").value;
    var ram = document.getElementById("race_min").value;
    
    var rm = rah * 3600 + +ram * 60;

    // CALCOLO DEL TEMPO IN SECONDI
    var m = document.getElementById("minuti").value;
    var s = document.getElementById("secondi").value;
    var ml = document.getElementById("millisecondi").value;

    var time = (m * 60) + +s + (+ml / 1000);

    // console.log(time);

    // CALCOLO BENZINA
    var fl = document.getElementById("fuel_laps").value;

    var rislength = rm / time * fl;

    // RISULTATO BENZINA A GIRO
    document.getElementById("risultato_fuel").innerHTML = rislength.toFixed(2)  + ' ' + 'L';

    // CALCOLO RISULTATO BENZINA SAFE
    var risSafe = rislength + (fl * 1.2);
    // RISULTATO BENZINA SAFE
    document.getElementById("fuel_safe").innerHTML = risSafe.toFixed(2)  + ' ' + 'L';

    // CALCOLO STINTS
    var tc = document.getElementById("tank_capacity").value;
    var stints = Math.floor(risSafe / tc + +1);
    // RISULTATO STINTS
    document.getElementById("stints").innerHTML = Math.floor(stints);

    // CALCOLO ULTIMO STINT
    var lastStint = risSafe - (tc * (stints - 1));
    document.getElementById("last_stint").innerHTML = lastStint.toFixed(2) + ' ' + 'L';


    // CALCOLO DURATA GARA
    var durata = rm / time;
    document.getElementById("race_duration").innerHTML = Math.ceil(durata) + ' ' + 'Laps';


    document.getElementById("risultato_fuel").style.display = 'block';
    document.getElementById("fuel_safe").style.display = 'block';
    document.getElementById("stints").style.display = 'block';
    document.getElementById("last_stint").style.display = 'block';
    document.getElementById("race_duration").style.display = 'block';
}


// FUNZIONE RESET PER TIME
function resetTime(){
    document.getElementById("minuti").value = "";
    document.getElementById("secondi").value = "";
    document.getElementById("millisecondi").value = "";
    document.getElementById("race_hr").value = "";
    document.getElementById("race_min").value = "";
    document.getElementById("fuel_laps").value = "";
    document.getElementById("tank_capacity").value = "";
    document.getElementById("risultato_fuel").style.display = 'none';
    document.getElementById("fuel_safe").style.display = 'none';
    document.getElementById("stints").style.display = 'none';
    document.getElementById("last_stint").style.display = 'none';
    document.getElementById("race_duration").style.display = 'none';
}







// VECCHIO*************************************************

//****************/ ON ENTER CALCOLO FUEL PER GIRI*************
var input = document.getElementById("tank_capacity_lp");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        calculatorLaps();
    }
});


//**********************/ CALCOLO FUEL PER GIRI*******************
function calculatorLaps(){
    var x = document.getElementById("race_lp").value;
    var y = document.getElementById("fuel_lp").value;

    // if(x == ""){
    //     alert('Please insert race laps');
    //     document.getElementById("race_lp").focus();
    // }

    // if(y == ""){
    //     alert('Please insert fuel consuption per lap');
    //     document.getElementById("fuel_lp").focus();
    // }

    // DICHIARAZIONE OPERAZIONE FUEL NEEDED
    var rislaps = x * y;

    // RISULTATO FUEL NEEDED
    document.getElementById("risultato_fuel_lp").innerHTML = rislaps.toFixed(2)  + ' ' + 'L';

    // DICHIARAZIONE FUEL SAVE
    var rislapsSave = rislaps + (y * 1.2);

    // RISULTATO FUEL SAVE
    document.getElementById("fuel_safe_lp").innerHTML = rislapsSave.toFixed(2)  + ' ' + 'L';


    // CALCOLO STINTS
    var tc = document.getElementById("tank_capacity_lp").value;
    var stints = Math.floor(rislapsSave / tc + +1);
    // RISULTATO STINTS
    document.getElementById("stints_lp").innerHTML = Math.floor(stints);

    // CALCOLO ULTIMO STINT
    var lastStint = rislapsSave - (tc * (stints - 1));
    document.getElementById("last_stint_lp").innerHTML = lastStint.toFixed(2) + ' ' + 'L';

    // CALCOLO LA DURATA DELLA GARA
    // TRASFORMO IL TEMPO IN SECONDI  RISULTATO = SECONDI X GIRI????????????????
    var m = document.getElementById("minuti_lp").value;
    var s = document.getElementById("secondi_lp").value;
    var ml = document.getElementById("millisecondi_lp").value;

    var time = (m * 60) + +s + (+ml / 1000);
    console.log(time);

    // CALCOLO DURATA GARA
    var durataLp = x * time;
    var durataGar = durataLp / 60;

    // RISULTATO DURATA GARA
    document.getElementById("race_duration_lp").innerHTML = Math.floor(durataGar)  + ' ' + 'Min';

    // BLOCK AL RESET
    document.getElementById("risultato_fuel_lp").style.display = 'block';
    document.getElementById("fuel_safe_lp").style.display = 'block';
    document.getElementById("stints_lp").style.display = 'block';
    document.getElementById("last_stint_lp").style.display = 'block';
    document.getElementById("race_duration_lp").style.display = 'block';

    // SE TORNO A TIME SI VEDE NAN E NON VOGLIO
    document.getElementById("risultato_fuel_lp").style.display = 'block';
    document.getElementById("minuti").value = "";
    document.getElementById("secondi").value = "";
    document.getElementById("millisecondi").value = "";
    document.getElementById("race_hr").value = "";
    document.getElementById("race_min").value = "";
    document.getElementById("fuel_laps").value = "";
    document.getElementById("tank_capacity").value = "";
    document.getElementById("risultato_fuel").style.display = 'none';
    document.getElementById("fuel_safe").style.display = 'none';
    document.getElementById("stints").style.display = 'none';
    document.getElementById("last_stint").style.display = 'none';
    document.getElementById("race_duration").style.display = 'none';
}



// FUNZIONE RESET PER LAPS
function resetLaps(){
    document.getElementById("race_lp").value = "";
    document.getElementById("minuti_lp").value = "";
    document.getElementById("secondi_lp").value = "";
    document.getElementById("millisecondi_lp").value = "";
    document.getElementById("fuel_lp").value = "";
    document.getElementById("tank_capacity_lp").value = "";
    document.getElementById("risultato_fuel_lp").style.display = 'none';
    document.getElementById("fuel_safe_lp").style.display = 'none';
    document.getElementById("stints_lp").style.display = 'none';
    document.getElementById("last_stint_lp").style.display = 'none';
    document.getElementById("race_duration_lp").style.display = 'none';
}

