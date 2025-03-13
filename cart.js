import { auth, onAuthStateChanged, signOut } from "./firebase.js";

let cart = [];
let foodRoot = document.getElementById("food");
let cartPanel = document.getElementById("cart-panel");

function addToCart(name, price, imageURL) {
    let user = auth.currentUser; // ✅ Get current user

    if (user) {
        let item = cart.find(item => item.name === name);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ name, price, imageURL, quantity: 1 });
        }
        updateCart();
    } else {
        alert("Sign-in to Order");
        window.location.href = "login/login.html"
    }
}
window.addToCart = addToCart;

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPriceElem = document.getElementById("total-price");
    let cartCount = document.getElementById("cart-count");

    if (!cartItems || !totalPriceElem || !cartCount) return;

    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Cart is empty</p>";
        totalPrice = 0;
    } else {
        cart.forEach((item, index) => {
            let itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            cartItems.innerHTML += `
                <div class="cart-item">
                    <span> <img src="${item.imageURL}" width="75" height="50"> </span>
                    <span>${item.name} - RS ${item.price} x ${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>`;
        });
    }

    totalPriceElem.textContent = `Total: RS ${totalPrice}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// ✅ Expose functions to global scope for event listeners to work
window.changeQuantity = function (index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
};

window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCart();
};

function toggleCart() {
    cartPanel.classList.toggle("show");
}
window.toggleCart = toggleCart; // ✅ Make sure `toggleCart` is accessible globally
