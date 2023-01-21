let database = [];
fetch("bookShelv.json")
  .then((res) => res.json())
  .then((data) => {
    database = data;
    load();
  });


function load() {
  let id = JSON.parse(localStorage.getItem("productDetailId")) || 11
  let product = database.find(x => +x.id === id)


  let display = document.getElementById("container")
  display.innerHTML = ` 
    <div class="wrapper">
            <div class="leftdiv">
                <img src="${product.image1}"/>
                <img src="${product.image2}" />
                <img src="${product.image3}"/>
                <img src="${product.image4}"/>
                <div class="desc">
                <p>${product.description2}</p>
                </div>
               <div> <p>Delivery and assembly prices not included.</p></div>
                <div>Article number</div>
                <div id="code">004.175.79</div>
                <div class="more-info"><span>Product details</span><span><img src="./images/arrow.png"</span></div>
                <div class="more-info"><span>Measurements</span><span><img src="./images/arrow.png"</span></div>
                <div class="more-info"><div id="review-wrapper"><div class="review"><span>Reviews</span>
                <img src="./images/stars.PNG"/></div><label class="stars-countb">(${product.rating[1]})</label>
                </div><span><img src="./images/arrow.png"</span></div>
                <div></div>
            </div> 
            <div class="rightdiv">
                <div>
                    <div class="title">
                        ${product.title}
                    </div>
                    <span>${product.description1}</span>
                </div>
                <p>Rs.<span> ${product.price}</span></p>
                <p>Price incl. of all taxes</p>
                <p><img class="stars" src="./images/stars.PNG"/><label class="stars-count">(${product.rating[1]})</label></p>
                <p>How to get it</p>
                <div class="cis">
                    <div> <img src="./images/store.PNG"/>
                        <span class="storelink">  <a>check in-store stock</a></span>
                      </div>
                </div>
                <div class="stock-check">
                    <input class="pininput"/> 
                    <button class="check"> Check</button>
                </div>
                <div><img data-id=${product.id} id="addto-cart" src="./images/a2c.png"/></div>
                <div id="noti-div"> <label id="noti"></label></div>
            </div>   
        </div>`
  addListener();

  let cartArr = JSON.parse(localStorage.getItem('cart')) || []
  document.getElementById('count').innerText = cartArr.length;
}


function addListener() {
  let addtocartbtn = document.getElementById("addto-cart");
  addtocartbtn.addEventListener('click', (e) => {
    addToCartFn(e)
  })
}

let isItemAdded = false;
function addToCartFn(e) {
  if (isItemAdded) {
    document.getElementById("noti").innerText = "Item already in cart"
    return;
  }

  let id = +e.target.dataset.id
  let cartArr = JSON.parse(localStorage.getItem('cart')) || []
  cartArr.push(id)
  localStorage.setItem('cart', JSON.stringify(cartArr))
  e.target.setAttribute("src", "./images/a2c2.png")
  isItemAdded = true;

  document.getElementById('count').innerText = cartArr.length;
}

function cartClickFn() {
  document.location.href ="shoppinglist.html"
}


