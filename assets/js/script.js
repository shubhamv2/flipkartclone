import { fashionObj, electronicsObj } from "./dataScript.js";
// Search bar
const searchElement = document.getElementById('search');
const prevSearchContainer = document.querySelector('.prev-search-container');
const form = document.getle
searchElement.addEventListener('focus', () => {
    prevSearchContainer.style.display = "block";
})

document.addEventListener('click', (e) => {
    if (e.target.id !== searchElement.id || e.target.class !== prevSearchContainer.class) {
        prevSearchContainer.style.display = "none"
    }
})


const searchForm = document.getElementById('searchform');
let prevSearches = document.querySelector('.prev-searches');
let searchArray = ["mobile", "laptop", "watch"];
searchArray.forEach(item => {
    prevSearches.innerHTML += `<p><span class="search-container-icons"><i class="fa-solid fa-clock-rotate-left"></i></span>${item}</p>`
})

searchForm.addEventListener('submit', (e) => {
    if (searchElement.value === "") {
        prevSearchContainer.style.display = "block";
        e.preventDefault();
    }
    else {
        searchArray.push(searchElement.value);
        prevSearches.innerHTML += `<p><span class="search-container-icons"><i class="fa-solid fa-clock-rotate-left"></i></span>${searchElement.value}</p>`
        searchElement.value = "";
        e.preventDefault();
    }
})




// Categories submenu


const leftSubMenu = document.getElementById('left-submenu');
let fashionCatkeys = Object.keys(fashionObj);
fashionCatkeys.forEach((key, index) => {
    leftSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="" id=${index}>${key}<span class="cat-right-arrow"><i class="fa-solid fa-chevron-right"></i></span></a></div>`
})



const allitems = document.querySelectorAll(".prod-submenu-item a");
const rightSubMenu = document.getElementById('right-submenu');
const submenuSubCont = document.querySelector('.submenu-subcontainer');
allitems.forEach(item => {
    fashionObj[fashionCatkeys[0]].forEach(item => {
        rightSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
    })
    leftSubMenu.addEventListener('mouseover', (e) => {
        if (item.id === e.target.id) {
            rightSubMenu.innerHTML = "";
            fashionObj[item.textContent].forEach(item => {
                rightSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
            })


        }
    })
 
    submenuSubCont.addEventListener('mouseleave', (e) => {
        rightSubMenu.innerHTML = "";
        fashionObj[fashionCatkeys[0]].forEach(item => {
            rightSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
        })
       
    })
    
})


// Electronic submenu
const electItem = document.getElementById('prod_el_item');
const elLeftSub = document.getElementById('el_left_sub');
const elRightSub = document.getElementById('el_right_sub');
const electronicCatKey = Object.keys(electronicsObj)
electronicCatKey.forEach((item, index) => {
    elLeftSub.innerHTML += `<div class="prod-submenu-item"><a href="" id=${index}>${item}<span class="cat-right-arrow"><i class="fa-solid fa-chevron-right"></i></span></a></div>`;
})


electronicsObj[electronicCatKey[0]].forEach(item=>{
    elRightSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
})

elLeftSub.addEventListener('mouseover', (e) => {
    if(electronicCatKey[e.target.id] === e.target.textContent){
        if(electronicsObj[electronicCatKey[e.target.id]].length===0){
            elRightSub.style.display="none";
        }
        else{
            
            elRightSub.style.display="block";
            let hoverCat = electronicsObj[electronicCatKey[e.target.id]]
            elRightSub.innerHTML = "";
            hoverCat.forEach(item=>{
                elRightSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
            })
        }
    }
})
document.querySelector("#electronic-submenu div.submenu-subcontainer").addEventListener('mouseleave',(e)=>{
    elRightSub.innerHTML = "";
    electronicsObj[electronicCatKey[0]].forEach(item=>{
        elRightSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
    })  
})



