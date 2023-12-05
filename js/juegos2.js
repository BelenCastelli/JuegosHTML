// function comprar(objeto){
//     switch(objeto){
//         case 1: 
//             console.log("Has comprado una poción");
//         break; 

//         case 2: 
//         console.log("Has comprado una Magia");
//         break; 

//         case 3: 
//         console.log("Has comprado una Espada");
//         break; 

//         case 4: 
//         console.log("Has comprado un Arco");
//         break; 

//         default:
//             console.log("No tengo ni idea de lo que has comprado");
//         break;

//     }
// }

function crearEnemigo(){
    console.log("Enemigo Creado");
}

function enemigos(cantidad){
    for(let i = 1; i <= cantidad; i++){
        console.log("valor contador: " + i);
        crearEnemigo()
    }
}

function tabla(){
    for(let i = 1; i < 10; i++){
        console.log("Tabla del " + i);
        for(let z = 1; z < 11; z++){
            let resultado = i*z;
            console.log(i + "X" + z + "=" + resultado);
        }
    }
}

let numCPU = 0
let numUsuario = 7; 

numCPU = Math.floor((Math.random() * 50) + 1)
console.log(numCPU);
// DO CUANDO QUIERO QUE ENTRE POR LO MENOS UNA VEZ, SI USO WHILE Y LOS VALORES SON IGUALES NO SE EJECUTA



//  while(numUsuario != numCPU) {
//     numUsuario = parseInt(prompt("Adivina el nuumero que he pensado"))

//     if(numUsuario == numCPU){
//         console.log("Has acertado");
//     } else {
//         console.log("Has fallado")}

//  }

do{
    numUsuario = parseInt(prompt("Adivina el nuumero que he pensado"))

    if(numUsuario == numCPU){
        console.log("Has acertado");
    } else {
        if(numCPU < numUsuario){
            alert("el número es más pequeño")
        } else {
            alert("el número es mayor")
        }
    }
// condicion para que siga ejecutando
} while(numUsuario != numCPU)

