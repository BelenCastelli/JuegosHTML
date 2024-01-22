let fps = 10;
let xEscenario = 0;

function atacar(){
    console.log("Has atacado");
}

function mueveEscenario(){
    xEscenario++;
    console.log(xEscenario);
}

// BUCLE PRINCPILAL
function principal(){
    mueveEscenario();
}
// pasar dos parametros: nimbre de la funcion que ejecuta, 
// cantidad de tiempo que necesita para que se ejecute (10 veces por segundo se ejecute)

setInterval(principal, 1000/fps)