//IMPORTAMOS A LA VACA 
const cowsay = require("cowsay");

//MOSTRAMOS A LA VACA 
console.log(
    cowsay.say({ //Aqui le decimos a la vaca que hable (usamos la funcion .say)
        text: "la vaca muuuu la vaca muuuu la otra vaca muuuuu",
        e: "oO", // Estos son los ojos de la vaca
        T: "U " // y la lengua

    })
);
 