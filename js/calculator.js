//****************/ ON ENTER CALCOLO FUEL PER GIRI*************
var input = document.getElementById("fuellaps");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        calculatorLaps();
    }
});


//**********************/ CALCOLO FUEL PER GIRI*******************
function calculatorLaps(){
    var x = document.getElementById("racelaps").value;
    var y = document.getElementById("fuellaps").value;


    if(x == ""){
        alert('Please insert race laps');
        document.getElementById("racelaps").focus();
    }

    if(y == ""){
        alert('Please insert fuel consuption per lap');
        document.getElementById("fuellaps").focus();
    }

    // DICHIARAZIONE OPERAZIONE
    var rislaps = x * y;

    // RISULTATO
    document.getElementById("risultato").innerHTML = ' Fuel needed ' + rislaps  + ' ' + 'liters';

    document.getElementById("risultato").style.display = 'block';
}


//*******************/ON ENTER CALCOLO FUEL PER TEMPO DI GARA**********
var input = document.getElementById("fuellaps2");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        calculatorLength();
    }
});


//***************/ CALCOLO FUEL PER TEMPO DI GARA**************
function calculatorLength(){

    // CALCOLO DEL TEMPO IN SECONDI
    var m = document.getElementById("minuti").value;
    var s = document.getElementById("secondi").value;
    var ml = document.getElementById("millisecondi").value;

    var time = (m * 60) + +s + (+ml / 1000);

    console.log(time);

    // CALCOLO 
    var rm = document.getElementById("raceminutes").value;
    var fl = document.getElementById("fuellaps2").value;

    var rislength = rm * 60 / time * fl;

    // RISULTATO 2
    document.getElementById("risultato2").innerHTML = ' Fuel needed ' + rislength.toFixed(2)  + ' ' + 'liters';

    document.getElementById("risultato2").style.display = 'block';
}



// FUNZIONE RESET PER LAPS
function resetLaps(){
    document.getElementById("racelaps").value = "";
    document.getElementById("fuellaps").value = "";
    document.getElementById("risultato").style.display = 'none';
}

// FUNZIONE RESET PER TIME
function resetTime(){
    document.getElementById("minuti").value = "";
    document.getElementById("secondi").value = "";
    document.getElementById("millisecondi").value = "";
    document.getElementById("secondi").value = "";
    document.getElementById("raceminutes").value = "";
    document.getElementById("fuellaps2").value = "";
    document.getElementById("risultato2").style.display = 'none';
}