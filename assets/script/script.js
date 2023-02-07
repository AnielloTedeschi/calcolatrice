let operando1 = "";
let operatore = null;
let operando2 = "";
let carattere;
// funzione che serve a inserire i 3 principali input
// che servono a compiere l'operazione.
function inserisci(carattere) {
    // la costante verificaOperatore è un booleano che serve:
    // a stabilire se l'input immesso dall'utente è un segno matematico oppure no. 
    const verificaOperatore = carattere == '+' || carattere == '-' || carattere == '*' || carattere == '/';
    /* il primo if serve a definire il primo numero dell'operazione:
     * 1 la prima condizione controlla se l'input immesso è un numero oppure no.
    * 2 la seconda condizione invece stabilisce se stiamo parlando del primo numero immesso oppure no,      
        * 3 se entrambi le condizioni sono vere allora viene inserito il primo numero dell'operazione;   
    */
    if ((!(verificaOperatore)) && operatore == null) {
        operando1 += carattere;
        document.getElementById("display").innerHTML = operando1;
    }
    // questo if ha la funzione di inserire il segno matematico dell'operazione
// 1 la prima condizione dell'if verifica che l'input inserito sia un segno matematico
// 2 la seconda condizione  stabilisce che la variabile operatore sia null
//3  la terza condizione consente di di inserire l'operatore solo se il primo operando è gia stato inserito   
    if (verificaOperatore && (operatore == null) && ( operando1 != "")) {
        operatore = carattere;
        document.getElementById("display").innerHTML = operatore;
    }
    /* questo if è simile al primo , 
    * ma in questo caso se l'operatore è diverso da null allora significa che
    * l'utente ha gia inserito l operatore e quindi ora 
    * vuole inserire il secondo numero
    */
    if ((!(verificaOperatore)) && operatore != null) {
        operando2 += carattere;
        document.getElementById("display").innerHTML = operando2;
    }
    console.log(operando1, operatore, operando2);
}
// questa funzione è associata al bottone "=" nel file index.html 

// questa funzione serve ad azzerare il risultato quando l'operazione è stata eseguita
function cancella() {
    operando1 = '';
    operatore = null;
    operando2 = "";

    document.getElementById("display").innerHTML = "0";
}

function ottieniRisultato() {
    let risultato;
    let o1 = parseFloat(operando1);
    let o2 = parseFloat(operando2);

    if (operatore == '+') {
        risultato = o1 + o2;
    }

    if (operatore == '-') {
        risultato = o1 - o2;
    }

    if (operatore == '*') {
        risultato = o1 * o2;
    }

    if (operatore == '/') {
        risultato = o1 / o2;
    }

    console.log(risultato);
    document.getElementById("display").innerHTML = risultato;
operando1 = risultato;
operatore = null;
operando2 = "";

}
