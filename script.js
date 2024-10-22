// $(window).scroll(function(){
//     if($(this).scrollTop() > 10){
//         $('.nav').addClass('sticky')
//     } else{
//         $('.nav').removeClass('sticky')
//     }
// });
let menu =document.querySelector("#menu-mobile");
let menus =document.querySelector(".menus");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    menus.classList.toggle('open');
}
window.onscroll=() =>{
    menu.classList.remove('bx-x');
    menus.classList.remove('open');
}

let Cart =document.querySelector("#Cart-menu");
let Carts =document.querySelector(".cart-item-part");
let Deletecart =document.querySelector(".cart-item")

Cart.onclick = () =>{
    Cart.classList.toggle('bx-x');
    Carts.classList.toggle('on');
}
window.onscroll= () =>{
    Cart.classList.remove('bx-x');
    Carts.classList.remove('on');
}

document.addEventListener('DOMContentloaded',loadFood);
function loadFood(){
    loadFood();
}
function loadContent()  {
    let removeBtn=document.querySelectorAll('.cart-remove');
    removeBtn.forEach((dele)=>{
        dele.addEventListener('click',removeItem);
    });
}
function removeItem(){
    this.parentElement.remove();
}