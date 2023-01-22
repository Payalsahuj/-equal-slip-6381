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

create.addEventListener("click",()=>{
    mainsection.innerHTML = null;
    mainsection.innerHTML = `
    <div class="secondfirst">Admin Create Profile</div>
            <div class="secondmid">
            <div class="left"></div>
            <div class="mid">
                 <form action="" id="form">
                <div class="user-box">
                    <input type="text" name="Firstname" id="firstname" placeholder="Firstname"><br>
                    <span id="firstname_err"></span>
                    
                    <!-- <label for="">Firstname</label> -->
                </div>
                <div class="user-box">
                    <input type="text" name="Surname" id="surname" placeholder="Surname">
                    <!-- <label for="">Surname</label> -->
                    <br>
                    <span id="surname_err"></span>
                </div>
                <div class="user-box">
                    <input type="number" name="" id="mobile" placeholder="Mobile">
                    <!-- <label for="">Mobile</label> -->
                    <br>
                    <span id="mobile_err"></span>
                </div>
                <div class="user-box">
                    <input type="date"  name="" id="birthdate" >
                    <!-- <label for="">Birthdate</label> -->
                    <br>
                    <span id="birth_err"></span>
                </div>
                <div class="user-box">
                   
                    <select name="" id="gender">
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">other</option>
                    </select>
                    <br>
                    <span id="gender_err"></span>
                    <!-- <label for="">Gender</label> -->
                </div>
                <div class="user-box">
                    <input type="text" name="" id="image" placeholder="Image">
                    <!-- <label for="">Post Code</label> -->
                    <br>
                    <span id="post_err"></span>
                </div>
               
                <div class="user-box">
                    <input type="text" name="" id="email" placeholder="Email(username)">
                    <!-- <label for="">Email(username)</label> -->
                    <br>
                    <span id="email_err">.</span>
                </div>
                <div class="user-box">
                    <input type="password" name="" id="password" placeholder="Password">
                    <!-- <label for="">Password</label> -->
                    <br>
                    <span id="pass_err"></span>
                </div>

                <div >
                 <input type="checkbox" name="" id="c0" class="check"><label class="checklbl"for="">I would like to receive news, tips and marketing offers from L.DECOR.</label><br>
                    <div class="check-section">
                        <div class="checkbox_p1"></div>
                        <div class="checkbox_p">
                     <input type="checkbox" name="" id="c1" class="check"><label class="checklbl"for="">Via email</label><br>
                    <input type="checkbox" name="" id="c2"  class="check"><label class="checklbl" for="">Via SMS</label><br>
                    <input type="checkbox" name="" id="c3" class="check"><label class="checklbl" for="">Via direct mail </label>
                        </div>
                        
                    </div>
                   
                   
                    <span id="checked_err"></span>
                </div>
                <input type="checkbox" name="" id="maincbox" class="check"><label class="checklbl" for="">I have read and understood the Terms & Conditions and Privacy Policy.</label>
                <span id="main_err"></span>
                <br>
                <input class="submit" type="submit" value="Create Profile">
            </form>
            </div>
            <div class="left"></div>

            </div>
           `;






           let form=document.getElementById("form")
           let firstname=document.getElementById("firstname");
           let surname=document.getElementById("surname");
           let mobile=document.getElementById("mobile");
           let birthdate=document.getElementById("birthdate");
           let gender=document.getElementById("gender");
           let image=document.getElementById("image");
        
           let email=document.getElementById("email");
           let password=document.getElementById("password");
       
          
           let first_err=document.getElementById("firstname_err");
           let surname_err=document.getElementById("surname_err");
           let mobile_err=document.getElementById("mobile_err");
           let birth_err=document.getElementById("birth_err");
           let gender_err=document.getElementById("gender_err");
           let post_err=document.getElementById("post_err");
       
           let email_err=document.getElementById("email_err");
           let pass_err=document.getElementById("pass_err");
         
           let c0=document.getElementById("c0");
           let c1=document.getElementById("c1");
           let c2=document.getElementById("c2");
           let c3=document.getElementById("c3");
           let cerr=document.getElementById("checked_err");
           let merr=document.getElementById("main_err");
           let maincheck=document.getElementById("maincbox")
       
           form.addEventListener("submit",(e)=>{
               e.preventDefault();
               let data={
                   firstname:form.firstname.value,
                   surname:form.surname.value,
                   mobile:form.mobile.value,
                   birthdate:form.birthdate.value,
                   gender:form.gender.value,
                   image:form.image.value,
                 
                   email:form.email.value,
                   password:form.password.value
               }
               // fetchdata(data)
               if(data.firstname!==""&&data.surname!==""&&data.mobile!==""&&
               data.birthdate!==""&&data.gender!==""&&data.image!==""&&
               data.email!==""&&data.password!==""&&
               c0.checked==true&&maincheck.checked==true&&data.password.length>=8&&
               data.password.length>=6&&data.mobile.length>=10){
                    first_err.innerHTML=null;
                    surname_err.innerHTML=null;
                    mobile_err.innerHTML=null;
                    birth_err.innerHTML=null;
                    gender_err.innerHTML=null;
                    post_err.innerHTML=null;
                   
                    email_err.innerHTML=null;
                    pass_err.innerHTML=null;
                    firstname.style.borderBottomColor=null;
                    merr.innerHTML=null;
                    cerr.innerHTML=null
                    fetchdata(data)
                    alert("Your profile is created Succesfully")
                    console.log("ok")
       
               }else{
                   data.firstname==""?first_err.innerHTML="*Your first name is required.":first_err.innerHTML=null;
                   data.surname==""?surname_err.innerHTML="*Your Surname is required.":surname_err.innerHTML=null;
                   data.mobile==""?mobile_err.innerHTML="*Your Mobile is required.":mobile_err.innerHTML=null;
                   data.mobile.length<10?mobile_err.innerHTML="*Mobile  should be 10 digits":mobile_err.innerHTML=null;
                   data.birthdate==""?birth_err.innerHTML="*Your Birthdate is required.":birth_err.innerHTML=null;
                   data.gender==""?gender_err.innerHTML="*Your Gender is required.":gender_err.innerHTML=null;
                   data.image==""?post_err.innerHTML="*Your image is required.":post_err.innerHTML=null;
                  
                   data.email==""?email_err.innerHTML="*Your Email is required.":email_err.innerHTML=null;
                  
                   data.password==""?pass_err.innerHTML="*Your Password is required.":pass_err.innerHTML=null;
                   data.password.length<6?pass_err.innerHTML="*Password length should be greater than or equal to 6 required.":pass_err.innerHTML=null;
                    c0.checked==false?cerr.innerHTML="*At least one checked required":cerr.innerHTML=null;
                    maincheck.checked==false?merr.innerHTML="*You must have read and accepted the Terms & Conditions and Privacy Policy":merr.innerHTML=null;
               }
               
           })
       
       
           function fetchdata(data){
               fetch('https://63c6cd48d307b76967416f44.mockapi.io/admindata',{
                   method:"POST",
                   headers:{'Content-type':'application/json'},
                   body:JSON.stringify(data)
               })
               .then((res)=>res.json())
               .then((data)=>{
                   console.log(data) 
                  
                   location.href="./adminpage.html"
               })
           }
       
       
          
           c0.addEventListener("click",()=>{
               if(c0.checked==true){
                   c0.checked=true;
                   c1.checked=true;
                   c2.checked=true;
                   c3.checked=true;
               }else if(c0.checked==false){
                   c1.checked=false;
                   c2.checked=false;
                   c3.checked=false;
               }
               
           })
       
           c1.addEventListener("click",()=>{
               if(c1.checked==true){
                   c0.checked=true; 
               }  
           })
           c2.addEventListener("click",()=>{
               if(c2.checked==true){
                   c0.checked=true; 
               }  
           })
           c3.addEventListener("click",()=>{
               if(c3.checked==true){
                   c0.checked=true; 
               }  
           })
          
       
})



