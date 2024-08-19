import { products } from "./data/Products.js";
import { calculateTotal } from "./productDIsplay.js";

// ----------------------------------------Functions-------------------------------------------------------------
export function DisplayInProductDisplay(array) {
    document
      .querySelectorAll(".product-image-container")
      .forEach((container) => {
        container.addEventListener("click", () => {
          let productName = container.dataset.containerName;
          const selectedItem = array
            .flat()
            .find((product) => product.name === productName);

          if (selectedItem) {
            localStorage.setItem("selecteditem", JSON.stringify(selectedItem));
            console.log(selectedItem.Image);
            window.location.href = "Product Display.html";
          } else {
            console.log(`error`);
          }
        });
      });
};


// -------------------------------------------MAIN PROGRAM-------------------------------------------------
let html ='';
const vegetables = products[0];
vegetables.forEach((item)=>{
    html += `
        <div class="product-container" >
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
document.getElementById("product-main-container").innerHTML = html;
DisplayInProductDisplay(vegetables)
window.addEventListener("load", calculateTotal);

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





