// FoodieHub Cart System

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add Item
function addCart(name, price) {

    let item = cart.find(food => food.name === name);

    if (item) {

        item.qty++;

    } else {

        cart.push({
            name: name,
            price: price,
            qty: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added To Cart");

    updateCount();

}

// Cart Count

function updateCount() {

    let total = 0;

    cart.forEach(item => {

        total += item.qty;

    });

    let count = document.getElementById("cart-count");

    if (count) {

        count.innerHTML = total;

    }

}

updateCount();


// Display Cart

function displayCart() {

    let table = document.getElementById("cart-items");

    let total = 0;

    if (!table) return;

    table.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        table.innerHTML += `

<tr>

<td>${item.name}</td>

<td>₹${item.price}</td>

<td>

<button onclick="decrease(${index})">-</button>

${item.qty}

<button onclick="increase(${index})">+</button>

</td>

<td>₹${item.price * item.qty}</td>

<td>

<button onclick="removeItem(${index})">

Remove

</button>

</td>

</tr>

`;

    });

    document.getElementById("total").innerHTML = "₹" + total;

}

displayCart();


// Increase Quantity

function increase(i) {

    cart[i].qty++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCount();

}

// Decrease Quantity

function decrease(i) {

    if (cart[i].qty > 1) {

        cart[i].qty--;

    } else {

        cart.splice(i, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCount();

}

// Remove Item

function removeItem(i) {

    cart.splice(i, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCount();

}


// Search Food

let search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let title = card.querySelector("h3").innerHTML.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}