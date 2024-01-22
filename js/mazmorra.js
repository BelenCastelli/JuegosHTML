
let canvas;
let ctx;
let fps = 50


let anchoF = 50
let altoF = 50

let muro = "#044f14"; 
let puerta = "#3a1700"; 
let tierra = "#c6892f"; 
let llave = "#c6bc00"


let protagonista;
let enemigos = [];
let colorProta = "#820c01"
let tileMap;
let imagenAntorcha;
let antorcha;
let antorcha2;


let escenario = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,3,3,0,0,0,3,3,3,3,0,0,3,3,0],
                [0,0,3,3,3,3,3,0,0,3,0,0,3,0,0],
                [0,0,3,0,0,0,3,3,0,3,3,3,3,0,0],
                [0,0,3,3,3,0,0,3,0,0,0,3,0,0,0],
                [0,3,3,0,0,0,0,3,0,0,0,3,0,0,0],
                [0,0,3,0,0,0,3,3,3,0,0,3,3,3,0],
                [0,3,3,3,0,0,3,0,0,0,1,0,0,3,0],
                [0,3,3,2,0,0,3,0,0,3,3,3,3,3,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

                ]
//  let color; 
function dibujarEscenario(){
   

    for(let y = 0; y < escenario.length; y++){
        for(let x = 0; x < escenario[0].length; x++){
            let tile = escenario[y][x]
            // if(escenario[y][x] == 0){
            //     color = muro
            // }
            // if(escenario[y][x] == 1){
            //     color = puerta
            // }

            // if(escenario[y][x] == 2){
            //     color = tierra
            // }

            // if(escenario[y][x] == 3){
            //     color = llave
            // }

            // ctx.fillStyle = color;
            // ctx.fillRect(x*anchoF, y*altoF, anchoF, altoF)
            ctx.drawImage(tileMap,tile*32, 0, 32, 32, anchoF*x, altoF*y, anchoF, altoF)
        }

    }
}

// OBJETO ANTORCHA
let Antorcha = function(x,y){
    this.x = x;
    this.y = y; 


    this.dibuja = function(){
 
        ctx.drawImage(tileMap,32, 64, 32, 32, this.x*anchoF, this.y*altoF, anchoF, altoF)
    };
}


// CLASE ENEMIGO

let Malo = function(x,y){
    this.x = x;
    this.y = y; 

    this.direccion = Math.floor(Math.random()*4);
    this.retraso = 50;
    this.fotograma = 0;

    this.dibuja = function(){

        ctx.drawImage(tileMap,0,32, 32, 32, this.x*anchoF, this.y*altoF, anchoF, altoF)
    };

    this.compruebaColision = function(x,y){
        let colisiona = false;

        if(escenario[y][x] == 0){
            colisiona = true;
        }
        return colisiona;
    }
    this.mueve = function(){
        protagonista.colisionEnemigo(this.x, this.y)

        if(this.contador < this.retraso){
            this.contador++
        } else {

            this.contador = 0;
            // ARRIBA
                if(this.direccion == 0){
            if(this.compruebaColision(this.x, this.y -1) == false){
                this.y--
            } else {
                this.direccion = Math.floor(Math.random()*4);
            }
            }
            // abajo
            if(this.direccion == 1){
                if(this.compruebaColision(this.x, this.y +1) == false){
                    this.y++
                } else {
                    this.direccion = Math.floor(Math.random()*4);
                }
            }

            // izquierda

            if(this.direccion == 2){
                if(this.compruebaColision(this.x -1, this.y) == false){
                    this.x--
                } else {
                    this.direccion = Math.floor(Math.random()*4);
                }
            }

            // derecha
            if(this.direccion == 3){
                if(this.compruebaColision(this.x +1, this.y) == false){
                    this.x++
                } else {
                    this.direccion = Math.floor(Math.random()*4);
                }
            }  
        }


    }

    
}

// OBJETO JUGADOR
var Jugador = function(){
    this.x = 1;
    this.y = 1;
    // this.color = "#820c01";
    this.llave = false;

    this.dibuja = function(){
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x*anchoF, this.y*altoF, anchoF, altoF);
        ctx.drawImage(tileMap,32,32, 32, 32, this.x*anchoF, this.y*altoF, anchoF, altoF)
    };

    this.colisionEnemigo = function(x,y){
        if(this.x == x && this.y == y){
            this.muerte();
        }
    }

    this.margenes = function(x,y){
        let colision = false;
        if(escenario[y][x] == 0){
            colision = true;
        }
        return colision;
    };

    this.arriba = function(){
        if(this.margenes(this.x, this.y-1) == false){
            this.y--;
            this.logicaObjetos();
        }
    };

    this.abajo = function(){
        if(this.margenes(this.x, this.y+1) == false){
            this.y++;
            this.logicaObjetos();
        }
    };

    this.izquierda = function(){
        if(this.margenes(this.x-1, this.y) == false){
            this.x--;
            this.logicaObjetos();
        }
    };

    this.derecha = function(){
        if(this.margenes(this.x+1, this.y) == false){
            this.x++;
            this.logicaObjetos();
        }
    };

    this.victoria = function(){
        console.log("!HAS GANADO!");
        this.x = 1
        this.y = 1
        this.llave = false
        escenario[8][3] = 2;

    }

    this.muerte = function(){
        console.log("!HAS PERDIDO!");
        this.x = 1
        this.y = 1
        this.llave = false
        escenario[8][3] = 2;

    }


    // coordenadas donde el protagonista
    this.logicaObjetos = function(){
        let objeto = escenario[this.y][this.x];
        // OBTIENE LLAVE
        if(objeto == 2 ){
            this.llave = true;
            escenario[this.y][this.x] = 3;
            console.log("HAS OBTENIDO LA LLAVE!");
        }
        // ABRIR PUERTA
        if(objeto == 1)
            {if(this.llave == true){
            this.victoria()
            } else {
            console.log("!Te falta la llave! NO PUEDES PASAR!");
            }  
        } 
    };
};



function inicializar(){
    canvas = document.getElementById("canvas")

    // TIpo de visualizacion en la pantalla - ctx= contexto
    ctx = canvas.getContext("2d")

    tileMap = new Image();
    tileMap.src = "img/tileMap.png"

    // Creamos al jugador
    protagonista = new Jugador()
    // creamos antorcha
    imagenAntorcha = new Antorcha(0,0)
    antorcha = new Antorcha(9,7)
    antorcha2 = new Antorcha(11,7)
    // creamos enemigos
    enemigos.push(new Malo(2,8));
    enemigos.push(new Malo(5,7));
    enemigos.push(new Malo(8,2));


   // LECTURA DEL TECLADO
    document.addEventListener("keydown", function(tecla){
        if(tecla.keyCode == 38){
            protagonista.arriba()

        }

        if(tecla.keyCode == 40){
           protagonista.abajo()
        }

        if(tecla.keyCode == 37){
            protagonista.izquierda()
        }

        if(tecla.keyCode == 39){
            protagonista.derecha()
        }
    })

    // intervalo principal
    setInterval(function(){
        principal()
    }, 1000/fps)
}

function principal(){
    borraCanvas(); 
    dibujarEscenario()
    imagenAntorcha.dibuja();
    antorcha.dibuja();
    antorcha2.dibuja();
    protagonista.dibuja()

    for(let c = 0; c < enemigos.length; c++){
        enemigos[c].mueve()
        enemigos[c].dibuja();
    }
    
}

function borraCanvas(){
    canvas.width = 1200;
    canvas.height = 800
}


