
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
      let hoverImg=document.querySelectorAll(".productImg");
      hoverImg.forEach((item,i)=>{
          item.addEventListener("mouseenter",function(){
            item.setAttribute("src",data[i].hover_image);
            item.style.cursor="pointer";
          })
      })
      hoverImg.forEach((item,i)=>{
        item.addEventListener("mouseleave",function(){
          item.setAttribute("src",data[i].first_image);
        })
    })
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

// hovering image on product display page for button room and---------------------------------------------------------------------
let RoomBtn = document.getElementById("roomFilter");
RoomBtn.addEventListener("click",function(){
    renderRoom(globalData);
    ProBtn.style.border="1px solid";
    RoomBtn.style.border="2px solid"
})
function renderRoom(data){
      let cardList=`
          <div class="cardList">
           ${data.map((item)=>productCard(item.hover_image,item.tittle,item.des,item.cost,item.rating,item.review)).join('')}
          </div>
      `
      productPage.innerHTML=cardList;
      let hoverImg=document.querySelectorAll(".productImg");
      hoverImg.forEach((item,i)=>{
          item.addEventListener("mouseenter",function(){
            item.setAttribute("src",data[i].first_image);
            item.style.cursor="pointer"
          })
          
      })
      hoverImg.forEach((item,i)=>{
        item.addEventListener("mouseleave",function(){
          item.setAttribute("src",data[i].hover_image);
        })
    })
}

// hovering image on product display page for button product ----------------------------------------------------------
let ProBtn = document.getElementById("productFilter");
ProBtn.addEventListener("click",function(){
   
    renderProduct(globalData);
    ProBtn.style.border="2px solid";
    RoomBtn.style.border="1px solid"
})