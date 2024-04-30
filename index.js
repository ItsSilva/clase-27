import { obtenerDatos, Tarea } from "./utils.js";

// barra de busqueda
const renderizarTareas = async () => {
    const data = await obtenerDatos();

    const tareasNormales = document.querySelector('#tareasNormales');
    tareasNormales.innerHTML = '';

    for(const tareaNormal of data.tareasNormales){
        const instancia = new Tarea(
            tareaNormal.id, 
            tareaNormal.nombre, 
            tareaNormal.terminado
        );
        const tareaRender = instancia.render();
        tareasNormales.appendChild(tareaRender);
    }

    const tareasCriticas = document.querySelector('#tareasCriticas');
    tareasCriticas.innerHTML = '';

    for(const tareaNormal of data.tareasCriticas){
        const instancia = new Tarea(
            tareaNormal.id, 
            tareaNormal.nombre, 
            tareaNormal.terminado
        );
        const tareaRender = instancia.render();
        tareasCriticas.appendChild(tareaRender);
    }
}

const render = async () => {
    await renderizarTareas();
};
document.addEventListener('DOMContentLoaded', render);