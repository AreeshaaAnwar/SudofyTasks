let cart = [
    {
      "price":"1200",
     "DeliveryType":"Paid"
    },
    {
        "price":"1500",
        "DeliveryType":"Paid"
      
    },
    {
      "price":"1500",
      "DeliveryType":"Paid"
    
  },
  {
    "price":"1500",
    "DeliveryType":"Paid"
  
},
{
  "price":"1500",
  "DeliveryType":"Paid"

}
  ]
  window.localStorage.setItem("cart", JSON.stringify(cart));
//  var card =  document.getElementById("five");  
cart.forEach((element ,i)=> {
  

const main=document.querySelector(".main")
console.log(main)
const div=document.createElement("div")
div.classList="card"
// div.className="col-md-3"
const shopCart=` <img src="https://m.media-amazon.com/images/I/81mSba9UEsL._AC_SR1840,1472_.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${cart[i].price}</h5>
  <h5 class="card-title">${cart[i].DeliveryType}</h5>
  <a href="#" class="btn btn-primary seven" >AddtoCard</a>
</div>`
div.innerHTML+=shopCart
main.appendChild(div)
});
    

