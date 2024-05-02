import { obtenerDatos, Tarea } from "./utils.js";

// barra de busqueda
const renderizarTareas = async (textoBusqueda) => {
    const data = await obtenerDatos();

    const textoLimpio = textoBusqueda.toLowerCase();

    const tareasNormales = document.querySelector('#tareasNormales');
    tareasNormales.innerHTML = '';

    for(const tareaNormal of data.tareasNormales){
        const instancia = new Tarea(
            tareaNormal.id, 
            tareaNormal.nombre, 
            tareaNormal.terminada
        );
        const tareaRender = instancia.render();

        if(textoLimpio === "" || tareaNormal.nombre.toLowerCase().includes(textoLimpio)){
            tareasNormales.appendChild(tareaRender);
            instancia.addEventListeners();
        }
    }

    const tareasCriticas = document.querySelector('#tareasCriticas');
    tareasCriticas.innerHTML = '';

    for(const tareaNormal of data.tareasCriticas){
        const instancia = new Tarea(
            tareaNormal.id, 
            tareaNormal.nombre, 
            tareaNormal.terminada
        );
        const tareaRender = instancia.render();

        if(textoLimpio === '' || tareaNormal.nombre.toLowerCase().includes(textoLimpio)){
            tareasCriticas.appendChild(tareaRender);
            instancia.addEventListeners();
        }
    }
}

const render = async () => {
    await renderizarTareas('');

    const barraBusqueda = document.querySelector('.barraBusqueda');
    barraBusqueda.addEventListener('input', async (event) => {
        const textoBusqueda = event.target.value;
        await renderizarTareas(textoBusqueda);
    });
};


document.addEventListener('DOMContentLoaded', render);