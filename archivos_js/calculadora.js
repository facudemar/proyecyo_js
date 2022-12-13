let pantalla_calc = document.getElementById("pantalla");
function mostrar(num){
    pantalla_calc.value +=num;
}

function calcular(){
    if(pantalla_calc==""){
        pantalla_calc.value=""
    }
    else{
        try{
            pantalla_calc.value = eval(pantalla_calc.value);
        }
        catch(err){
            alert("Argumento invalido");
        }
    }
}

function limpiar(){
    pantalla_calc.value="";
}

function borrar(){
    pantalla_calc.value = pantalla_calc.value.slice(0,-1)
}