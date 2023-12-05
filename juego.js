// let vida; 
// let ataque;
// let pocion;
// let nombre; 
// let textoBienvenida;

// nombre = "Frodo";
// textoBienvenida = "Hola ";

// vida = 100
// ataque = 10
// pocion = 20

// vida -= ataque
// vida -= ataque
// vida -= ataque
// vida -= ataque

// vida += pocion 

// vida++
// vida--

// console.log(textoBienvenida + nombre);
// console.log(vida);

// vida = 100;
// ataque = 10;
// pocion = 20;

// function muestraVida(nombre){
//     console.log("has sido atacado con: " + nombre);
//     console.log("Vida: " + vida);
// }

// function ataqueEnemigo(potencia, nombreAtaque){
//     vida-=potencia

//     muestraVida(nombreAtaque)

// }

// function bebePocion(){
//     vida+=pocion
//     muestraVida()
// }


// let num1;
// let num2;
// let resultado;

// function suma(num1, num2){
//     let valor;
    // Convierte en numero entero
//     num1 = parseInt(num1)
//     num2 = parseInt(num2)
//     valor = num1 + num2
//     return valor
// }
// function accion(){
//     num1 = prompt("Introduce el primer número")
//     num2 = prompt("Introduce el segundo número")
//     resultado = suma(num1, num2)
//     console.log(resultado);
// }


// Funciones
 
let turno = 1;
let vida = 100;

// ESTADOS JUGADOR
let vivo = true
let envenenado = false
let quemado = false

// JUGADAS CPU
let atacar = 0
let quemar = 1
let envenenar = 2
let fallar = 3

// ITEMS

let pocion = 0;
let colaFenix = 1; 
let pocionQuemaduras = 2; 
let pocionVeneno = 3

function usarItem(objeto){
    if(objeto == pocion){
        vida += 50
    }

    if(objeto == colaFenix){
        if(vivo == false){
            vivo = true
            vida = 30
        } else {
            console.log("ya estás vivo, no puedes usarla");
        }
        
    }

    if(objeto == pocionQuemaduras){
        if(quemado == true){
            quemado = false
        } else {
            console.log("No estás quemado! no se puede usar");
        }
     
    }

    if(objeto == pocionVeneno){
        if(envenenado == true){
            envenenado = false
        } else {
            console.log("No estás envenenado! no se puede usar");
        }
     }
 

    muestraEstadoJugador()

}

function muestraEstadoJugador(){
    if(vivo == true){
            console.log("Vida: " + vida);
        if(envenenado == true){
            console.log("Envenenado");
        }

        if(quemado == true){
            console.log("Quemado");
        }
    } else{
        console.log("Estas muerto");
    }
}

function JuegaTurno(){
    let jugadaCPU = Math.floor(Math.random() * 4);

    if(vida <= 0){
        vivo = false;
    }

    if(vivo == true){
                console.log(jugadaCPU);

        if(jugadaCPU == atacar ){
            vida-=10
            console.log("He atacado al jugador");
        }

        if(jugadaCPU == quemar ){
            quemado = true
            console.log("He quemado al jugador");
        }

        if(jugadaCPU == envenenar ){
            envenenado = true
            console.log("He envenenado al jugador");
        }

        if(jugadaCPU == fallar ){
            console.log("He fallado miserablemente");
            }
        muestraEstadoJugador()
    } else  {
            console.log("Has muerto");
    }
    }

   
    


