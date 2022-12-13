function resolucion(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    
    let num_a= parseInt(a);
    let num_b= parseInt(b);
    let num_c= parseInt(c);
    let raiz= (num_b**2)-(4*num_a*num_c)
    
    if (num_a==0){
        alert("No se puede resolver por Bascara ya que el denominador es 0")
    }
    else if(raiz<0){
        alert("Las raices son imaginarias")
    }
    else{
        let x1= ((-num_b)+(raiz)**(1/2))/(2*num_a);
        let x2= ((-num_b)-(raiz)**(1/2))/(2*num_a);
        alert(`El valor de la primera raiz x1 es: ${x1.toFixed(2)} y el de la segunda raiz x1 es: ${x2.toFixed(2)}`)
    }
    
}