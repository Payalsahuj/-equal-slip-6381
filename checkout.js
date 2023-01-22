let database=[]
load();


function load(){
    database = JSON.parse(localStorage.getItem("cart")) || []
    finalTotal = +JSON.parse(localStorage.getItem('finalTotal')) || 0
    document.getElementById("sub-total").innerText = `Rs. ${finalTotal}`;
    document.getElementById("bottom-total").innerText = `Rs. ${finalTotal}`;
    document.getElementById("con").innerHTML = `${ database.map(x=> getItem(x)).join("")}`
    let deliveryFee = database.length * 20;
    document.getElementById("bdf").innerText = `Rs. ${deliveryFee}`;


    let orderValue= finalTotal + deliveryFee
    document.getElementById("ov").innerText = `Rs. ${orderValue}`;


}

  function getItem(item) {
   return `<div id = "main-div" class="main-div">
   <div class="left-div">
   <div><img src="${item.image1}"/>
   </div>
   <div class="left">
     <div id="title">
     ${item.title}</div>
     <p>${item.description1}</p>
     <div class="sd">
     <label><b>Rs. ${+item.price}</b></label><span>X</span><label><b> ${item.quan ?item.quan:1}</b></label></div>
   </div>
 </div>
 <div class="right-div">
   <div>
     <div class="total font">Rs.${+item.price * +(item.quan ?item.quan:1 )}</div>
     <div id="df">Rs. 20/piece</div>
   </div>
   <div>
     <div class="remove"><img
             src="https://order.ikea.com/in/en/checkout/static/media/remove-thin-24.16c1cc7a.svg" />
     <span>Remove</span>
           </div>
   </div>
 </div> </div>`
  }


  function toPayment() {
    document.location.href="deliveryinfo.html"
  }