let cartList = document.getElementById('cart-list');
let totalElement = document.getElementById('total');
let cart = [];
    
    function addToCart(itemName, itemPrice, quantityId) {
        const quantity = parseInt(document.getElementById(quantityId).value);
        const totalPrice = itemPrice * quantity;
        
        const cartItem = {
            name: itemName,
            price: itemPrice,
            quantity: quantity,
            total: totalPrice
        };

        cart.push(cartItem);
        updateCartUI();
    }

    function updateCartUI() {
        
        let total = 0;

        // Clear the current content of the cart list
        cartList.innerHTML = '';

        // Update the cart list and calculate the total price
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.textContent = `${item.name} x${item.quantity} - ${item.total.toFixed(2)} Sickles`;
            cartList.appendChild(listItem);

            total += item.total;
        });

        // Update the total price in the UI
        totalElement.textContent = total.toFixed(2);
    }