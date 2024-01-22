let Personaje = function(x, y, nombre){
    // coordenadas donde está el personaje
    this.x = x;
    this.y = y;

    this.nombre = nombre;

    // METODO ABAJO
    this.abajo = function(){
        this.y += 10;
    }

    // Metodo hablar

    this.hablar = function(){
        console.log("Hola forastero, me llamo " + this.nombre);
    }
    this.dibuja = function(){

    }
}


let personaje1 = new Personaje(10, 100, "Frodo");
let personaje2 = new Personaje(220, 380, "Sam");
console.log(personaje1);
personaje1.abajo(); 
console.log("Nuevas coordenadas de " + personaje1.nombre + ": X: " + personaje1.x + ", Y: " + personaje1.y);