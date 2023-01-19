
   // getting main section for procduct
let productPage = document.querySelector("#showing_data");

// Product data to access golbally
let globalData=[];

// fetching product data
fetch("gaming.json")
.then((res)=>res.json())
.then((data)=>{
    globalData = data;
    renderProduct(data);
}).catch((err)=>console.log(err));

// Rendering product data
function renderProduct(data){
      let cardList=`
          <div class="cardList">
           ${data.map((item)=>productCard(item.first_image,item.tittle,item.des,item.cost,item.rating,item.review)).join('')}
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
              <h4>Rs.${price}</h4>
              <div class="rating"><p>${rating}</p><p>(${rCount})</p></div>
              <div class="addCart">🤍</div>
         </div>
    `
    return card;
}
