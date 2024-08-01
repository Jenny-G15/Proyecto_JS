const tarea= document.getElementById("tarea")
const prioridad = document.getElementById('prioridades')
let contenedorTareas=document.getElementById("contenedorTareas")


dibujarTarea()

function dibujarTarea(){
    contenedorTareas.innerHTML = "";

    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    for (let index = 0; index < tareas.length; index++) {

        let divContainer = document.createElement('div')
        let pTarea= document.createElement("p")

        divContainer.className = "contenedor-tareas"
        
        let selectB = document.createElement('p')

        let bTarea= document.createElement("button")
        let bEditar= document.createElement("button")

        pTarea.innerHTML= tareas[index].tareas;
        selectB.innerHTML = tareas[index].prioridad;

        bEditar.innerHTML="Editar"
        bTarea.innerHTML="Eliminar"

        bTarea.addEventListener("click", function(){
            tareas.splice(index,1);

            localStorage.setItem('tareas', JSON.stringify(tareas));
            dibujarTarea()
        })

        bEditar.addEventListener("click", function(){
            tareas[index].tareas = prompt("Editame", tareas[index].tareas)
            tareas[index].prioridad = prompt("Editame", tareas[index].prioridad)

            localStorage.setItem('tareas', JSON.stringify(tareas));
            dibujarTarea()
        })

        divContainer.appendChild(pTarea)
        divContainer.appendChild(selectB)
        divContainer.appendChild(bTarea)
        divContainer.appendChild(bEditar)
        contenedorTareas.appendChild(divContainer);
        
    }
}

 agregar.addEventListener("click",function() {
    let tareasAgregadas = JSON.parse(localStorage.getItem('tareas')) || [];

    // Acepta una cadena JSON como parámetro, y devuelve el objeto JavaScript correspondiente.//
         const agregarTareaObj = { 
            tareas: tarea.value, 
            prioridad: prioridad.value,
        };

        tareasAgregadas.push(agregarTareaObj);

        //guardar actualizaciones//
        localStorage.setItem('tareas', JSON.stringify(tareasAgregadas));

        let divContainer = document.createElement('div')
        let pTarea= document.createElement("p")
        let selectB = document.createElement('p')
        let bTarea= document.createElement("button")
        let bEditar= document.createElement("button")

        
    bEditar.innerHTML="Editar"
    bTarea.innerHTML="Eliminar"

    pTarea.innerHTML= agregarTareaObj.tareas;
    selectB.innerHTML = agregarTareaObj.prioridad;

    pTarea.id="parrafoT"
    
    divContainer.appendChild(pTarea)
    divContainer.appendChild(selectB)
    divContainer.appendChild(bTarea)
    divContainer.appendChild(bEditar)
    contenedorTareas.appendChild(divContainer)
    


    bTarea.addEventListener("click", function () {
        console.log("Hay que quitar")
        alert("Elemento eliminado con exito");
        contenedorTareas.removeChild(divContainer)
   
    })
         
    localStorage.removeItem('divContainer');
        
        
         bEditar.addEventListener("click", function() {
            let nuevoTexto= prompt("Introduce nuevo texto");

            if (nuevoTexto !== null) {
                pTarea.innerHTML=nuevoTexto;

                console.log("Hay que editar")
                
            }
        })       
})

// codigo para eventos 

const evento= document.getElementById("evento")
const fecha = document.querySelector('start')
const contenedorEventos=document.getElementById("contenedorEventos")


dibujarEvento()

function dibujarEvento(){
    contenedorEventos.innerHTML = "";

    let evento = JSON.parse(localStorage.getItem('evento')) || [];

    for (let index = 0; index <evento.length; index++) {

        let divContainer = document.createElement('div')
        let pEvento= document.createElement("p")

        divContainer.className = "contenedor-Evento"
    
        
        let selectC = document.createElement('p')

        let bEvento= document.createElement("button")
        let bEdito= document.createElement("button")

        pEvento.innerHTML= evento[index].evento;
        selectC.innerHTML = evento[index].fecha;

        bEdito.innerHTML="Editar"
        bEvento.innerHTML="Eliminar"

        bEvento.addEventListener("click", function(){
            evento.splice(index,1);

            localStorage.setItem('evento', JSON.stringify(evento));
            dibujarEvento()
        })

        bEdito.addEventListener("click", function(){
            evento[index].evento = prompt("Editame", evento[index].evento)
            evento[index].start = prompt("Editame", evento[index].fecha)

            localStorage.setItem('evento', JSON.stringify(evento));
            dibujarEvento()
        })

        divContainer.appendChild(pEvento)
        divContainer.appendChild(selectC)
        divContainer.appendChild(bEvento)
        divContainer.appendChild(bEdito)
        contenedorEventos.appendChild(divContainer);
        
    }
}



 agregarEvento.addEventListener("click",function() {
    let eventosAgregados = JSON.parse(localStorage.getItem('evento')) || [];

        const agregarEventoObj = { 
            evento: evento.value, 
            fecha: start.value,
            };

        eventosAgregados.push(agregarEventoObj);

        //guardar actualizaciones//
        localStorage.setItem('evento', JSON.stringify(eventosAgregados));

        let divContainer1 = document.createElement('div')
        let pEvento= document.createElement("p")
        let selectC = document.createElement('p')
        let bEvento= document.createElement("button")
        let bEdito= document.createElement("button")

    bEdito.innerHTML="Editar"
    bEvento.innerHTML="Eliminar"

    pEvento.innerHTML= agregarEventoObj.evento;
    selectC.innerHTML = agregarEventoObj.fecha;

    pEvento.id="parrafoT"
    
    divContainer1.appendChild(pEvento)
    divContainer1.appendChild(selectC)
    divContainer1.appendChild(bEvento)
    divContainer1.appendChild(bEdito)
    contenedorEventos.appendChild(divContainer1)


    bEvento.addEventListener("click", function () {
        console.log("Hay que quitar")
        alert("Elemento eliminado con exito");
        contenedorEventos.removeChild(divContainer1)


    })
         
    localStorage.removeItem('divContainer');
        
        
         bEdito.addEventListener("click", function() {
            let nuevoTexto= prompt("Introduce nuevo texto");

            if (nuevoTexto !== null) {
                pEvento.innerHTML=nuevoTexto;

                console.log("Hay que editar")
                
            }
        })
        
})