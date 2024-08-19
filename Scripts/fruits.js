import { products } from "./data/Products.js";
import { DisplayInProductDisplay } from "./Vegetables.js";
import { calculateTotal } from "./productDIsplay.js";




    






const Fruits = products[2];

let html = '';

Fruits.forEach((item) => {
     html += `
        <div class="product-container">
            <div class="product-image-container" data-container-name="${
              item.name
            }">
                <img class="product-image" src="${item.Image}" alt="${
       item.Image
     }">
            </div>
            <div class="product-name-container">
                <p class="product-name">${item.name}</p>
                <p>${item.unit}</p>
                <p>Rs.${(item.price / 100).toFixed(2)}</p>
            </div>
            <div class="add-to-cart-button-container">
                <button class="add-to-cart-button" data-product-id="${item.id}">
                    ADD TO CART
                </button>
            </div>
        
        </div>
        `;
})

document.getElementById("product-main-container").innerHTML = html;;

DisplayInProductDisplay(Fruits);


calculateTotal();

const buttons = document.querySelectorAll(".add-to-cart-button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.productId;
    console.log(id);
    let cart = JSON.parse(localStorage.getItem("cart"));

    let existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
     
      existingProduct.quantity = parseInt(existingProduct.quantity) + 1;
      alert(`item added Successfully`)
      
    } else {
     
      products.forEach((category) => {
        category.forEach((product) => {
          if (product.id === id) {
            cart.push({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              category: product.category,
            });
          }
          
        });
      });
      alert(`item added Successfully`);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotal();
    
    
  });
});



