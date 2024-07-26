
// alert('hey! i am now a developer baby!')
// const name = prompt("what is your name?");
// alert(`hello ${name}. welcome to pentagorn`);

let headerToggle = document.querySelector(".header__toggle");
let headerNav = document.querySelector(".header_nav")

headerToggle.onclick = function (){
    headerNav.classList.toggle("header_nav--show")
    console.log(headerNav)
}
// adds class to already existing element-classlist

