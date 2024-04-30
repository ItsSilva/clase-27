export const obtenerDatos = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
}
export class Tarea{
    #id;
    nombre;
    terminado

    constructor(id, nombre, terminado){
        this.#id = id;
        this.nombre = nombre,
        this.terminado = terminado;
    }
    render (){
        const contenedorTarea = document.createElement('div');
        contenedorTarea.id = this.#id;

        const checboxTarea = document.createElement('input');
        checboxTarea.type = 'checkbox';
        checboxTarea.checked = this.terminado;

        const nombreTarea = document.createElement('span');
        nombreTarea.textContent = this.nombre;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';

        contenedorTarea.appendChild(checboxTarea);
        contenedorTarea.appendChild(nombreTarea);
        contenedorTarea.appendChild(botonEliminar);

        return contenedorTarea;
    }
}