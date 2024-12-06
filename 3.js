function calculateDiscount(product, discount) {
    return product.price - (product.price * discount) / 100;
}
var product = { name: "Laptop", price: 999 };
console.log(calculateDiscount(product, 15));
