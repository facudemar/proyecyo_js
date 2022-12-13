let input = document.getElementById("pantalla");
function mostrar(text){
    input.onkeydown = input.onkeyup = input.onkeypress = handle;
    input.value +=text
}