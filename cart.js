let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage or initialize an empty array

// Function to display cart items and total price
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear existing items
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} 
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(listItem);

        // Calculate total price
        totalPrice += item.price;
    });

    // Update total price
    totalPriceEl.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    saveCart(); // Save the updated cart to localStorage
    displayCart(); // Update the cart display
}

// Function to clear the cart
function clearCart() {
    cart = []; // Clear the cart
    saveCart(); // Save the cleared cart to localStorage
    displayCart(); // Update the cart display
}

// Save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
}

// Load the cart and display it when the page loads
window.onload = function () {
    displayCart(); // Display the cart when the page loads
};

// Function to show the checkout form
function showCheckoutForm() {
    document.getElementById('checkoutForm').style.display = 'flex';
}

// Function to hide the checkout form
function closeCheckoutForm() {
    document.getElementById('checkoutForm').style.display = 'none';
}

// Function to handle form submission
function submitCheckoutForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Display a message or send data to the server
    alert(`Thank you, ${name}! Your order will be delivered to your address within 12 hours.`);
    
    // Close the form after submission
    closeCheckoutForm();
}