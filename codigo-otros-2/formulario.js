let formulario = document.querySelector(".formulario"); //Agregamos el nombre correcto de la class

formulario.onsubmit = function (e) {
  e.preventDefault();

  // Renombramos la variable e a edad input

  let n = formulario.elements[0];
  let edadInput = formulario.elements[1];
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = parseInt(edadInput.value, 10);

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validamo el nombre y edad
  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error");
  }

  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  } else {
    edadInput.classList.remove("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {

  // Realizamos conversiones de nacionalidad
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  let lista = document.getElementById("lista-de-invitados");

  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Función para crear elementos de la lista
  function crearElemento(descripcion, valor) {
    let spanDescripcion = document.createElement("span");
    let inputValor = document.createElement("input");
    let espacio = document.createElement("br");

    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    inputValor.readOnly = true; 

    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }

  // Añadimos los datos del invitado
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Arreglamos el button para eliminar el invitado
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar");
  let corteLinea = document.createElement("br");

  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    elementoLista.remove();
  };
}
