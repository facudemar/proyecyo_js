function resolucion(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let titulo=document.getElementById("raices")
    titulo.innerText="Resultado Raices:"
    console.log(titulo)
    let num_a= parseInt(a);
    let num_b= parseInt(b);
    let num_c= parseInt(c);
    let raiz= (num_b**2)-(4*num_a*num_c)
    
    if (num_a==0){
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        titulo.innerText="El denominador es 0, no se puede resolver"
    }
    else if(raiz<0){
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        titulo.innerText="Las raices son imaginarias"
    }
    else{
        let x1= ((-num_b)+(raiz)**(1/2))/(2*num_a);
        let x2= ((-num_b)-(raiz)**(1/2))/(2*num_a);
        if (isNaN(x1) || isNaN(x2)){
            titulo.innerText="Carga erronea de datos"
        }
        else{
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("x1").value += x1.toFixed(2);
        document.getElementById("x2").value += x2.toFixed(2);
        }
    }
}