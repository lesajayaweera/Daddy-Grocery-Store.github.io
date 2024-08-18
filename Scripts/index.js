import { products } from "./data/Products.js";
// importing the calculate Total function
import { calculateTotal } from "./productDIsplay.js";
const indexProducts = products;
export function ShowTheProduct(containerSelector, products) {
  document.querySelectorAll(containerSelector).forEach((container) => {
    container.addEventListener("click", () => {
      let productName = container.dataset.containerName;

      const selectedProduct = products.flat().find((product) => product.name === productName);

      if (selectedProduct) {
        selectedProduct.Image = "../"+ selectedProduct.Image
        
        localStorage.setItem("selecteditem", JSON.stringify(selectedProduct));
        console.log(selectedProduct);
        
        window.location.href = "Html websites/Product Display.html";
      }
    });
  });
}

function getRandomItems(products, numberOfItems) {
    products.forEach((category) => {
      category.forEach((product) => {
        product.Image = product.Image.replace("../", "");
      });
    });

  const flatArray = products.flat(); // Flatten the nested array
  const randomItems = [];

  for (let i = 0; i < numberOfItems; i++) {
    const randomIndex = Math.floor(Math.random() * flatArray.length);
    randomItems.push(flatArray[randomIndex]);
    flatArray.splice(randomIndex, 1); // Remove the selected item to avoid duplicates
  }
  return randomItems;
}


//----------------------------------MAIN PROGRAM------------------------------------------------------------------- 
let cart = JSON.parse(localStorage.getItem("cart"));
if(cart ===null){
  cart = [];
}
const randomProducts = getRandomItems(indexProducts, 10);


let html = "";
randomProducts.forEach((item) => {
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
                    <button class="add-to-cart-button" data-product-id="${
                      item.id
                    }">
                        ADD TO CART
                    </button>
                </div>  
            </div>
        `;
});
document.getElementById("product-main-container").innerHTML = html;
//Add click event listener to all the product containers to navigate to Product Display page

ShowTheProduct(".product-container",products);




window.addEventListener("load",calculateTotal);