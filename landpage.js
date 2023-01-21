
let sidebarmenu = document.getElementById("sidebarmenu")
let menunavimg = document.getElementById("menunavimg");
let sidebarmenuproduct = document.getElementById("sidebarmenuproduct")
let menucarddetails = document.getElementById("menucarddetails")
menunavimg.addEventListener("click", () => {
    sidebarmenu.style.display = "block";

})
let cut = document.getElementById("cut");
cut.addEventListener("click", () => {
    sidebarmenu.style.display = "none";

})
let product = document.getElementById("product");
product.addEventListener("click", () => {
    sidebarmenuproduct.style.display = "block"
})
let cut2 = document.getElementById("cut2")
cut2.addEventListener("click", () => {
    sidebarmenuproduct.style.display = "none";
    sidebarcarddetails.style.display = "none";
})

let cut3 = document.getElementById("cut3")
cut3.addEventListener("click", () => {
    sidebarcarddetails.style.display = "none";

})

let stor = document.getElementById("stor");
let furniture = document.getElementById("furniture");
let home = document.getElementById("home")
let decoration = document.getElementById("decoration")
let lighting = document.getElementById("lighting")
let kitchen = document.getElementById("kitchen")
let smart = document.getElementById("smart")
let beds = document.getElementById("beds")
let baby = document.getElementById("baby")
let bathroom = document.getElementById("bathroom")
let outdoor = document.getElementById("outdoor")
let working = document.getElementById("working")



let sidebarcarddetails = document.getElementById("sidebarcarddetails")
function store(val0 = "",url="", val1 = "", val2 = "", val3 = "", val4 = "", val5 = "", val6 = "", val7 = "", val8 = "", val9 = "", val10 = "", val11 = "", val12 = "", val13 = "", val14 = "") {
    return {
        "value0": val0,
        "url": url,
        "value1": val1,
        "value2": val2,
        "value3": val3,
        "value4": val4,
        "value5": val5,
        "value6": val6,
        "value7": val7,
        "value8": val8,
        "value9": val9,
        "value10": val10,
        "value11": val11,
        "value12": val12,
        "value13": val13,
        "value14": val14
    }
}


stor.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Storage & Organisation","shelvBook.html", "Bookcases & shelving units", "Storage solution systems", "Cabinets & cupboards", "TV & media furniture", "Chest of drawers & drawer units", "Wardrobes", "Small storage & organisers", "Sideboards, buffets & console tables", "Hooks & wall organisation", "Cloths stands & shoe racks", "Trolleys", "Bags", "Moving supplies", "Wall shelves");
    createlist(storeobj)

})
furniture.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Furniture","gaming.html", "Gaming furniture", "Sofas & sofa-beds", "Furnitures sets", "Beds", "Bookcases & shelving units", "Tables", "Cabinets & cupboards", "TV &media furniture", "Chest of drawers & drawer units", "Wardrobes", "Chairs", "Outdoor furniture", "Sideboards, buffets & console tables", "Children's furniture");
    createlist(storeobj)
})

home.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Home Textiles","#", "Bedding", "Curtains & blinds", "Cushions & cushion covers", "Children's textiles", "Outdoor cushions", "Blankets & throws", "Table linen", "Bath textiles", "Fabrics & sewing", "Kitchen testiles", "Baby textiles", "Fabrics & sewing", "Kitchen testiles", "Baby textiles", "Clothing & accessories", "Chair pads", "Riugs");
    createlist(storeobj)
})
decoration.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Decoration","#", "Frames & pictures", "Plants & flowers", "Storage boxes & baskets", "Flower pots & planters", "Mirrors", "Candle holders & candles", "Vases & bowls", "Vases & bowls", "Noticeboards", "Decorative accessories", "Paper shop", "Clocks", "Home fragrance", "Holiday decoration");
    createlist(storeobj)

})
lighting.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Lighting","#", "Lamps", "Decorative lighting", "Integrated lighting", "Smart lighting", "Outdoor lighting", "Bathroom lighting", "LED bulbs");
    createlist(storeobj)
})

kitchen.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Kitchen & appliances","#", "Kitchen doors & drawer fronts", "Kitchen cabinets", "kitchens", "METOD interior fitting", "Pantry", "Wall storage", "Kitchen worktops", "Kitchen appliances", "Kitchen islands & trolley", "Knobs & handles", "Knobs lighting", "METOD Kitchen taps & sinks", "Splashbacks & wall panels", "Units kitchens");
    createlist(storeobj)
})

smart.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Smart Home","#", "Smart air purifiers & filters", "Smart lighting", "Smart systems & controls", "Wi-Fi speakers");
    createlist(storeobj)

})
beds.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Beds & mattresses","#", "Beds", "Bedding", "Mattresses", "Bedside tables", "Under bed storage", "Bed slats");
    createlist(storeobj)
})

baby.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Baby & children","#", "Children", "Baby");
    createlist(storeobj)
})
bathroom.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Bathroom products","#", "Bathroom vanities", "Bathroom storage", "Bathroom mirrors", "Bathroom accessories", "Bathroom laundry", "Bath textiles", "Bathroom lighting", "Bathroom furnitures sets", "Bathroom stools & benches", "Bathroom sinks", "Showers", "Bathroom taps", "Spa accessories");
    createlist(storeobj)

})
outdoor.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Outdoor products","#", "Outdoor furniture", "Outdoor organising", "Parasols & gazebos", "Outddoor kitchen & accessories", "Outdoor pots & plants", "Outdoor accessories", "Outdoor lighting", "Outdoor rugs", "Outdoor flooring");
    createlist(storeobj)
})

working.addEventListener("click", () => {
    sidebarcarddetails.style.display = "block";
    let storeobj = store("Working from home","#", "Desks chairs", "Desks & computer desks", "Desks & chair sets", "Multifunctional tables", "Drawer units", "Storage units & cabinets", "Room dividers", "Desk dividers", "Work & study lamps", "Cables & charges", "Paper 7 media organisers");
    createlist(storeobj)
})

function createlist(storeobj) {
    
    menucarddetails.innerHTML = "null";
    let storedata = `
        <li id="buttonname"><h2>${storeobj.value0}</h2></li>
            <li><h3>Shop all</h3></li>
            <li><a href=${storeobj.url}>${storeobj.value1}</a></li>
            <li><a href="">${storeobj.value2}</a></li>
            <li><a href="">${storeobj.value3}</a></li>
            <li><a href="">${storeobj.value4}</a></li>
            <li><a href="">${storeobj.value5}</a></li>
            <li><a href="">${storeobj.value6}</a></li>
            <li><a href="">${storeobj.value7}</a></li>
            <li><a href="">${storeobj.value8}</a></li>
            <li><a href="">${storeobj.value9}</a></li>
            <li><a href="">${storeobj.value10}</a></li>
            <li><a href="">${storeobj.value11}</a></li>
            <li><a href="">${storeobj.value12}</a></li>
            <li><a href="">${storeobj.value13}</a></li>
            <li><a href="">${storeobj.value14}</a></li>
        `
    menucarddetails.innerHTML = storedata;

}
let leftslidermenu = document.getElementById("leftslidermenu");


let secondbox = document.getElementById("secondbox");
secondbox.addEventListener("click", () => {
    leftslidermenu.style.display = "block";
})


let cut4 = document.getElementById("cut4")
cut4.addEventListener("click", () => {

    leftslidermenu.style.display = "none";
})



let imgdetail = document.getElementById("imgdetail");
let showmorebtn = document.getElementById("showmorebtn");
function renderfetch(){
    fetch("landpage.json")
    .then((res) => res.json())
    .then((data) => {
        renderProduct(data);
    }).catch((err) => console.log(err));

}

renderfetch()

function renderProduct(data) {
    
    let list = `
    ${data.map(item => getcard(item.id, item.image)).join("")}
    `
    imgdetail.innerHTML = list;

    showmorebtn.addEventListener("click",()=>{
    imgdetail.innerHTML=null;
    let list2 = `
    ${data.map(item => createall(item.id, item.image)).join("")}
    `  
    imgdetail.innerHTML = list2;
    })
}

function getcard(id, img) {
    
   if(id<=6){
        let card = `
    <div id="imagediv"> 
    <img src=${img} />
    </div>
    `
        return card
   }
 
}
function createall(id,img){
    let card = `
    <div id="imagediv"> 
    <img src=${img} />
    </div>
    `
        return card

}

// ------------------------login & logout------------------------------------------
let userid=JSON.parse(localStorage.getItem("userdata"))||[]
let logofnav=document.getElementById("log");
let loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener("click", () => {
    if(loginbtn.innerText=="Log in"){
  location.href="./login.html";
    }
})

if(userid.firstname==undefined && userid.surname==undefined){
    logofnav.innerText="Hej! Log in or sign up"
    loginbtn.innerText="Log in"

}
else{
    logofnav.innerText=`Hej! ${userid.firstname} ${userid.surname}`
    loginbtn.innerText="Sign out"
}



    loginbtn.addEventListener("click", () => {
        if( loginbtn.innerText=="Sign out"){
        localStorage.removeItem("userdata")
        loginbtn.innerText="Log in";
        logofnav.innerText="Hej! Log in or sign up"
        alert("Sign out succesfully")
        window.location.reload()
        }
      })






