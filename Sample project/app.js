import { addProduct, products } from "./Modules/product-module.js";
import { displayList } from "./Modules/uimodule.js";

let productsFormContainer = document.getElementById("product-form");
let productsListContainer = document.getElementById("product-list");

fetch("./Components/product-form.html")
  .then((response) => response.text())
  .then((html) => {
    productsFormContainer.innerHTML = html;
  });

fetch("./Components/product-list.html")
  .then((response) => response.text())
  .then((html) => {
    productsListContainer.innerHTML = html;
  });

let form = document.getElementById("product-form");
form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();

    let productNameInput = document.getElementById("productName");
    let productPriceInput = document.getElementById("productPrice");
    let productName = productNameInput.value;
    let productPrice = productPriceInput.value;

    if (productName && productPrice) {
      addProduct(productName, productPrice);
      console.log("products", products);
      displayList();
    }
  } catch (error) {
    alert(`App Error: ${error.message}`);
  }
});
