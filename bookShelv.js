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
      let hoverImg=document.querySelectorAll(".productImg");
      hoverImg.forEach((item,i)=>{
          item.addEventListener("mouseenter",function(){
            item.setAttribute("src",data[i].image2);
            item.style.cursor="pointer"
          })
          
      })
      hoverImg.forEach((item,i)=>{
        item.addEventListener("mouseleave",function(){
          item.setAttribute("src",data[i].image1);
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
           ${data.map((item)=>productCard(item.image2,item.title,item.description1,item.price,item.rating[0],item.rating[1])).join('')}
          </div>
      `
      productPage.innerHTML=cardList;
      let hoverImg=document.querySelectorAll(".productImg");
      hoverImg.forEach((item,i)=>{
          item.addEventListener("mouseenter",function(){
            item.setAttribute("src",data[i].image1);
            item.style.cursor="pointer"
          })
          
      })
      hoverImg.forEach((item,i)=>{
        item.addEventListener("mouseleave",function(){
          item.setAttribute("src",data[i].image2);
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
    return item.title.toLowerCase().includes(x.toLowerCase());
  })
  if(newData.length!=0){
    document.querySelector(".top").innerHTML="";
    document.querySelector(".top").innerHTML=`<h1 style="margin:5px 0px">Showing results for ${x}</h1> <p style="font-size:18px">We found ${newData.length} products.</p>`
    productPage.innerHTML="";
    renderProduct(newData);
  }else{
    document.querySelector(".top").innerHTML="";
    document.querySelector(".top").innerHTML=`<h1 style="margin:5px 0px">There are no results for ${x}</h1> <p style="font-size:18px">Try again using a different spelling or keywords.</p>`
    productPage.innerHTML="";
  }
}
// sort by price------------------------------------------------------------------------------------------------------
function sortProd(){
  let select = document.getElementById("sort").value;
  if(select=="htl"){
    globalData.sort((a,b)=> b.price-a.price);
  }
  if(select=="lth"){
    globalData.sort((a,b)=> a.price-b.price);
  }
  if(select=="rating"){
    globalData.sort((a,b)=> b.rating[0].length-a.rating[0].length)
  }
  if(select=="name"){
    globalData.sort((a,b)=>{
      if (a.title>b.title) return 1;
      if (a.title<b.title) return -1;
      return 0;
    })
  }
  if(select=="popular"){
    globalData.sort((a,b)=> b.rating[1]-a.rating[1]);
  }
  if(select=="width"){
    globalData.sort((a,b)=> b.Width-a.Width);
  }
  if(select=="height"){
    globalData.sort((a,b)=> b.Height-a.Height);
  }
  if(select=="depth"){
    globalData.sort((a,b)=> b.Depth-a.Depth);
  }
  
  productPage.innerHTML="";
  renderProduct(globalData);

}
// sorting by category--------------------------------------------------------------------------------------------------
function sortCat(){
  let select = document.getElementById("category").value;
  let newData=globalData;
  if(select=="book"){
    newData = globalData.filter((item)=>item.category=="bookcase");
  }
  if(select=="shelv"){
    newData = globalData.filter((item)=>item.category=="shelf unit");
  }
  if(select=="pantry"){
    newData = globalData.filter((item)=>item.category=="pantry")
  }
  if(select=="wallShelve"){
    newData = globalData.filter((item)=>item.category=="wall shelf")
  }
 
  productPage.innerHTML="";
  renderProduct(newData);
}
// sort size ---------------------------------------------------------------------------------------------------
function sortSize(){
  let select = document.getElementById("size").value;
  let newData=globalData;
  if(select=="0-50"){
    newData = globalData.filter((item)=>item.Width<=50);
  }
  if(select=="51-80"){
    newData = globalData.filter((item)=>item.Width>=51&&item.Width<=80);
  }
  if(select=="80"){
    newData = globalData.filter((item)=>item.Width>80);
  }
  if(select=="1-50"){
    newData = globalData.filter((item)=>item.Height<=50);
  }
  if(select=="50-100"){
    newData = globalData.filter((item)=>item.Height>50&&item.Height<=100);
  }
  if(select=="100"){
    newData = globalData.filter((item)=>item.Height>100);
  }
  if(select=="0-30"){
    newData = globalData.filter((item)=>item.Depth<=30);
  }
  if(select=="30"){
    newData = globalData.filter((item)=>item.Depth>30);
  }
 
  productPage.innerHTML="";
  renderProduct(newData);
 
}
// sorting price --------------------------------------------------------------------------------------------------
function sortPrice(){
  let select = document.getElementById("price").value;
  let newData=globalData;
  if(select=="1999"){
    newData = globalData.filter((item)=>item.price<=1999);
  }
  if(select=="2-4"){
    newData = globalData.filter((item)=>item.price>=2000&&item.price<=3999);
  }
  if(select=="4-6"){
    newData = globalData.filter((item)=>item.price>=4000&&item.price<=5999);
  }
  if(select=="6-8"){
    newData = globalData.filter((item)=>item.price>=6000&&item.price<=7999);
  }
  if(select=="8"){
    newData = globalData.filter((item)=>item.price>8000);
  }
  productPage.innerHTML="";
  renderProduct(newData);
}
