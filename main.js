Pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["Queso Muzzarella", "Aceitunas", "Oregano"],
        precio: 500,
        imagen: "./assets/Pizzas/muzzarella.jpg"
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["Tomate", "Jamón", "Ajo"],
        precio: 650, 
        imagen: "./assets/Pizzas/napolitana.jpg"

    },
    {
        id: 3,
        nombre: "Jamón-Morrón",
        ingredientes: ["Jamón", "Morrón", "Oregano"],
        precio: 550,
        imagen: "./assets/Pizzas/jamon_y_morron.jpg"

    },
    {
        id: 4,
        nombre: "Fugazzeta",
        ingredientes: ["Cebolla", "Queso Muzzarella", "Oregano"],
        precio: 650,
        imagen: "./assets/Pizzas/fugazza.jpg"

    },
    {
        id: 5,
        nombre: "Calabresa",
        ingredientes: ["Calabresa", "Queso Muzzarella", "Aceitunas"],
        precio: 610,
        imagen: "./assets/Pizzas/calabresa.jpg"

    },
    {
        id: 6,
        nombre: "Choclo",
        ingredientes: ["Choclo", "Queso Muzzarella", "Aceitunas"],
        precio: 550,
        imagen: "./assets/Pizzas/choclo.png"

    },
];
//// EJERCICIO A
//Pizzas.forEach(pizza => {
//    if (pizza.id % 2 !== 0) {
//        console.log(`La pizza de ${pizza.nombre} tiene un id impar`)
//    }
//});

////EJERCICIO B
//if (Pizzas.some(mayor => mayor.precio < 600)) {
//    console.log('Existen Pizzas menores a $600');
//} else {
//    console.log('No existen Pizzas menores a $600');
//}

////EJERCICIO C
//Pizzas.forEach(pizza => console.log(`La pizza de ${pizza.nombre} tiene un precio de $${pizza.precio}`));

////EJERCICIO D
//Pizzas.forEach((piza) => {
//    console.log(`La pizza ${piza.nombre} tiene: `)
//    piza.ingredientes.forEach((ingrediente) =>
//        console.log(`- ${ingrediente}`));
//})

const resultContainer = document.getElementById("result-container");
const form = document.getElementById("form");
const input = document.querySelector(".input-number");

//Busca en el array de pizza una que coincida con el valor pasado, devuelve el valor o undefined si no existe
const searchPizza = (value) => Pizzas.find((pizza) => pizza.id === value);


const showEmptyError = () => {
    resultContainer.innerHTML = `
            <img src="./assets/Pizzas/error.png" alt="" class="img-error">
        <div class="pizza-container">
            <h2 class="error-title"> Por favor, Ingresé número para validar</h2>
        </div>
    `;
};

const renderResult = (pizza) => {
    if (!pizza) {
        resultContainer.innerHTML = `
        <img src="./assets/Pizzas/error.png" alt="" class="img-error">
            <div class="pizza-container">
                <h2 class="error-title"> No existe una pizza con el número ingresado, Vuelva a intentar</h2>
        </div>
        `;
    } else {
        resultContainer.innerHTML = `
            <img src="${pizza.imagen}" alt="" class="img-res">
            <div class="pizza-container">
                <h2 class="nombre-result"> ${pizza.nombre.toUpperCase()}</h2>
                <h3 class="ingredientes-result">Ingredientes:  ${pizza.ingredientes.join(" - ")}</h3>
                <h3 class="precio-result">Precio: $${pizza.precio}</h3>
        </div>
        `;
    }
};
const submitSearch = (e) => {
    e.preventDefault(); //evitar evento defecto de tipo submit que recarga pagina
    const searchedValue = input.value;
     //trae el valor del input
    
    if (!searchedValue) {
        //si esta vacio llama a la funcion vacia
        showEmptyError();
        return;
    }
    //crea const buscar pizza y verifica el valor convertido en num y llama a funcion
    const searchedPizza = searchPizza(Number(searchedValue));
    renderResult(searchedPizza);
};

const init = () => {
    form.addEventListener("submit", submitSearch);
};

init();
