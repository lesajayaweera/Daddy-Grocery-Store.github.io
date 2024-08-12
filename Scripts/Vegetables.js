import { products } from "./data/Products.js";

let html ='';
const vegetables = products[0];

vegetables.forEach((item)=>{
    html += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${item.Image}" alt="${item.Image}">
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
const buttons = document.querySelectorAll(".add-to-cart-button");
document.getElementById("product-main-container").innerHTML =html;
console.log(buttons.dataset.productId);

