import { fashionObj, electronicsObj, homeFurnitureObj, beautyToysObj, twoWheelerArr } from "./dataScript.js";
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


// login popup
const loginPopUp = document.querySelector('.login-popup');
const loginButton = document.getElementById('login-button');
const crossMark = document.getElementById('cross-mark');
const loginMainBox = document.querySelector('.login-main-box');
loginButton.addEventListener('click',()=>{
    loginPopUp.style.display = "flex";
})
crossMark.addEventListener('click',()=>{
    loginPopUp.style.display="none";
})
document.addEventListener('click',(e)=>{
    if(e.target.classList[0]==="login-popup"){
        loginPopUp.style.display="none";
    }
})




// Categories submenu


document.addEventListener('DOMContentLoaded', (e) => {



    const leftSubMenu = document.getElementById('left-submenu');
    let fashionCatkeys = Object.keys(fashionObj);
    fashionCatkeys.forEach((key, index) => {
        leftSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="" id=${index}>${key}<span class="cat-right-arrow"><i class="fa-solid fa-chevron-right"></i></span></a></div>`
    })



    const allitems = document.querySelectorAll(".prod-submenu-item a");
    const rightSubMenu = document.getElementById('right-submenu');
    const submenuSubCont = document.querySelector('.submenu-subcontainer');
    allitems.forEach(item => {
        fashionObj[fashionCatkeys[0]].forEach((item,index) => {
            if(index === 0){
                
                rightSubMenu.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;
            }
            else{
                
                rightSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
            }
        })
        leftSubMenu.addEventListener('mouseover', (e) => {
            if (item.id === e.target.id) {
                rightSubMenu.innerHTML = "";
                fashionObj[item.textContent].forEach((item,index) => {
                    if(index === 0){
                        rightSubMenu.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;
                    }
                    else{
                        rightSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
                    }
                })


            }
        })

        submenuSubCont.addEventListener('mouseleave', (e) => {
            rightSubMenu.innerHTML = "";
            fashionObj[fashionCatkeys[0]].forEach((item,index) => {
                if(index === 0){
                    rightSubMenu.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;

                }
                else{
                    rightSubMenu.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
                
                }
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


    electronicsObj[electronicCatKey[0]].forEach((item,index) => {
        if(index === 0){
            elRightSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;

        }else{

            elRightSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;
        }
    })

    elLeftSub.addEventListener('mouseover', (e) => {
        if (electronicCatKey[e.target.id] === e.target.textContent) {
            if (electronicsObj[electronicCatKey[e.target.id]].length === 0) {
                elRightSub.style.display = "none";
            }
            else {
                elRightSub.style.display = "block";
                let hoverCat = electronicsObj[electronicCatKey[e.target.id]]
                elRightSub.innerHTML = "";
                hoverCat.forEach((item,index) => {
                    if(index ===0 ){
                        elRightSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;

                    }
                    else{
                        elRightSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

                    }
                })
            }
        }
    })
    document.querySelector("#electronic-submenu div.submenu-subcontainer").addEventListener('mouseleave', (e) => {
        elRightSub.innerHTML = "";
        electronicsObj[electronicCatKey[0]].forEach((item,index) => {
            if(index === 0){

                elRightSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;
            }
            else{
                elRightSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

            }
        })
    })




    // home funiture category
    const homeFurnKeys = Object.keys(homeFurnitureObj);
    const leftHFurnSub = document.getElementById('left_hfurn_sub');
    homeFurnKeys.forEach((item, index) => {
        leftHFurnSub.innerHTML += `<div class="prod-submenu-item"><a href="" id=${index}>${item}<span class="cat-right-arrow"><i class="fa-solid fa-chevron-right"></i></span></a></div>`;
    })

    const rightHFurnSub = document.getElementById('right_hfurn_sub');
    homeFurnitureObj[homeFurnKeys[0]].forEach((item,index) => {
        if(index === 0){

            rightHFurnSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;
        }
        else{
            rightHFurnSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

        }
    })

    leftHFurnSub.addEventListener('mouseover', (e) => {
        if (homeFurnKeys[e.target.id] === e.target.textContent) {
            if (homeFurnitureObj[homeFurnKeys[e.target.id]].length === 0) {
                rightHFurnSub.style.display = "none";
            }
            else {

                rightHFurnSub.style.display = "block";
                let hoverCat = homeFurnitureObj[homeFurnKeys[e.target.id]]
                rightHFurnSub.innerHTML = "";
                hoverCat.forEach((item,index) => {
                    if(index === 0){
                        rightHFurnSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;

                    }
                    else{
                        rightHFurnSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

                    }
                })
            }
        }
    })
    document.querySelector("#hfurn_submenu div.submenu-subcontainer").addEventListener('mouseleave', (e) => {
        rightHFurnSub.innerHTML = "";
        homeFurnitureObj[homeFurnKeys[0]].forEach((item,index) => {
            if(index === 0){
                rightHFurnSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;

            }
            else{
                rightHFurnSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

            }
        })
    })



    // Beauty, Toy & more

    const beautyToyKeys = Object.keys(beautyToysObj);
    const leftToyBeauSub = document.getElementById('left_toybeau_sub');
    beautyToyKeys.forEach((item, index) => {
        leftToyBeauSub.innerHTML += `<div class="prod-submenu-item"><a href="" id=${index}>${item}<span class="cat-right-arrow"><i class="fa-solid fa-chevron-right"></i></span></a></div>`;
    })

    const rightToyBeauSub = document.getElementById('right_toybeau_sub');
    beautyToysObj[beautyToyKeys[0]].forEach((item,index) => {
        if(index === 0){
            rightToyBeauSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;

        }
        else{
            rightToyBeauSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

        }
    })

    leftToyBeauSub.addEventListener('mouseover', (e) => {
        if (beautyToyKeys[e.target.id] === e.target.textContent) {
            if (beautyToysObj[beautyToyKeys[e.target.id]].length === 0) {
                rightToyBeauSub.style.display = "none";
            }
            else {

                rightToyBeauSub.style.display = "block";
                let hoverCat = beautyToysObj[beautyToyKeys[e.target.id]]
                rightToyBeauSub.innerHTML = "";
                hoverCat.forEach((item,index) => {
                    if(index === 0){
                        rightToyBeauSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;

                    }
                    else{
                        rightToyBeauSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

                    }
                })
            }
        }
    })
    document.querySelector("#toybeauty_submenu div.submenu-subcontainer").addEventListener('mouseleave', (e) => {
        rightToyBeauSub.innerHTML = "";
        beautyToysObj[beautyToyKeys[0]].forEach((item,index) => {
            if(index === 0){

                rightToyBeauSub.innerHTML += `<div class="prod-submenu-item"><p>${item}</p></div>`;
            }
            else{
                rightToyBeauSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

            }
        })
    })


    // Tow wheelers

    const rightTwoWheelerSub = document.getElementById('right_twowheeler_sub');
    twoWheelerArr.forEach(item => {
        rightTwoWheelerSub.innerHTML += `<div class="prod-submenu-item"><a href="">${item}</a></div>`;

    })




    // hover effect of subcategory item
    const hoverItem = document.querySelectorAll(".right-container .prod-submenu-item");
    const hoverArrow = document.querySelector('.cat-right-arrow');
    hoverItem.forEach(item=>{
        item.addEventListener('mouseenter',(e)=>{

            if(document.querySelector('a.activeElement') !== null){
                document.querySelector("a.activeElement span").style.display="none";
                document.querySelector("a.activeElement").classList.remove("activeElement");
            }
            item.childNodes[0].classList.add("activeElement");
            item.childNodes[0].querySelector('.activeElement span').style.display="block";
        })
    })


    
    
})


