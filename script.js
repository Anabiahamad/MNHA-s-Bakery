let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve the cart from localStorage or initialize an empty array

// Function to add an item to the cart
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartCount();
    saveCart(); // Save the updated cart to localStorage
}

// Function to update cart count in the header
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Function to show the cart in a new page
function viewCart() {
    saveCart(); // Save cart to localStorage before redirecting
    window.location.href = "cart.html"; // Redirect to the cart page
}

// Function to clear the cart
function clearCart() {
    cart = []; // Clear the array
    updateCartCount(); // Update the count to 0
    saveCart(); // Save the cleared cart to localStorage
}

// Save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
}


// Function to show the options for cookies/cupcakes
function showOptions(optionId) {
    const options = document.getElementById(optionId);
    
    // Toggle the visibility of the options
    if (options.style.display === "none" || options.style.display === "") {
        options.style.display = "block"; // Show options
    } else {
        options.style.display = "none"; // Hide options if already shown
    }
}

// Function to show the cart (if needed for pop-up cart)
function showCart() {
    const cartDiv = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    
    // Toggle cart visibility
    if (cartDiv.style.display === "none") {
        cartDiv.style.display = "block";
    } else {
        cartDiv.style.display = "none";
    }

    // Clear the current cart items and populate with updated list
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });
}

// Load the cart from localStorage when the page loads
window.onload = function () {
    updateCartCount(); // Update the cart count when the page loads
};

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price }); // Store the price along with the item name
    updateCartCount();
    saveCart(); // Save the updated cart to localStorage
}

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
};
