// getting main section for procduct
let productPage = document.querySelector(".shelvProduct");

// Product data to access golbally
let globalData=[];

// fetching product data
fetch("bookShelv.json")
.then((res)=>res.json())
.then((data)=>{
    globalData = data;
    renderProduct(data);
}).catch((err)=>console.log(err));

// Rendering product data
function renderProduct(data){
      let cardList=`
          <div class="cardList">
           ${data.map((item)=>productCard(item.image1,item.title,item.description1,item.price,item.rating[0],item.rating[1])).join('')}
          </div>
      `
      productPage.innerHTML=cardList;
}

// making of each cards
function productCard(image,title,des,price,rating,rCount){
    let card = `
      <div class="productCard">
              <img class="productImg" src=${image}>
              <h4>${title}</h4>
              <p>${des}</p>
              <h4>${price}</h4>
              <div><p>${rating}</p><p>${rCount}</p></div>
              <div class="addCart">🤍</div>
         </div>
    `
    return card;
}