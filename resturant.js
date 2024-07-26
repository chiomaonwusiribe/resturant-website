// const tween = KUTE.fromTo(
//     '#blob1',
//     {path:'#blob1'},
//     {repeat:999, duration:3000, yoyo:true}
// )
// tween.start()

let lightBtn = document.querySelector(".light")
let darkBtn = document.querySelector(".dark")
let htmlBodyTag = document.querySelector("body")
let paragraphColor = document.querySelectorAll("p")

lightBtn.onclick = function(){
    htmlBodyTag.style.background = "#f9fafc"
}
darkBtn.onclick = function(){
    htmlBodyTag.style.background = "#12343b"
    paragraphColor.style.color ="#fff"
}