let database = [];
let currentProduct;
  fetch("bookShelv.json")
  .then((res) => res.json())
  .then((data) => {
    let db = database = [...data]
    return db
  })
  .then((data2) => {
    fetch("gaming.json")
    .then((res) => res.json())
    .then((data1) => {
      let gamedata = data1.map(x=> {
        return {
          image1 : x.hover_image,
          image2 : x.first_image,
          image3 : x["2nd_image"],
          image4 : x["3rd_image"],
          rating: ["", x.review],
          description2: x.des,
          description1: x.des,
          price:x.cost,
          title: x.tittle,
          id: x.id
        }
      });
      gamedata.forEach(element => {
        data2.push(element)
      });
      database = data2;
      load();
    })
  })
  ;

function load() {
  let id = +JSON.parse(localStorage.getItem("productDetailId")) || 11
  currentProduct = database.find(x => +x.id === id)

  let display = document.getElementById("container")
  display.innerHTML = ` 
    <div class="wrapper">
            <div class="leftdiv">
                <img src="${currentProduct.image1}"/>
                <img src="${currentProduct.image2}" />
                <img src="${currentProduct.image3}"/>
                <img src="${currentProduct.image4}"/>
                <div class="desc">
                <p>${currentProduct.description2}</p>
                </div>
               <div> <p>Delivery and assembly prices not included.</p></div>
                <div>Article number</div>
                <div id="code">004.175.79</div>
                <div class="more-info"><span>Product details</span><span><img src="./images/arrow.png"</span></div>
                <div class="more-info"><span>Measurements</span><span><img src="./images/arrow.png"</span></div>
                <div class="more-info"><div id="review-wrapper"><div class="review"><span>Reviews</span>
                <img src="./images/stars.PNG"/></div><label class="stars-countb">(${currentProduct.rating[1]})</label>
                </div><span><img src="./images/arrow.png"</span></div>
                <div></div>
            </div> 
            <div class="rightdiv">
                <div>
                    <div class="title">
                        ${currentProduct.title}
                    </div>
                    <span>${currentProduct.description1}</span>
                </div>
                <p>Rs.<span> ${currentProduct.price}</span></p>
                <p>Price incl. of all taxes</p>
                <p><img class="stars" src="./images/stars.PNG"/><label class="stars-count">(${currentProduct.rating[1]})</label></p>
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
                <div><img data-id=${currentProduct.id} id="addto-cart" src="./images/a2c.png"/></div>
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

  let cartArr = JSON.parse(localStorage.getItem('cart')) || []

  cartArr.push(currentProduct)
  localStorage.setItem('cart', JSON.stringify(cartArr))
  e.target.setAttribute("src", "./images/a2c2.png")
  isItemAdded = true;

  document.getElementById('count').innerText = cartArr.length;
}

function cartClickFn() {
  document.location.href ="shoppinglist.html"
}


