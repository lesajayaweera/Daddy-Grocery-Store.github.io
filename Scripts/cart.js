
let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

let html ='';


cart.forEach((product)=>{
    product.Image ="../"+ product.Image;
    html+= `
        <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${product.Image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${product.name}
                </div>
                <div class="product-price">
                 Rs.${(product.price / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${product.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              
            </div>
          </div>
        `;
        console.log(product.Image);
        

})
document.querySelector(".order-summary").innerHTML = html;

const productCounter= document.querySelectorAll("#checkoutCount");
productCounter.forEach((container)=>{
  container.textContent = `${cart.length} items`;
  container.style.color = "rgb(196, 80, 0)";
  container.style.fontWeight = "600"
})

function CalculateCost(){
  const costDisplay = document.querySelector(".payment-summary-money-cost");
  let totalCost = 0;
  cart.forEach((product) => {
    totalCost += product.price * product.quantity;
  });
  costDisplay.textContent = `Rs.${(totalCost / 100).toFixed(2)}`;
}

CalculateCost();
console.log(cart);



