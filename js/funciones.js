/* function guardarTarea(event) {
    event.preventDefault();
    let inputTarea = nuevaTarea.value.trim();
    let inputPrioridad = prioridad.value.trim();
    console.log(nuevaTarea.value, nuevaPrioridad.value);

    if (inputTarea != "" && inputPrioridad != -1 && inputPrioridad != "") {
        agregarTarea(inputTarea, inputPrioridad);
    } else {
        alert('¡Los campos no pueden estar vacíos!');
    }
    nuevaTarea.value = "";
    nuevaPrioridad.value = "";
} */

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
        nombre: pNuevaTarea,
        prioridad: pPrioridad
    }

    let tareaRepetida = arrTareas.findIndex(tarea => {
        return tarea.nombre == pNuevaTarea | tarea.prioridad == pPrioridad
    })

    if (tareaRepetida == -1) {
        arrTareas.push(tarea);
        mostrarTarea(pNuevaTarea, pPrioridad, seccion);
        console.log(arrTareas);
    } else {
        alert('Tarea ya guardada!!')
    }
}

function mostrarTarea(pNuevaTarea, pPrioridad, pSeccion) {
    let li = document.createElement('li');
    let contenidoli = document.createTextNode(`${pNuevaTarea}: ${pPrioridad}`);
    li.appendChild(contenidoli);
    pSeccion.appendChild(li);
}

/* function agregarTarea(pNuevaTarea, pNuevaPrioridad) {
    let tarea = {
        id = id,
        titulo = pNuevaTarea,
        prioridad = pNuevaPrioridad
    }
    let repetido = arrTareas.findIndex(tarea => {
        return tarea.titulo = pNuevaTarea;
    });
    if (repetido == -1) {
        arrTareas.push(tarea);
        id++;
        console.log(arrTareas);
    } else {
        alert('Tarea ya anotada');
    }
} */