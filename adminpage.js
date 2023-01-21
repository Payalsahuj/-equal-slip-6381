let dashboard = document.getElementById("Dashboard");
let product = document.getElementById("Product");
let profile = document.getElementById("profile");
let order = document.getElementById("order");
let create = document.getElementById("create");
let mainsection = document.getElementById("mainsection");
let noofproduct=document.getElementById("noofproduct")

fetch("https://636e04e8182793016f33bec0.mockapi.io/admin").then((res) => {
       return res.json()
   }).then((data) => {
       
       let i=data[0].bookselves.length+data[0].gaming.length;
       
       noofproduct.innerText=i;
   })
   .catch((err) => {
       console.log(err)
   })



let baseserverurl=`https://636e04e8182793016f33bec0.mockapi.io/admin`
dashboard.addEventListener("click", () => {
    mainsection.innerHTML = null;
    mainsection.innerHTML = `
    <h2>Dashboard</h2>
            <div id="dash">
                <!-- No of product -->
                <div style="background-color: orange;  display: flex; padding: 20px; align-items: center;"><h3 style="font-size: 35px; color: rgb(128, 130, 132);">Number of Products <span id="noofproduct"></span> </h3><img src="./image/icons8-open-box-50.png" style="width: 150px; height: 115px;" alt=""></div>
                <!-- variety -->
                <div style="background-color: rgb(25, 192, 25);  display: flex; padding: 20px; align-items: center;"><h3 style="font-size: 35px; color: rgb(128, 130, 132);">Total Product 2</h3><img style="width: 150px; height: 115px;" src="./image/icons8-product-50.png" alt=""></div>
                <!-- Best sellers  -->
                <div style="background-color: rgb(192, 97, 25);  display: flex; padding: 20px; align-items: center;"><h3 style="font-size: 35px; color: rgb(128, 130, 132);">Best Sellers</h3><img style="width: 150px; height: 115px;" src="./image/icons8-product-50.png" alt=""></div>
                <!--  -->
            </div>
            <img style="display: block; width: 90%; margin-top: 30px;" src="./image/Slide72.jpeg" alt="">
    `
    
})

product.addEventListener("click", () => {
    
    mainsection.innerHTML = `
    <h2>Products</h2>
    <h3>BookSelves product</h3>
            <div id="tablediv">
                <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody id="tbodyone">
                    <!-- append here -->
                    
                </tbody>
            </table>
            </div>

            <h3 style="color:black; margin-top:30px; font-size:20px;">Gaming product</h3>
            <div id="tablediv">
                <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody id="tbodytwo">
                    <!-- append here -->
                   
                </tbody>
            </table>
            `;
   
    fetch("https://636e04e8182793016f33bec0.mockapi.io/admin").then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data[0].bookselves)
        createforbook(data[0].bookselves)
        createforgame(data[0].gaming)
        let i=data[0].bookselves.length+data[0].gaming.length;
        // console.log(i)
        

    })
        .catch((err) => {
            console.log(err)
        })



        
let tbodyone = document.getElementById("tbodyone")
function createforbook(databook) {
    tbodyone.innerHTML= `
    ${databook.map((item) => getcard(item.title,item.description,item.price,item.rating,item.image) ).join("")}
    `

}



function getcard(title,desc,price,rating,img) {
    
    let card = `
    <tr>
     <td>${title}</td>
     <td>${desc}</td>
     <td>${price}</td>
     <td>${rating}</td>
     <td>In Stock</td>
     <td><img id="imageofth" src=${img} alt=""></td>
    </tr>
    `
    return card;
}

let tbodytwo = document.getElementById("tbodytwo")
function createforgame(datagame) {
    
    tbodytwo.innerHTML= `
    ${datagame.map((item) => getcardtwo(item.tittle,item.des,item.cost,item.rating,item.first_image) ).join("")}
    `

}

function getcardtwo(title,desc,price,rating,img){
    
    let cardtwo = `
    <tr>
     <td>${title}</td>
     <td>${desc}</td>
     <td>${price}</td>
     <td>${rating}</td>
     <td>In Stock</td>
     <td><img id="imageofth" src=${img} alt=""></td>
    </tr>
    `
    return cardtwo; 
}


})



profile.addEventListener("click",()=>{
    mainsection.innerHTML = null;
    fetch("https://63c6cd48d307b76967416f44.mockapi.io/admindata").then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        createprofile(data)
    })

    function createprofile(data){
        mainsection.innerHTML =`
    <h1 id="profilehead">Profile details</h1>
    <div id="mainofprofile">
      ${data.map((item) => getcardthree(item.image,item.firstname,item.surname,item.mobile,item.email) ).join("")}  
    </div>
    ` 
    }
    
    function getcardthree(image,fname,lname,mob,email){
        let cardthree=`
        <div id="carddiv">
                <div id="proimgdiv"><img id="profileimg" src=${image} alt=""></div>
                <div>
                    <h3>Full Stack Web Developer</h3>
                    <p id="name">Name:- ${fname} ${lname}</p>
                    <p id="mobile">Mob:- ${mob}</p>
                    <p id="email">E.mail:- ${email}</p>

                </div>
            </div>
        `
        return cardthree;
    }

   
})


