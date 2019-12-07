let formulario = document.getElementById("formulario");
class Persona{
    constructor(nombre,telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }
}

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nombre_id=document.getElementById("nombre_id")
    const telefono_id=document.getElementById("telefono_id")

    // const agendado= new Persona(nombre_id.value,telefono_id.value);

    let contenedor= document.getElementById("contenedor")
    contenedor.innerHTML+=`<div id="${nombre_id.value}"><h3>Nombre:${nombre_id.value}</h3>
    <h3>Telefono:${telefono_id.value}</h3>
    <button onclick="eliminar(${nombre_id.value})">Eliminar</button></div>`
    formulario.reset()
})

function eliminar(variable){
    // programa falla si hay 2 nombres repetidos
    console.log(variable)   
    let variable_div=document.getElementById(variable.id)
    variable_div.remove()
}