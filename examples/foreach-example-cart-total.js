var cart = [
    { price: 4.99, taxRate: 0.05 },
    { price: 0.99, taxRate: 0.08 },
    { price: 9.95, taxRate: 0.00 },
    { price: 7.43, taxRate: 0.05 }
];

function computeCartTotal(cart) {
    var total = 0;

    function addItemPriceToTotal(item) {
        // compute the price of that item including tax
        var itemTotalPrice = item.price + (item.price * item.taxRate);

        // add that price to the total
        total = total + itemTotalPrice;
    }

    // iterate over the cart getting the total price of each item

    cart.forEach(addItemPriceToTotal);

    return total;
}

var cartTotal = computeCartTotal(cart);

console.log(`The total price of your shopping cart is: $${cartTotal}`);
