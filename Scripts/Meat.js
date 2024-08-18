import { products } from "./data/Products.js";
import { DisplayInProductDisplay } from "./Vegetables.js";
import { calculateTotal } from "./productDIsplay.js";
const Meat = products[1];


let html = '';

Meat.forEach((item) => {
     html += `
        <div class="product-container" data-container-name="${item.name}">
            <div class="product-image-container">
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

DisplayInProductDisplay(Meat);
window.addEventListener("load", calculateTotal);