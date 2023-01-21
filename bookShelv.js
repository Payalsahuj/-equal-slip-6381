// getting main section for procduct
let productPage = document.querySelector(".shelvProduct");

// Product data to access golbally
let globalData = [];

// fetching product data
fetch("bookShelv.json")
    .then((res) => res.json())
    .then((data) => {
        globalData = data;
        renderProduct(data);
    }).catch((err) => console.log(err));

// Rendering product data
function renderProduct(data) {
    let cartArr = JSON.parse(localStorage.getItem('cart')) || []
    document.getElementById('count').innerText = cartArr.length;
    let cardList = `
          <div class="cardList">
           ${data.map((item) => productCard(item.id, item.image1, item.title, item.description1, item.price, item.rating[0], item.rating[1])).join('')}
          </div>
      `
    productPage.innerHTML = cardList;

    let allProducts = document.getElementsByClassName('productCard');

    for (let item of allProducts) {
        item.addEventListener('click', (e) => {
            productClickFn(e)
        })
    }
}
// product click
function productClickFn(e) {
    let id = e.currentTarget.dataset.id;
    localStorage.setItem('productDetailId', id);
    document.location.href = "details.html"
}

// making of each cards
function productCard(id, image, title, des, price, rating, rCount) {
    let card = `
      <div data-id=${id} class="productCard">
              <img class="productImg" src=${image}>
              <h4>${title}</h4>
              <p>${des}</p>
              <h4>Rs.${price}</h4>
              <div class="rating"><p>${rating}</p><p>(${rCount})</p></div>
              <div class="addCart">🤍</div>
         </div>
    `
    return card;
}
// hovering image on product display page ---------------------------------------------------------------------


