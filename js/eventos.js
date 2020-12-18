let nuevaTarea = document.querySelector('#tarea');
let prioridad = document.querySelector('#prioridad');
let guardar = document.querySelector('#btnGuardar');
let seccion = document.querySelector('.tareas');
let id = 1;

guardar.addEventListener('click', recogerDatos);

let selectPrioridad = document.querySelector('#buscarPrioridad');

const prioridadRepetida = new Array();

console.log(arrTareas);

for (tarea of arrTareas) {
    prioridadRepetida.push(tarea.prioridad);
}

let set = new Set(prioridadRepetida);
console.log(set);

const prioridades = Array.from(set);

console.log(prioridades);

selectPrioridad.addEventListener('change', event => {
    mostrarTareas(filtrarPorPrioridad(prioridades, event.target.value), seccion)
})

let buscador = document.querySelector('#buscarTarea');

buscador.addEventListener('input', recogerBusqueda);

function recogerBusqueda(event) {
    let palabraBuscar = event.target.value.trim();
    let listaFiltrada = filtrarTareaPorPalabra(arrTareas, palabraBuscar);
    mostrarTareas(listaFiltrada, seccion);
}

