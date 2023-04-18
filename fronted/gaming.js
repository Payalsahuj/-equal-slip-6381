
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
           ${data.map((item)=>productCard(item.id,item.first_image,item.tittle,item.des,item.cost,item.rating,item.review)).join('')}
          </div>
      `
      productPage.innerHTML=cardList;
      let hoverImg=document.querySelectorAll(".productImg");
      hoverImg.forEach((item,i)=>{
          item.addEventListener("mouseenter",function(){
            item.setAttribute("src",data[i].hover_image);
            item.style.cursor="pointer";
            
          })
          item.addEventListener('click', (e) => {
            productClickFn(e)
        })
          
      })
      
      hoverImg.forEach((item,i)=>{
        item.addEventListener("mouseleave",function(){
          item.setAttribute("src",data[i].first_image);
        })
    })
    // hovering heart cart---------
    let hoverHeart = document.querySelectorAll(".addCart");
    hoverHeart.forEach((item)=>{
      item.addEventListener("click",function(){
        item.textContent="🖤";
      })
    })
}

//product click
function productClickFn(e) {
  let id = e.currentTarget.dataset.id;
  localStorage.setItem('productDetailId', id);
  document.location.href = "details.html"
}

// making of each cards
function productCard(id,image,title,des,price,rating,rCount){
    let card = `
      <div class="productCard">
              <img  data-id=${id} class="productImg" src=${image}>
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
           ${data.map((item)=>productCard(item.id,item.hover_image,item.tittle,item.des,item.cost,item.rating,item.review)).join('')}
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
// search functionality of web--------------------------------------------------------------------------------

function search(){
  let x = document.getElementById("searchBox").value;
  let newData = globalData.filter((item)=>{
    return item.tittle.toLowerCase().includes(x.toLowerCase());
  })
  if(newData.length!=0){
    document.querySelector("#gaming-menu").innerHTML="";
    document.querySelector("#descrip").innerHTML="";
    document.querySelector("#tittle").innerHTML="";
    document.querySelector("#gaming-menu").innerHTML=`<h1 style="margin:5px 0px">Showing results for ${x}</h1>`
    document.querySelector("#descrip").innerHTML=` <p style="font-size:18px">We found ${newData.length} products.</p>`;
    productPage.innerHTML="";
    renderProduct(newData);
  }else{
    document.querySelector("#gaming-menu").innerHTML="";
    document.querySelector("#descrip").innerHTML="";
    document.querySelector("#tittle").innerHTML="";
    document.querySelector("#descrip").innerHTML=` <p style="font-size:18px">Try again using a different spelling or keywords.</p>`;
    document.querySelector("#gaming-menu").innerHTML=`<h1 style="margin:5px 0px">There are no results for ${x}</h1>`
    productPage.innerHTML="";
  }
}

// sort by price------------------------------------------------------------------------------------------------------
function sortProd(){
  let select = document.getElementById("sort").value;
  if(select=="htl"){
    globalData.sort((a,b)=> b.cost-a.cost);
  }
  if(select=="lth"){
    globalData.sort((a,b)=> a.cost-b.cost);
  }
  if(select=="rating"){
    globalData.sort((a,b)=> b.rating.length-a.rating.length)
  }
  if(select=="name"){
    globalData.sort((a,b)=>{
      if (a.tittle>b.tittle) return 1;
      if (a.tittle<b.tittle) return -1;
      return 0;
    })
  }
  if(select=="popular"){
    globalData.sort((a,b)=> b.review-a.review);
  }
  
  productPage.innerHTML="";
  renderProduct(globalData);

}
// sorting by category--------------------------------------------------------------------------------------------------
function sortCat(){
  let select = document.getElementById("category").value;
  let newData=globalData;
  if(select=="desk"){
    newData = globalData.filter((item)=>item.category=="Gaming desk");
  }
  if(select=="chair"){
    newData = globalData.filter((item)=>item.category=="Gaming chair");
  }
  if(select=="bord"){
    newData = globalData.filter((item)=>item.category=="Pegboard")
  }
  if(select=="acc"){
    newData = globalData.filter((item)=>item.category=="Gaming Accessories")
  }
 
  productPage.innerHTML="";
  renderProduct(newData);
}
// sortin base on name --------------------------------------------------------------------------
function sortName(){
  let select = document.getElementById("size").value;
  if(select=="atz"){
    globalData.sort((a,b)=>{
      if (a.tittle<b.tittle) return -1;
      return 0;
    })
  }
  if(select=="zta"){
    globalData.sort((a,b)=>{
      if (b.tittle>a.tittle) return 1;
      if (b.tittle<a.tittle) return -1;
      return 0;
    })
  }
  productPage.innerHTML="";
  renderProduct(globalData);
}
// sorting price --------------------------------------------------------------------------------------------------
function sortPrice(){
  let select = document.getElementById("price").value;
  let newData=globalData;
  if(select=="1999"){
    newData = globalData.filter((item)=>item.cost<=1999);
  }
  if(select=="2-4"){
    newData = globalData.filter((item)=>item.cost>=2000&&item.cost<=3999);
  }
  if(select=="4-6"){
    newData = globalData.filter((item)=>item.cost>=4000&&item.cost<=5999);
  }
  if(select=="6-8"){
    newData = globalData.filter((item)=>item.cost>=6000&&item.cost<=7999);
  }
  if(select=="8"){
    newData = globalData.filter((item)=>item.cost>8000);
  }
  productPage.innerHTML="";
  renderProduct(newData);
}

