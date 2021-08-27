//menu
const menuBtn = document.querySelector(".menu__btn");
const menuSidebar = document.querySelector(".menu__sidebar");
const menuClose = document.querySelector(".menu__close");

menuBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    menuSidebar.style.left="0";
})
menuClose.addEventListener("click",(e)=>{
    e.stopPropagation();
    menuSidebar.style.left="-30rem";
})
menuSidebar.addEventListener("click",(e)=>{
    e.stopPropagation();
})
document.addEventListener("click",(e)=>{
    e.stopPropagation();
    menuSidebar.style.left="-30rem";
})

//address
const inputSign=document.querySelector(".selection__dropdown-sign");
const dropdown = document.querySelector(".selection__dropdown");
const options =document.querySelectorAll(".selection__link");
const input = document.querySelector(".selection__input");
inputSign.addEventListener("click",(e)=>{
    dropdown.classList.toggle("d-none");
});

options.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        input.value = elem.textContent;
        dropdown.classList.add("d-none");
    })
})


//addition
const plus=document.querySelector(".plus");
const minus=document.querySelector(".minus");
const countBox = document.querySelector(".order__count");
let count = document.querySelector(".order__count").innerText;
plus.addEventListener("click",(e)=>{
    countBox.innerText=count++;
});
minus.addEventListener("click",(e)=>{
    if(count>0){
        countBox.innerText=count--;
    }
});
