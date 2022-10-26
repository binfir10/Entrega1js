Pizzas = [
    { ids: 1, nombre: "Muzzarella", ingredientes: ["Queso Muzzarella", "Aceitunas", "Oregano"], precio: 500 },
    { id: 2, nombre: "Napolitana", ingredientes: ["Tomate", "Jamón", "Ajo"], precio: 650 },
    { id: 3, nombre: "Jamón-Morrón", ingredientes: ["Jamón", "Morrón", "Oregano"], precio: 550 },
    { id: 4, nombre: "Fugazzeta", ingredientes: ["Cebolla", "Queso Muzzarella", "Oregano"], precio: 650 },
    { id: 5, nombre: "Calabresa", ingredientes: ["Calabresa", "Queso Muzzarella", "Aceitunas"], precio: 610 },
    { id: 6, nombre: "Choclo", ingredientes: ["Choclo", "Queso Muzzarella", "Aceitunas"], precio: 550 },
];

// EJERCICIO A
Pizzas.forEach(pizza => {
    if (pizza.id % 2 !== 0) {
        console.log(`La pizza de ${pizza.nombre} tiene un id impar`)
    }
});


//EJERCICIO B
if (Pizzas.some(mayor => mayor.precio < 600)) {
    console.log('Existen Pizzas menores a $600');
} else {
    console.log('No existen Pizzas menores a $600');
}
toString
//EJERCICIO C
Pizzas.forEach(pizza => console.log(`La pizza de ${pizza.nombre} tiene un precio de $${pizza.precio}`));

//EJERCICIO D
Pizzas.forEach((piza) => {
    console.log(`La pizza ${piza.nombre} tiene: `)
    piza.ingredientes.forEach((ingrediente) =>
        console.log(`- ${ingrediente}`));
})

//console.log(
//  `La pizza de ${piza.nombre} tiene: ${piza.ingredientes.join(", ")}`
//);








