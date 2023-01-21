let database=[]

load();

function load() {

   database = JSON.parse(localStorage.getItem("cart")) || []
  let main = document.getElementById('main')
  var cartData = database;
  document.getElementById('count').innerText = cartData.length;

  main.innerHTML = `${cartData.map(x => getItem(x))}`

  let allBtns = document.getElementsByClassName('delete')
  for (let btn of allBtns) {
    btn.addEventListener('click', (e) => {
      deleteFn(e)
    })
  }

  addListener()
  showTotal()
  setSelect()
}

function showTotal() {
  let tot = 0
  let totalEl = document.querySelectorAll('.total');
  totalEl.forEach(elem => {
    let price = +(elem.innerText.trim())
    tot = tot + price
  })

  document.getElementById('sub-total').innerText = `Rs. ${tot}`
  localStorage.setItem('finalTotal', JSON.stringify(tot))
}

function setSelect(){
  
  let allSel = document.getElementsByClassName('quan-sel');
  for (var sel of allSel) {
    let id = +sel.dataset.id
    let product = database.find(product => +product.id === id);
    sel.value = product.quan ? product.quan :1
  }
}

function addListener() {
  let allSel = document.getElementsByClassName('quan-sel');
  for (var sel of allSel) {
    sel.addEventListener('change', (e) => {
      selectFn(e)
    })
  }
}
function selectFn(e) {
  let id = +e.target.dataset.id
  let quan = +e.target.value;

  let totEl = document.getElementById(id);

  let product = database.find(product => +product.id === id)
 

  let price = +product.price
  totEl.innerText = `${quan * price}`

  database.forEach(elem => {
    if(+elem.id === id) {
      elem.quan = quan
    }
  })
  localStorage.setItem('cart', JSON.stringify(database))
  showTotal()
}

function deleteFn(e) {
  let id = +e.target.dataset.id;
  let products = database.filter(x => +x.id !== id)
  localStorage.setItem('cart', JSON.stringify(products))
  load()

}
function getItem(product) {
  return `<div class="main-div">
    <div class="left-div">
      <div><img src=${product.image1}" />
      </div>
      <div class="left">
        <div id="title">
        ${product.title}</div>
        <p>${product.description2}</p>
      </div>
    </div>
    <div class="right-div">
      <div>
        <div>Rs. <span id=${product.id}  class="total">${+product.price * (+product.quan?+product.quan: 1)}</span></div>
        <div>Rs. ${product.price} / pieces</div>
      </div>
      <div>
        <div><button data-id=${product.id} class="delete"><span><img data-id=${product.id}
                src="https://order.ikea.com/in/en/checkout/static/media/remove-thin-24.16c1cc7a.svg" /></span></button>
        </div>
        <div class="sel-div">
          <select class="quan-sel" data-id=${product.id}>
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  </div>`
}


function showpincode() {
  document.querySelector('.pincode-wrapper').classList.remove("display-none");
}

function proceed() {
  document.location.href = "checkout.html"
}