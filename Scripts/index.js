import { products } from "./data/Products.js";


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



window.addEventListener("load",()=>{
    const randomProducts = getRandomItems(products, 10);
    // console.log(randomProducts);

    let html ='';
    randomProducts.forEach((item)=>{
        html += `
            <div class="product-container" data-container-name="${item.name}">
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
    document.getElementById("product-main-container").innerHTML =html;
    document.querySelectorAll(".product-container").forEach((container) => {
      const cartButton = container.querySelector(".add-to-cart-button");
      cartButton.addEventListener("click", () => {
            const productId = cartButton.dataset.productId;
            const productName = container.dataset.containerName;
            console.log(`Added ${productName} to cart with ID: ${productId}`);
            // Add product to cart logic here
            products.forEach((category) => {
                category.forEach((product)=>{
                    if(product.id === productId){
                        console.log(product.price);
                        
                    }
                })
            })
        })
    });

})  




