import { products } from "./data/Products.js";
import { calculateTotal } from "./productDIsplay.js";
// ----------------------------------------Functions-------------------------------------------------------------
export function DisplayInProductDisplay(array) {
    document.querySelectorAll(".product-container").forEach((container) => {
        container.addEventListener("click", () => {
            let productName = container.dataset.containerName;
            const selectedItem = array.flat().find((product) => product.name === productName);
            
            
            if (selectedItem) {
                
                localStorage.setItem("selecteditem", JSON.stringify(selectedItem));
                console.log(selectedItem.Image);
                window.location.href = "Product Display.html";
            }else{
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
document.getElementById("product-main-container").innerHTML = html;
DisplayInProductDisplay(vegetables)
window.addEventListener("load", calculateTotal);




