import { products } from "./product-module.js";
let totalElement = document.createElement("p");
export const displayList = () => {
  try {
    let ul = document.getElementById("product-list");

    ul.innerHTML = "";

    let total = 0;

    products.forEach((products) => {
      let productItem = document.createElement("li");
      productItem.textContent = `${products.productName}: $${products.productPrice}`;

      ul.appendChild(productItem);

      total += +products.productPrice;
    });

    totalElement.textContent = `Total: ${total}`;

    document.body.appendChild(totalElement);
  } catch (error) {
    alert(`ui Module Error: ${error.message}`);
  }
};
