const loginBtn = document.getElementById('login');
const loginPage = document.querySelector(".login-page");
const close = document.querySelector(".bxs-x-circle");



function login(){
  console.log("cliked")
  loginPage.classList.add("active")
}
close.addEventListener("click", () => {
  loginPage.classList.remove("active")
})


const nominal = document.getElementById('nominal')
function sepuluh(){
  nominal.setAttribute("value", "10.000")
}
function limapuluh(){
  nominal.setAttribute("value", "50.000")
}
function seratus(){
  nominal.setAttribute("value", "100.000")
}
function tigaratus(){
  nominal.setAttribute("value", "300.000")
}