export const products = [];
export const addProduct = (productName, productPrice) => {
  try {
    let productObj = {
      productName,
      productPrice,
    };
    products.push(productObj);
  } catch (error) {
    alert(`productModule error: ${error.message}`);
  }
};
