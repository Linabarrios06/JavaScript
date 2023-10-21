document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    let total = 0;

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    document.getElementById("add-to-order").addEventListener("click", () => {
        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        const dishPrices = {
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

        const drinkPrices = {
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

        const dishPrice = dishPrices[dish] || 0;
        const drinkPrice = drinkPrices[drink] || 0;

        const subtotal = dishPrice * dishQuantity + drinkPrice * drinkQuantity;

        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `Plato: ${dish} (x${dishQuantity}), Bebida: ${drink} (x${drinkQuantity})`;

        orderSummary.appendChild(orderItem);

        total += subtotal;
        totalPrice.textContent = total.toFixed();
    });
});