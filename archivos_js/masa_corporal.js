alert("Bienvenido a la aplicacion para tu cuerpo. Por favor Ingrese los datos pedidos");
let nombre= prompt("Ingrese su nombre: ");
let apellido= prompt("Ingrese su apellido: ");
let nacimiento= prompt("Ingrese su fecha de nacimiento con el formato AAAA/MM/DD: ");
let peso = parseFloat(prompt("Ingrese su peso en Kg: "));
let altura = prompt("Ingrese su altura en cm (es decir, sin el punto): ");
let altura_cm=(altura/100).toFixed(2);
// (peso/(altura_cm**2)).toFixed(2);

let masa_corporal;

function verificacion(){
    let flag_peso=false
    let flag_altura=false
    if(peso!= Number){
        masa_corporal=-1
        peso = "Dato no cargado"
    }
    else{
        flag_peso=true
    }
    if (altura!=Number){
        masa_corporal=-1
        altura = "Dato no cargado"
    }
    else{
        flag_altura=true
    }
    if(flag_altura && flag_peso){
        masa_corporal=(peso/(altura_cm**2)).toFixed(2);
    }
    return masa_corporal,peso,altura
}
verificacion()


function calcularEdad(){
    if (nacimiento==""){
        edad="Dato no cargado"
        return edad
    }
    else{
        let hoy = new Date();
        let cumple = new Date(nacimiento)
        let edad=hoy.getFullYear() - cumple.getFullYear();
        let mes= hoy.getMonth() - cumple.getMonth();
        if (mes<0 ||(mes===0 && hoy.getDate()<cumple.getDate())){
            edad--
            }
    return `${edad} años`
    }
}
// verificador de edad

function calc_masa_corp(masa_corporal){
        let conclusion=[];
        if (masa_corporal<18.5 && masa_corporal>0){
            conclusion= ["Desnutrido",
            `El paciente ${apellido},${nombre} de ${calcularEdad()} años de edad posee
            una masa corporal de ${masa_corporal} que es inferior al indice
            recomendado`]
            }
        else if (masa_corporal>=18.5 && masa_corporal<25){
            conclusion= ["Normal",
            `El paciente ${apellido},${nombre} de ${calcularEdad()} años de edad posee
            una masa corporal de ${masa_corporal} que se encuentra dentro del indice
            recomendado`]
            }   
        else if (masa_corporal>=25 && masa_corporal<29.9){
            conclusion=[`Sobrepeso`,
            `El paciente ${apellido},${nombre} de ${calcularEdad()} años de edad posee
            una masa corporal de ${masa_corporal} que se encuentra un poco sobre el indice
            recomendado`]
            }
        else if(masa_corporal>=30){
            conclusion=["Obeso" ,
            `El paciente ${apellido},${nombre} de ${calcularEdad()} años de edad posee
            una masa corporal de ${masa_corporal} que se encuentra muy por sobre el indice
            recomendado`]
            }
        else{
            conclusion=["Sin Datos" ,
            `No se han cargado los datos del paciente`]
            }
    return conclusion
}
if (masa_corporal==-1){
    masa_corporal="Carga de datos erronea"
}

document.getElementById('nombre_id').innerHTML += ` ${nombre}`;
document.getElementById('apellido_id').innerHTML += ` ${apellido}`;
document.getElementById('edad_id').innerHTML += ` ${calcularEdad()}`;
document.getElementById('peso_id').innerHTML += ` ${peso} Kg`;
document.getElementById('altura_id').innerHTML += ` ${altura_cm} cm`;
document.getElementById('masa_corporal_id').innerHTML += ` ${masa_corporal}`;
document.getElementById('conclusion_id').innerHTML +=` `+ calc_masa_corp(masa_corporal)[0];
document.getElementById('conclusion_larga_id').innerHTML += calc_masa_corp(masa_corporal)[1];