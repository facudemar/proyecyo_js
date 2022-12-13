// alert("Bienvenido a la aplicacion para tu cuerpo. Por favor Ingrese los datos pedidos");
// let nombre= prompt("Ingrese su nombre: ");
// let apellido= prompt("Ingrese su apellido: ");
// calcular la edad por fecha de nacimiento
// let edad= prompt("Ingrese su edad: ");
// let peso = prompt("Ingrese su peso en Kg: ");
// let altura = prompt("Ingrese su altura en cm: ");
// let altura_cm=(altura/100).toFixed(2);
// let masa_corporal= (peso/(altura_cm**2)).toFixed(2);



function calc_masa_corp(masa_corporal){
    let conclusion=[];
    if (masa_corporal<18.5){
        conclusion= ["Desnutrido",
        `El paciente ${apellido},${nombre} de ${edad} años de edad posee
    una masa corporal de ${masa_corporal} que es inferior al indice
    recomendado`]
    }
    else if (masa_corporal>=18.5 && masa_corporal<25){
        conclusion= ["Normal",
        `El paciente ${apellido},${nombre} de ${edad} años de edad posee
    una masa corporal de ${masa_corporal} que se encuentra dentro del indice
    recomendado`]
    }   
    else if (masa_corporal>=25 && masa_corporal<29.9){
        conclusion=[`Sobrepeso`,
        `El paciente ${apellido},${nombre} de ${edad} años de edad posee
    una masa corporal de ${masa_corporal} que se encuentra un poco sobre el indice
    recomendado`]
    }
    else{
        conclusion=["Obeso" ,
        `El paciente ${apellido},${nombre} de ${edad} años de edad posee
    una masa corporal de ${masa_corporal} que se encuentra muy por sobre el indice
    recomendado`]
    }
    return conclusion
}


document.getElementById('nombre_id').innerHTML += ` ${nombre}`;
document.getElementById('apellido_id').innerHTML += ` ${apellido}`;
document.getElementById('edad_id').innerHTML += ` ${edad} años`;
document.getElementById('peso_id').innerHTML += ` ${peso} Kg`;
document.getElementById('altura_id').innerHTML += ` ${altura_cm} cm`;
document.getElementById('masa_corporal_id').innerHTML += ` ${masa_corporal}`;
document.getElementById('conclusion_id').innerHTML +=` `+ calc_masa_corp(masa_corporal)[0];
document.getElementById('conclusion_larga_id').innerHTML += calc_masa_corp(masa_corporal)[1];




