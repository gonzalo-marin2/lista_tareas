//Con esta función recogemos los datos del formulario
function recogerDatos(event) {
    event.preventDefault();
    /* console.log(nuevaTarea.value);
    console.log(prioridad.value); */

    let inputTarea = nuevaTarea.value.trim();
    let inputPrioridad = prioridad.value.trim();

    if (nuevaTarea.value != "" && prioridad.value != "" && prioridad.value != -1) {
        guardarTarea(inputTarea, inputPrioridad);

    } else {
        alert('Los campos no deben estar vacíos!!');
    }

    nuevaTarea.value = "";
    prioridad.value = "";
}

//Guardamos en el array los datos que anteriormente hemos recogido
function guardarTarea(pNuevaTarea) {
    let tarea = {
        id: id,
        nombre: pNuevaTarea
        //prioridad: pPrioridad
    }

    //evitamos guardar tareas que ya están guardadas
    let tareaRepetida = arrTareas.findIndex(tarea => {
        return tarea.nombre == pNuevaTarea /* && tarea.prioridad == pPrioridad */
    })

    if (tareaRepetida == -1) {
        arrTareas.push(tarea);
        mostrarTarea(tarea, seccion);
        id++;
        console.log(arrTareas);
    } else {
        alert('Tarea ya guardada!!')
    }
}

//Pintamos la nueva tarea que hemos guardado en el array
function mostrarTarea(pNuevaTarea, pSeccion) {
    //console.log(pSeccion);
    let li = document.createElement('li');
    let contenidoli = document.createTextNode(`${pNuevaTarea}:  ${prioridad}`);
    li.appendChild(contenidoli);

    let a = document.createElement('a');
    a.addEventListener('click', eliminarTarea);
    a.innerText = "Eliminar";
    a.href = "#";
    a.dataset.id = id;

    li.appendChild(a);
    pSeccion.appendChild(li);
}

//Pintamos todas las tareas del array
function mostrarTareas(pArrTareas, pSeccion) {
    //numeroTareas.innerText = pArrTareas.length;
    if (pArrTareas.length != 0) {
        pSeccion.innerHTML = "";
        pArrTareas.forEach(tarea => {
            mostrarTarea(tarea, prioridad, pSeccion);
        })
    } else {
        pSeccion.innerHTML = '<h3>No hay tareas que cumplan con su búsqueda</h3>'
    }
}

function eliminarTarea(event) {
    event.preventDefault();
    //console.log(event.target.parentNode);
    //event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    let tareaHecha = event.target.parentNode;
    tareaHecha.parentNode.removeChild(tareaHecha);

    let idBorrar = event.target.dataset.id;
    //console.log(idBorrar);

    let posicion = arrTareas.findIndex(tarea => tarea.id == idBorrar);
    arrTareas.splice(posicion, 1);
    console.log(arrTareas);
}

//Filtramos por prioridad, es decir, buscamos las tareas que tengan una misma prioridad
function filtrarPorPrioridad(pArrTareas, pPrioridad) {
    console.log(pArrTareas, pPrioridad);
    const resultado = pArrTareas.filter(tarea => tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase());

    return resultado;
}

//Filtramos las tareas por palabras
function filtrarTareaPorPalabra(pArrTareas, pPalabraBuscada) {
    const listaFiltrada = pArrTareas.filter(tarea => {
        let tareaCompleta = tarea.nombre + " " + tarea.prioridad;

        return tareaCompleta.toLowerCase().includes(pPalabraBuscada.toLowerCase());
    })
    return listaFiltrada;
}