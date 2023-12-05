// document.addEventListener("keydown", function(tecla){
//     // console.log(tecla.keyCode);
//     if(tecla.keyCode == 32){
//         console.log("espacio");
//     }

//     if(tecla.keyCode == 38){
//         console.log("arriba");
//     }

// });
//  INDICA QUE SI QUEREMOS EVITAR O NO ESTAR PULSANDO (TRUE: HAY QUE PULSAR)
let configTeclado = { prevent_repeat : true}
// captura lo que se pulsa
let eventoTeclado = new window.keypress.Listener(this, configTeclado)

function pulsaA(){
    console.log("Has pulsado a");
}

function pulsaAB(){
    console.log("Has pulsado a y b a la vez");
}

function ataqueEspecial(){
    console.log("!ATAQUE ESPECIAL!");
}

// una tecla
eventoTeclado.simple_combo("a", pulsaA);
// teclas a la vez, las que yo quiera
eventoTeclado.simple_combo("a b", pulsaAB);
// secuencia de teclas
eventoTeclado.sequence_combo("up down a b", ataqueEspecial)