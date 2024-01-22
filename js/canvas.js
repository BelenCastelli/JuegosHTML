let canvas;
let ctx;
let fps = 50

var imgRex; 

function inicializar(){
    canvas = document.getElementById("canvas")

    // TIpo de visualizacion en la pantalla - ctx= contexto
    ctx = canvas.getContext("2d")
    // Decirle que la variable es una imagen
    imgRex = new Image(); 
    // añadir la ruta de la imagen
    imgRex.src = "img/rex.png"
    imgRex.width = 100
    imgRex.height = 100
    // intervalo principal
    setInterval(function(){
        principal()
    }, 1000/fps)
}


let Protagonista = function(x, y){
    this.x = x;
    this.y = y; 
    this.velocidad = 3

    this.dibuja = function(){
        ctx.drawImage(imgRex, this.x, this.y, imgRex.width, imgRex.height)
    }

    this.arriba = function(){
        this.y -= this.velocidad
    }

    this.abajo = function(){
        this.y += this.velocidad
    }

    this.izquierda = function(){
        this.x -= this.velocidad
    }

    this.derecha = function(){
        this.x += this.velocidad
    }

    this.texto = function(){
        ctx.font = "30px impact"; 
        ctx.fillStyle = "#555555"
        ctx.fillText("X: " + this.x, 100, 100)
        ctx.fillText("Y: " + this.y, 200, 200)
    }
}


let Personaje = function (x, y){
    this.x = x;
    this.y = y;
    this.derecha = true

    this.dibuja = function(){
        // color
        ctx.fillStyle = "#FF0000"
        // para hacer un cuadraro(cuatro parametro: coordenadas x e y, ancho y largo)
        ctx.fillRect(this.x, this.y, 50,50)
    }
    
   
    this.mueve = function(velocidad){
        if(this.derecha == true){
            if(this.x < 400){
                this.x+=velocidad;
            } else {
                this.derecha = false;
            }
        } else {
            if(this.x > 50){
                this.x-=velocidad
            }else{
                this.derecha = true
            }
        }
    }
}
let per1 = new Personaje(10,100)
let per2 = new Personaje(10,180)
let per3 = new Personaje(10,250)
let prota = new Protagonista(200, 300)

document.addEventListener("keydown", function(tecla){
    // ARRIBA
    if(tecla.keyCode == 38){
        prota.arriba()
    }
    // ABAJO
    if(tecla.keyCode == 40){
        prota.abajo()
    }

    // IZQUIERDA
    if(tecla.keyCode == 37){
        prota.izquierda()
    }

    // DERECHA
    if(tecla.keyCode == 39){
        prota.derecha()
    }
})






// se necesita borrar el canvas para generar dinamismo, reestablezco valores de canvas
function borraCanvas(){
    canvas.width = 800;
    canvas.height = 800
}

function principal(){
    borraCanvas(); 
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();

    per1.mueve(1);
    per2.mueve(2)
    per3.mueve(7)

    prota.dibuja()
    prota.texto()
}
