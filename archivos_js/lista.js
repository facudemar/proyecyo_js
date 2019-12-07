document.getElementById("agregar").onclick = function(){
    if (document.getElementById("input").value.length==0){
        Swal.fire({
            title:'Agregue una tarea',
            icon:'warning',
            background:'grey',
            iconColor:'orange',

        })
    }
    else{
         document.getElementById("tareas").innerHTML+=`
         <div id="tarea">
            <span class="nombre_tarea">${document.getElementById("input").value} </span>
            <button class="borrar boton_tarea_borrar">Borrar</button>
            <button class="completa boton_tarea_completa">Completa</button>
         </div>`
    }
    let tarea = document.querySelectorAll(".borrar");
    for(let i=0;i<tarea.length;i++){
        tarea[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    let tareas = document.querySelectorAll(".completa");
    for(let i=0;i<tareas.length;i++){
        tareas[i].onclick = function (){
            this.classList.toggle('completa')
        }
    }
    document.getElementById("input").value=""
}
