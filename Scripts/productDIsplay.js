import { products } from "./data/Products.js";

// Function to update the cost based on the input quantity
function updateCost(inputElement, displayElement, item) {
  
  let total = item.price;

  
  inputElement.addEventListener("change", () => {
    
    const quantity = parseInt(inputElement.value);

   
    total = item.price * quantity;

    
    displayElement.innerText = ` Rs.${(total / 100).toFixed(2)}`;
  });
}

// Function to render the product details on the page
function renderProductDetails(selectedItem) {
  selectedItem.Image = "../" + selectedItem.Image;
  document.title = selectedItem.name;

  if (!selectedItem.description) {
    selectedItem.description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
  }

  document.getElementById("productDisplayContainer").innerHTML = `
        <div id="ImageContainer">
            <img src="${selectedItem.Image}" alt="${selectedItem.name}">
        </div>
        <div id="productDescription">
            <h2>${selectedItem.name}</h2>
            <p>${selectedItem.description}</p>
            <p id="PriceProduct">Price:<span> Rs.${(
              selectedItem.price / 100
            ).toFixed(2)}</span></p>
            <div id="buyButtonContainer">
                <button id="ProductDisplaybtn" data-product-id="${selectedItem.id}">ADD TO CART</button>
            </div>
        </div>
    `;

  // Create and append quantity input box
  const quantityBox = createQuantityInputBox();
  document.getElementById("buyButtonContainer").appendChild(quantityBox);

  // Update the price based on the quantity
  updateCost(
    quantityBox,
    document.querySelector("#PriceProduct span"),
    selectedItem
  );
}

// Function to create the quantity input box
function createQuantityInputBox() {
  const quantityBox = document.createElement("input");
  quantityBox.type = "number";
  quantityBox.value = 1;
  quantityBox.min = 1;
  quantityBox.id = "quantityBox";
  return quantityBox;
}

// Function to handle loading the product data
function loadProductData() {
  const selectedItem = JSON.parse(localStorage.getItem("selecteditem"));

  if (selectedItem) {
    renderProductDetails(selectedItem);
  } else {
    document.getElementById("productDisplayContainer").innerHTML =
      "<p>Product not found.</p>";
  }

  localStorage.removeItem("selectedProduct");
}

// Load product data when the page is loaded
window.addEventListener("load", loadProductData);
