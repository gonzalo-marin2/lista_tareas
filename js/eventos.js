//Definimos todas las variables del DOM
let nuevaTarea = document.querySelector('#tarea');
let prioridad = document.querySelector('#prioridad');
let guardar = document.querySelector('#btnGuardar');
let seccion = document.querySelector('.tareas');
let id = 1;
let selectPrioridad = document.querySelector('#buscarPrioridad');
let buscador = document.querySelector('#buscarTarea');

//Creamos el evento de la recogida de datos desde el formulario
guardar.addEventListener('click', recogerDatos);

const prioridadRepetida = new Array();

console.log(arrTareas);

for (tarea of arrTareas) {
    prioridadRepetida.push(tarea.prioridad);
}

//Para poder filtrar por prioridad y que no nos muestre todas las tareas, eliminamos los repetidos
//Para ello transformamos el array prioridadRepetida en un objeto set
let set = new Set(prioridadRepetida);
console.log(set);

//Y luego lo transformamos en un nuevo array ya sin prioridades repetidas
const prioridades = Array.from(set);
console.log(prioridades);


selectPrioridad.addEventListener('change', event => {
    const arrFiltrado = filtrarPorPrioridad(arrTareas, event.target.value);
    mostrarTareas(arrFiltrado, seccion)
})

//Creamos el evento para recoger los valores introducidos en el filtro
buscador.addEventListener('input', recogerBusqueda);

function recogerBusqueda(event) {
    let palabraBuscar = event.target.value.trim();
    let listaFiltrada = filtrarTareaPorPalabra(arrTareas, palabraBuscar);
    mostrarTareas(listaFiltrada, seccion);
}

