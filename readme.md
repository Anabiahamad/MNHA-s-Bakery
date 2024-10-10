Overlay and Button Hover Effect:

The overlay and add-to-cart-btn are initially hidden using opacity: 0. When the user hovers over the item, the image fades out (opacity: 0.3), and the overlay and button fade in (opacity: 1).

The onclick="showOptions('cookies-options') event is attached to the "Add to Cart" button. When clicked, it calls the showOptions() function.
The showOptions() function:
Takes the ID of the pricing options ('cookies-options') as a parameter.
It checks if the options are currently hidden (display: none) and toggles their visibility (block to show, none to hide).


explaining java

- let cart = [];: Initializes an empty array called cart to store the items added by the user. Each item added to the cart will be pushed into this array.

--function addToCart(itemName): Defines a function called addToCart that takes one argument, itemName, which is the name or description of the item to be added to the cart.

--.push(itemName);: Adds the item name to the cart array. The push() method adds one or more elements to the end of an array.

--updateCartCount();: Calls the updateCartCount() function to refresh the count of items displayed in the cart icon.

--alert(itemName + " added to cart!");: Displays a pop-up alert to the user confirming that the item has been added to the cart.

--function updateCartCount(): Defines a function that updates the cart count shown in the cart icon.

--document.getElementById('cart-count').innerText = cart.length;: Accesses the HTML element with the ID cart-count and sets its text content to the length of the cart array (the number of items currently in the cart). This updates the displayed count each time an item is added.

--function showOptions(optionId): Defines a function that displays or hides the pricing options based on the provided ID.

--const options = document.getElementById(optionId);: Uses getElementById to get the HTML element with the specified optionId. This element contains the pricing options for the item.

--if (options.style.display === "none" || options.style.display === ""): Checks if the display property of the options element is either "none" (hidden) or an empty string (default state).

--options.style.display = "block";: If the options are hidden, this line sets their display style to "block", making them visible.

--options.style.display = "none";: If the options are already visible, this line hides them again by setting the display to "none"

--function showCart(): Defines a function to show or hide the cart.

--const cartDiv = document.getElementById('cart');: Gets the cart's HTML element by its ID.

--const cartItems = document.getElementById('cart-items');: Gets the element that will display the list of items in the cart.

--if (cartDiv.style.display === "none"): Checks if the cart is currently hidden.

--cartDiv.style.display = "block";: Shows the cart if it’s hidden.

--cartDiv.style.display = "none";: Hides the cart if it’s currently visible.

--cartItems.innerHTML = '';: Clears any existing items in the cart display.

--cart.forEach((item, index) => {...});: Loops through each item in the cart array.

--const listItem = document.createElement('li');: Creates a new list item for each cart item.

--listItem.textContent = ${index + 1}. ${item};: Sets the text for the list item, including the item's index and name.

--cartItems.appendChild(listItem);: Adds the newly created list item to the list of cart items.

--function clearCart(): Defines a function to clear the cart.

--cart = [];: Resets the cart array to an empty array, effectively clearing all items.

--updateCartCount();: Calls the function to update the displayed cart count to 0.

--showCart();: Calls the function to refresh the cart display, ensuring it reflects the cleared state.

//cart.js explanation

--let cart = JSON.parse(localStorage.getItem('cart')) || [];: This line retrieves the cart from localStorage (where it's stored) and parses it from a JSON string back into a JavaScript object (array). If there's no cart stored, it initializes cart as an empty array.

--function displayCart(): This function displays the items in the cart and calculates the total price.

--const cartItems = document.getElementById('cart-items');: Gets the HTML element where the cart items will be displayed.

--const totalPriceEl = document.getElementById('total-price');: Gets the element that shows the total price.

--let totalPrice = 0;: Initializes a variable to keep track of the total price.

--cartItems.innerHTML = '';: Clears any existing items displayed in the cart before rendering them again.

--cart.forEach((item, index) => {...});: Loops through each item in the cart array:
    -Creates a list item for each product, displaying its name and price.
    -Adds a "Remove" button for each item that calls removeItem(index) to remove the item when clicked.

--totalPrice += item.price;: Accumulates the total price of the items in the cart.

--totalPriceEl.textContent = totalPrice.toFixed(2);: Updates the total price displayed in the HTML, formatting it to two decimal places.

--function removeItem(index): This function removes an item from the cart based on its index.

--cart.splice(index, 1);: Uses the splice method to remove one item at the specified index from the cart array.

--saveCart();: Calls the saveCart() function to save the updated cart to localStorage.

--displayCart();: Calls displayCart() to refresh the cart display after removing an item.

--function clearCart(): This function clears all items from the cart.

--cart = [];: Resets the cart array to an empty array, effectively removing all items.

--saveCart();: Calls saveCart() to save the cleared state to localStorage.

--displayCart();: Calls displayCart() to refresh the cart display after clearing.

--function saveCart(): This function saves the current state of the cart to localStorage.

--localStorage.setItem('cart', JSON.stringify(cart));: Converts the cart array to a JSON string and saves it in localStorage under the key 'cart'.

--window.onload = function () {...};: This is an event handler that runs when the page finishes loading.

--displayCart();: Calls the displayCart() function to render the cart items and total price as soon as the page load