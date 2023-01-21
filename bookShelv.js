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
           ${data.map((item)=>productCard(item.id,item.image1,item.title,item.description1,item.price,item.rating[0],item.rating[1])).join('')}
          </div>
      `
      productPage.innerHTML=cardList;
      let hoverImg=document.querySelectorAll(".productImg");
      hoverImg.forEach((item,i)=>{
          item.addEventListener("mouseenter",function(){
            item.setAttribute("src",data[i].image2);
            item.style.cursor="pointer"
          })
          item.addEventListener('click', (e) => {
            productClickFn(e)
        })
          
      })
      hoverImg.forEach((item,i)=>{
        item.addEventListener("mouseleave",function(){
          item.setAttribute("src",data[i].image1);
        })
    })
}

// making of each cards
function productCard(id, image,title,des,price,rating,rCount){
    let card = `
      <div  data-id=${id} class="productCard">
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
           ${data.map((item)=>productCard(item.id,item.image2,item.title,item.description1,item.price,item.rating[0],item.rating[1])).join('')}
          </div>
      `
      productPage.innerHTML=cardList;
      let hoverImg=document.querySelectorAll(".productImg");
      hoverImg.forEach((item,i)=>{
          item.addEventListener("mouseenter",function(){
            item.setAttribute("src",data[i].image1);
            item.style.cursor="pointer"
          })

          item.addEventListener('click', (e) => {
            productClickFn(e)
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

//product click
function productClickFn(e) {
    let id = e.currentTarget.dataset.id;
    localStorage.setItem('productDetailId', id);
    document.location.href = "details.html"
}