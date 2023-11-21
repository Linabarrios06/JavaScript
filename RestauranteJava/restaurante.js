document.addEventListener("DOMContentLoaded", () => {  //Funccion flecha -addEventListener Registra un evento a un objeto en específico
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary"); //getElementById seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
    const totalPrice = document.getElementById("total-price");

    let total = 0;

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault(); //event  cosas que pasan en el sistema que estás programando, el cual se encarga de avisarte para que tu código pueda hacer algo al respecto
    });

    document.getElementById("add-to-order").addEventListener("click", () => {
        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        const dishPrices = { //Creamos  las opciones del menu
            "cazuela de mariscos personal": 32000,
            "pescado frito personal": 25000,
            "coctel de camarones personal": 20000,
            "camarones en salsa personal": 22000,
            "ceviche pesonal": 17000,
            "langostino personal": 28000,
            "pulpo personal": 24000,
            "cangrejo personal": 23000,
            "langosta personal": 25000,
            "mejillones personal": 27000,
            "camarones personal": 15000,
            "cazuela de mariscos grande": 48000,
            "pescado frito grande": 50000,
            "coctel de camarones grande": 35000,
            "camarones en salsa grande": 30000,
            "ceviche grande": 25000,
            "langostino grande": 39000,
            "pulpo grande": 42000,
            "cangrejo grande": 39000,
            "langosta grande": 38000,
            "mejillones grande": 37000,
            "camarones grande": 27000,
        };

        const drinkPrices = { //Creamos las opciones del menu
            "agua personal": 3000,
            "limonada personal": 4000,
            "piña colada personal": 10000,
            "margarita personal": 11000,
            "michelada personal": 12500,
            "daiquirí personal": 125000,
            "mojito personal": 10000,
            "agua grande": 5000,
            "limonada grande": 6000,
            "piña colada grande": 15000,
            "margarita grande": 19000,
            "michelada grande": 25500,
            "daiquirí grande": 265000,
            "mojito grande": 18000,
        };

        const dishPrice = dishPrices[dish] || 0; //todos los valores empizan en cero
        const drinkPrice = drinkPrices[drink] || 0;

        const subtotal = dishPrice * dishQuantity + drinkPrice * drinkQuantity; //

        const orderItem = document.createElement("div");
        //add permite añadir un elemento al conjunto
        orderItem.classList.add("order-item"); //classList  forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de element.
        orderItem.innerHTML = `Plato: ${dish} (x${dishQuantity}), Bebida: ${drink} (x${drinkQuantity})`;

        orderSummary.appendChild(orderItem); //appendChild  agregar nuevos elementos a un documento existente o para mover un elemento de la página
 
        total += subtotal;
        totalPrice.textContent = total.toFixed(); //toFixed devuelve una representación de cadena de numObj que no usa notación exponencial y tiene exactamente dígitos dígitos después del decimal
    });
});