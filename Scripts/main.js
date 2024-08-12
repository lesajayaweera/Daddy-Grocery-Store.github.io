import { products } from "./data/Products.js";

let html ='';
products.forEach((cateogory)=>{
    cateogory.forEach((item)=>{
        console.log(item.name);
        console.log(item.Image);
        html += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${item.Image}" alt="image1">
            </div>
            <div class="product-name-container">
                <p class="product-name">${item.name}</p>
                <p>${item.unit}</p>
                <p>Rs.${(item.price/100).toFixed(2)}</p>
            </div>
            <div class="add-to-cart-button-container">
                <button class="add-to-cart-button">
                    ADD TO CART
                </button>
            </div>
        
        </div>
        `;
        

    })
})

document.getElementById("product-main-container").innerHTML =html;