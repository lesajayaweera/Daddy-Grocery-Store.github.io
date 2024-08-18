import { products } from "./data/Products.js"

window.addEventListener("load",()=>{
    const selectedItem = JSON.parse(localStorage.getItem("selecteditem"));
    if (selectedItem){
        selectedItem.Image ="../" + selectedItem.Image;
        
        document.title = selectedItem.name;
        if (!selectedItem.description){
            selectedItem.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
        }
          document.getElementById("productDisplayContainer").innerHTML = `
            <div id="ImageContainer">
                <img src="${selectedItem.Image}" alt="${selectedItem.name}">
            </div>
            <div id="productDescription">
                <h2>${selectedItem.name}</h2>
                <p>${selectedItem.description}</p>
                <p id="PriceProduct">Price:<span> Rs.${(selectedItem.price / 100).toFixed(2)}</span></p>
                <div id="buyButtonContainer">
                  <button id="ProductDisplaybtn" data-product-id="${
                    selectedItem.id
                  }">ADD TO CART</button>
                </div
                
            </div>
            
            `;
          const quantityBox = document.createElement("input");
          quantityBox.type = "number";
          quantityBox.value = 1;
          quantityBox.min = 1;
          quantityBox.setAttribute("id","quantityBox")
          document.getElementById("buyButtonContainer").appendChild(quantityBox);

        
    }
   else {
    // Handle the case where the product data is missing
    document.getElementById("productDisplayContainer").innerHTML = "<p>Product not found.</p>";
  }
  localStorage.removeItem("selectedProduct");


})


