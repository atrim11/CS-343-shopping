/* define your functions here */

console.log(cart);

function calculateTotal(q, p) {
  return q * p;
}

function outputCartRow(file, title, quantity, price, total) {
  return " " + item + " " + total + " ";
}

for(let item of cart) {
    let total = calculateTotal(item.quantity, item.product.price);
    outputCartRow(item, total);
}
