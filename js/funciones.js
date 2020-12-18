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

function guardarTarea(pNuevaTarea, pPrioridad) {
    let tarea = {
        id: id,
        nombre: pNuevaTarea,
        prioridad: pPrioridad
    }

    let tareaRepetida = arrTareas.findIndex(tarea => {
        return tarea.nombre == pNuevaTarea /* && tarea.prioridad == pPrioridad */
    })

    if (tareaRepetida == -1) {
        arrTareas.push(tarea);
        mostrarTarea(pNuevaTarea, pPrioridad, seccion);
        id++;
        console.log(arrTareas);
    } else {
        alert('Tarea ya guardada!!')
    }
}

function mostrarTarea(pNuevaTarea, pPrioridad, pSeccion) {
    console.log(pSeccion);
    let li = document.createElement('li');
    let contenidoli = document.createTextNode(`${pNuevaTarea}: ${pPrioridad} `);
    li.appendChild(contenidoli);

    let a = document.createElement('a');
    a.addEventListener('click', eliminarTarea);
    a.innerText = "Eliminar";
    a.href = "#";
    a.dataset.id = id;

    li.appendChild(a);
    pSeccion.appendChild(li);
}

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

function filtrarPorPrioridad(pArrTareas, pPrioridad) {
    console.log(pArrTareas, pPrioridad);
    const resultado = pArrTareas.filter(tarea => tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase());

    return resultado;
}

function filtrarTareaPorPalabra(pArrTareas, pPalabraBuscada) {
    const listaFiltrada = pArrTareas.filter(tarea => {
        let tareaCompleta = tarea.nombre + " " + tarea.prioridad;

        return tareaCompleta.toLowerCase().includes(pPalabraBuscada.toLowerCase());
    })
    return listaFiltrada;
}