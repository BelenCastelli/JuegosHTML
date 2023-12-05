let miCanvas; 


function inicializar(){
    miCanvas = document.getElementById("canvas");
// cuando en mi canvas se haga click me ejecuta la funcion clicRaton
    miCanvas.addEventListener("mousedown", clicRaton, false)
    miCanvas.addEventListener("mouseup", sueltaRaton, false)
    miCanvas.addEventListener("mousemove", posicionRaton, false)
}
// Para ver las coordenadas de donde está el ratón
function posicionRaton(e){
    let x = e.pageX;
    let y = e.pageY;
    console.log("X: " + x + "Y: " + y);
} 


function clicRaton(e){
    console.log("pulsado raton");
} 

function sueltaRaton(e){
    console.log("Raton liberado");
} 
