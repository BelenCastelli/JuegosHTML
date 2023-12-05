

let canvas;
let ctx;
let fps = 50


let anchoF = 80
let altoF = 80

let cesped = "#32a852"; 
let agua = "#3273a8"; 
let tierra = "#633b21"; 


let escenario = [
                [0,1,0,0,2],
                [0,1,1,0,0],
                [0,0,1,1,1],
                [0,2,2,2,1],
                [2,2,2,0,1]
                ]

function dibujarEscenario(){
    let color; 

    for(let y = 0; y < 5; y++){
        for(let x = 0; x < 5; x++){
            if(escenario[y][x] == 0){
                color = cesped
            }
            if(escenario[y][x] == 1){
                color = agua
            }

            if(escenario[y][x] == 2){
                color = tierra
            }

            ctx.fillStyle = color;
            ctx.fillRect(x*anchoF, y*altoF, anchoF, altoF)
        }

    }
}

function inicializar(){
    canvas = document.getElementById("canvas")

    // TIpo de visualizacion en la pantalla - ctx= contexto
    ctx = canvas.getContext("2d")
   
    // intervalo principal
    setInterval(function(){
        principal()
    }, 1000/fps)
}

function principal(){
    borraCanvas(); 
    dibujarEscenario()
    
}

function borraCanvas(){
    canvas.width = 500;
    canvas.height = 500
}



let lista = [ 
    [0,1,2,3],
    [4,5,6,7], 
    [8,9,0,1],
    [2,3,4,5]
    ]

console.log(lista[2][2]);

