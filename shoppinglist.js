




let database=[];
fetch("bookShelv.json")
.then((res)=>res.json())
.then((data)=>{
    database = data;
    load();
});

let main = document.getElementById('main')
function load(){
    let ids = JSON.parse(localStorage.getItem('cart')) ||[]
    document.getElementById('count').innerText = ids.length;
    var cartData = database.filter(x=> ids.includes(+x.id));

    main.innerHTML = `${cartData.map(x=>getItem(x))}`

    let allBtns= document.getElementsByClassName('delete')
    for(let btn of allBtns){
        btn.addEventListener('click', (e)=>{
            deleteFn(e)
        })
    }
}

function deleteFn(e){
    let id = +e.target.dataset.id;
    let ids = JSON.parse(localStorage.getItem('cart')) ||[]
    let newIds = ids.filter(x=> +x !== id)
    localStorage.setItem('cart',JSON.stringify(newIds))
    load()

}
function getItem(product){
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
        <div class="total">Rs.67,830.00</div>
        <div>${product.price} / pieces</div>
      </div>
      <div>
        <div><button data-id=${product.id} class="delete"><span><img data-id=${product.id}
                src="https://order.ikea.com/in/en/checkout/static/media/remove-thin-24.16c1cc7a.svg" /></span></button>
        </div>
        <div class="sel-div">
          <select>
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