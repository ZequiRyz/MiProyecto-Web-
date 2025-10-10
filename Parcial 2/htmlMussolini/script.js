// 1. Seleccionar todos los elementos que vamos a modificar
const miBoton = document.getElementById('miBoton');
const imagenPrincipal = document.getElementById('ImagenPrincipal');
const encabezadoPrincipal = document.getElementById('EncabezadoPrincipal');
const pieDePagina = document.getElementById('PieDePagina');

let esMussolini = true; // Empieza mostrando a Mussolini 

/*Aqui se crea el evento que mostrara al hacer click al boton*/
miBoton.addEventListener('click', function() {
  // Si actualmente estamos mostrando a Mussolini, cambiamos a Nami
  if (esMussolini) {
    imagenPrincipal.src = 'images/Nami.jpg';
    imagenPrincipal.alt = 'Nami gata'; // Cambiamos también el texto alternativo
    miBoton.textContent = 'MUSSOLINI GATO PANSON'; // Cambiamos el texto del botón
    encabezadoPrincipal.textContent = 'NAAAAAAAAMI';
    pieDePagina.textContent = 'NAMI GATA PANSONA';
    
    // Y ahora, el estado actual es Nami
    esMussolini = false; 
  } 
  // Si actualmente estamos mostrando a Nami, cambiamos de vuelta a Mussolini
  else {
    imagenPrincipal.src = 'images/Mussolini.jpg';
    imagenPrincipal.alt = 'Mussolini gato';
    miBoton.textContent = 'NAMI GATA PANSONA';
    encabezadoPrincipal.textContent = 'MUUUSOOOLINI';
    pieDePagina.textContent = 'MUUUSSOLINI GATO PANSON';
    
    // Y ahora, el estado actual es Mussolini
    esMussolini = true;
  }
});