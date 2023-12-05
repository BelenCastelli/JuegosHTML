function inicializar(){

}

// let mochila = ["Espada", "Pocion", "Daga", "Flecha", "Cola de Fénix"]



let mochila = []

mochila.push("A")
mochila.push("B")
mochila.push("C")
mochila.push("D")
mochila.push("E")
mochila.push("F")

function compra(objeto){
    if(objeto == 1){
        mochila.push("Espada")
  
    } 
    else {
        mochila.push("Poción")
      
    }

    muestraInventario()
}

function muestraInventario(){
    for(let i = 0; i < mochila.length; i++){
    console.log(i + "- " + mochila[i]);
}
}

function vender(){
    mochila.splice(2,1)
}