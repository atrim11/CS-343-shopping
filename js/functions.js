/* define your functions here */

console.log(cart);
let subTotal = 0;
function calculateTotal(q, p) {
  return q * p;
}

function outputCartRow(item, total) {
  console.log(item, total);
  const {
    product: { title, filename, price },
    quantity,
  } = item;
  const row = `         <tr>
    <td><img src="images/${filename}"></td>
    <td>${title}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td>${total}</td>
    </tr>`;
  document.write(row);
}

function outputTableBody() {
  for (let item of cart) {
    let total = calculateTotal(item.quantity, item.product.price);
    outputCartRow(item, total);
    subTotal = calculateTotal(item.quantity, item.product.price);
  }
}

function outputTotalRow(name, total) {
    
}

