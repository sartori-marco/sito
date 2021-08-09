document.getElementById("calc_laps").style.display='none';
// CLICK SUI BOTTONI TIME O LAPS
function clickLaps(){
    document.getElementById("calc_laps").style.display='block';
    document.getElementById("calc_time").style.display='none';
}

function clickLength(){
    document.getElementById("calc_laps").style.display='none';
    document.getElementById("calc_time").style.display='block';
}


//***************/ CALCOLO FUEL PER TEMPO DI GARA**************
function calculatorLength(){
    // CALCOLO DEL TEMPO IN SECONDI
    var m = document.getElementById("minuti").value;
    var s = document.getElementById("secondi").value;
    var ml = document.getElementById("millisecondi").value;

    var time = (m * 60) + +s + (+ml / 1000);

    console.log(time);

    // CALCOLO BENZINA
    var rm = document.getElementById("race_length").value;
    var fl = document.getElementById("fuel_laps").value;

    var rislength = rm * 60 / time * fl;

    // RISULTATO BENZINA A GIRO
    document.getElementById("risultato_fuel").innerHTML = 'Fuel needed: ' + rislength.toFixed(2)  + ' ' + 'liters';

    // CALCOLO RISULTATO BENZINA SAFE
    var risSafe = rislength + +fl * 2;
    // RISULTATO BENZINA SAFE
    document.getElementById("fuel_safe").innerHTML = 'Fuel safe: ' + risSafe.toFixed(2)  + ' ' + 'liters';

    // CALCOLO STINTS
    // var rf = document.getElementById("risultato_fuel").value;
    var tc = document.getElementById("tank_capacity").value;
    var stints = risSafe / tc + +1;
    // RISULTATO STINTS
    document.getElementById("stints").innerHTML = 'Stints: ' + stints.toFixed(0);

    // CALCOLO ULTIMO STINT
    var lastStint = risSafe - (tc * stints - 1);
    document.getElementById("last_stint").innerHTML = 'Last stint: ' + lastStint.toFixed(0);

    // CALCOLO DURATA GARA
    var durata = rm / time;
    document.getElementById("race_duration").innerHTML = 'Race duration: ' + durata.toFixed(2);


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
    document.getElementById("race_length").value = "";
    document.getElementById("risultato_fuel").style.display = 'none';
    document.getElementById("fuel_safe").style.display = 'none';
    document.getElementById("stints").style.display = 'none';
    document.getElementById("last_stint").style.display = 'none';
    document.getElementById("race_duration").style.display = 'none';
}














// VECCHIO*************************************************

//****************/ ON ENTER CALCOLO FUEL PER GIRI*************
// var input = document.getElementById("fuellaps");
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         calculatorLaps();
//     }
// });


//**********************/ CALCOLO FUEL PER GIRI*******************
// function calculatorLaps(){
//     var x = document.getElementById("racelaps").value;
//     var y = document.getElementById("fuellaps").value;


//     if(x == ""){
//         alert('Please insert race laps');
//         document.getElementById("racelaps").focus();
//     }

//     if(y == ""){
//         alert('Please insert fuel consuption per lap');
//         document.getElementById("fuellaps").focus();
//     }

//     // DICHIARAZIONE OPERAZIONE
//     var rislaps = x * y;

//     // RISULTATO
//     document.getElementById("risultato").innerHTML = ' Fuel needed ' + rislaps  + ' ' + 'liters';

//     document.getElementById("risultato").style.display = 'block';
// }


// //*******************/ON ENTER CALCOLO FUEL PER TEMPO DI GARA**********
// var input = document.getElementById("fuellaps2");
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         calculatorLength();
//     }
// });








// // FUNZIONE RESET PER LAPS
// function resetLaps(){
//     document.getElementById("racelaps").value = "";
//     document.getElementById("fuellaps").value = "";
//     document.getElementById("risultato").style.display = 'none';
// }

