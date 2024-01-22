let canvas; 
let ctx;
let fps = 50;

let anchoCanvas = 400;
let altoCanvas = 640;

let anchoTablero = 10;
let alturaTablero = 20;

let margenSuperior = 4;

let anchoF = 40;
let altoF= 40;
// dimension = 12x17 - 10x16
let tablero =   [
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1],
                ]

// colores

let rojo = "#f0190a";
let morado = "#750af7";
let naranja = "#f7710a";
let amarillo = "#f3f70a";
let verde = "#07f007";
let cyan = "#0fbfff";
let azul = "#0713f0";

let fichaGrefico = [

    [
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        ],
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        ],
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ]
    ],

    [
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        ],
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0],
        ],
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ]
       
       
    ],

    [
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0],
        ],
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0],
        ],
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ]
    ],

    [
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0],
        ],
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0],
        ],
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ]
    ],

    [
        [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
        ],
        [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0],
        ],
        [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0],
        ],
        [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
        ]
    ],

    [
        [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
        ],
        [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0],
        ],
        [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0],
        ],
        [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
        ]
    ],

    [
        [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
        [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,7,0],
        [0,0,0,0],
        ],
        [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0],
        ],
        [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
        ]
    ],


       

   

]

function resetTablero(){
    console.log("resetear");
}
let pieza; 

class ObjPieza{
    constructor(){
        this.x = 0;
        this.y = 0;

        this.angulo = 0;
        this.tipo = 6;

        this.retraso = 50;
        this.fotograma = 0;
        this.nueva();

    }

    nueva(){
        this.tipo = Math.floor(Math.random()*7);
        this.y = 5
        this.x = 4
    }

    comprobarPerder(){
        let perder = false; 

        for(let px = 1; px<anchoTablero+1; px++){
            if(tablero[2][px] > 0){
                perder = true;
            }
        }
        return perder
    }

    caer(){
        if(this.fotograma < this.retraso){
            this.fotograma++;
        }
        else{
            if(this.colision(this.angulo, this.y+1, this.x) == false){
            this.y++
        
            }
            else {
                this.fijar();
                this.nueva();
                if(this.comprobarPerder()==true){
                    resetTablero()
                }

            }
        this.fotograma = 0
        }
        
    }

    fijar(){
        for(let py = 0; py < 4; py++){
            for(let px = 0; px < 4; px++){
                if(fichaGrefico[this.tipo][this.angulo][py][px]){
                    tablero[this.y + py][this.x + px] = fichaGrefico[this.tipo][this.angulo][py][px]
                }
            }
        }
    }
    colision(anguloNuevo,yNueva,xNueva){
        let resultado = false;
        for(let py = 0; py < 4; py++){
            for(let px = 0; px < 4; px++){
                if(fichaGrefico[this.tipo][anguloNuevo][py][px]){
                    if(tablero[yNueva + py ][xNueva + px ]>0){
                        resultado = true;
                    }
                }
            }
        }
        return resultado
    }

    rotar(){

    let anguloNuevo = this.angulo
        if(anguloNuevo < 3){
            anguloNuevo++
        }
        else {
            anguloNuevo = 0
        }

        if(this.colision(anguloNuevo,this.y, this.x)==false){
            this.angulo = anguloNuevo
        }
        console.log("rotar");

    }



    dibuja(){
   
        for(let py = 0; py < 4; py++){
            for(let px = 0; px < 4; px++){
                if(fichaGrefico[this.tipo][this.angulo][py][px] != 0){
                
                    if(fichaGrefico[this.tipo][this.angulo][py][px] == 1){
                        ctx.fillStyle = rojo;
                    }

                    if(fichaGrefico[this.tipo][this.angulo][py][px] == 2){
                        ctx.fillStyle = naranja;
                    }

                    if(fichaGrefico[this.tipo][this.angulo][py][px] == 3){
                        ctx.fillStyle = amarillo;
                    }

                    if(fichaGrefico[this.tipo][this.angulo][py][px] == 4){
                        ctx.fillStyle = verde;
                    }

                    if(fichaGrefico[this.tipo][this.angulo][py][px] == 5){
                        ctx.fillStyle = cyan;
                    }

                    if(fichaGrefico[this.tipo][this.angulo][py][px] == 6){
                        ctx.fillStyle = azul;
                    }

                    if(fichaGrefico[this.tipo][this.angulo][py][px] == 7){
                        ctx.fillStyle = morado;
                    }
                
                ctx.fillRect((this.x + px - 1)*anchoF, (this.y + py - margenSuperior)*altoF,anchoF,altoF)  
                }

            }
        } 
    }


    abajo(){

        if(this.colision(this.angulo, this.y+1, this.x)== false){
        this.y++
        console.log("abajo");
        }

    }

    izquieda(){
        if(this.colision(this.angulo, this.y, this.x-1)== false){
        this.x--
        console.log("izquierda");
        }
    }
    
    derecha(){
        if(this.colision(this.angulo, this.y, this.x+1)== false){
        this.x++
        console.log("derecha");
        }
    }

}

function dibujaTablero(){
    for(let py = margenSuperior; py < alturaTablero; py++){
        for(let px = 1; px < anchoTablero +1; px++){
            if(tablero[py][px] != 0){
            
                if(tablero[py][px] == 1){
                    ctx.fillStyle = rojo;
                }

                if(tablero[py][px] == 2){
                    ctx.fillStyle = naranja;
                }

                if(tablero[py][px] == 3){
                    ctx.fillStyle = amarillo;
                }

                if(tablero[py][px] == 4){
                    ctx.fillStyle = verde;
                }

                if(tablero[py][px] == 5){
                    ctx.fillStyle = cyan;
                }

                if(tablero[py][px] == 6){
                    ctx.fillStyle = azul;
                }

                if(tablero[py][px] == 7){
                    ctx.fillStyle = morado;
                }
            
            ctx.fillRect((px-1)*anchoF, (py-margenSuperior)*altoF,anchoF,altoF)  
            }

        }
    } 

}

function inicializaTeclado(){
    document.addEventListener("keydown", function(tecla){
        if(tecla.keyCode == 38){
            pieza.rotar();
        }

        if(tecla.keyCode == 40){
            pieza.abajo();
        }

        if(tecla.keyCode == 37){
            pieza.izquieda();
        }

        if(tecla.keyCode == 39){
            pieza.derecha();
        }
    })
    
}

function inicializar(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;

    pieza = new ObjPieza();
    inicializaTeclado();

    setInterval(function(){
        principal();
    },1000/fps)
}

function borrarCanvas(){
    canvas.width = anchoCanvas;
    canvas.height =altoCanvas;
}

function principal(){
    borrarCanvas();
    dibujaTablero();
    pieza.caer();
    pieza.dibuja()

}
