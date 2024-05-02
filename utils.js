export const obtenerDatos = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
}
export class Tarea{
    #id;
    nombre;
    terminada;

    #nodoNombreTarea;
    #nodoEstadoTarea;
    #nodoBotonEliminar
    #nodoContenedorTarea;

    constructor(id, nombre, terminada){
        this.#id = id;
        this.nombre = nombre,
        this.terminada = terminada;
    }
    render (){
        const contenedorTarea = document.createElement('div');
        contenedorTarea.id = this.#id;
        contenedorTarea.classList.add('tarea');
        this.#nodoContenedorTarea = contenedorTarea;

        const checboxTarea = document.createElement('input');
        checboxTarea.type = 'checkbox';
        checboxTarea.checked = this.terminada;
        this.#nodoEstadoTarea = checboxTarea;

        const nombreTarea = document.createElement('p');
        nombreTarea.textContent = this.nombre;
        nombreTarea.classList.add('tarea__nombre');
        this.#nodoNombreTarea = nombreTarea;

        if(this.terminada === true){
            nombreTarea.classList.add('tarea__nombre--terminada');
        }

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        this.#nodoBotonEliminar = botonEliminar;

        contenedorTarea.appendChild(checboxTarea);
        contenedorTarea.appendChild(nombreTarea);
        contenedorTarea.appendChild(botonEliminar);

        return contenedorTarea;
    }
    addEventListeners() {
        this.#nodoEstadoTarea.addEventListener("input", (event) => {
          const status = event.target.checked;
          if (status === true) {
            this.#nodoNombreTarea.classList.add("tarea__nombre--terminada");
          } else {
            this.#nodoNombreTarea.classList.remove("tarea__nombre--terminada");
          }
        });
        this.#nodoBotonEliminar.addEventListener("click", () => {
          this.#nodoContenedorTarea.remove();
        });
      }
    }