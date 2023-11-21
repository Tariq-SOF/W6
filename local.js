let name1 = document.getElementById("local")
let h1 = document.getElementById("h1")
let x = localStorage.getItem("Name")

name1.textContent = x

let arr = ["Admin1"]

if (x == arr){

    h1.style.cssText = "display: flex;"



}