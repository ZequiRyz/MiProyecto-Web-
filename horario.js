// 1. Seleccionamos el botón que acabamos de crear en el HTML.
const modoOscuroBtn = document.getElementById('modoOscuroBtn');

// 2. Seleccionamos el body, que es el elemento al que le cambiaremos el fondo.
const body = document.body;

// 3. Le decimos a JavaScript que esté atento a un 'click' en el botón.
modoOscuroBtn.addEventListener('click', () => {
    // Cuando se haga clic, simplemente añade o quita la clase 'modo-oscuro' del body.
    // .toggle() es como un interruptor de luz: si la clase está, la quita; si no está, la pone.
    body.classList.toggle('modo-oscuro');
});