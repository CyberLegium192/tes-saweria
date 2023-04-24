const email = document.getElementById('emailLogin');
const password = document.getElementById('password');
const validmail = document.getElementById("validmail");
const validpass = document.getElementById("validpass");


let emailValue = email.value;
let passwordValue = password.value;



function masuk(){
  if (email.value == "") {
    validmail.classList.add("active2")
    email.classList.add("activa")
  }else{
    validmail.classList.remove("active2")
    email.classList.add("activa")
  }
  if (password.value == "") {
    validpass.classList.add("active2")
    password.classList.add("activa")
  }else{
    validpass.classList.remove("active2")
    password.classList.add("activa")
  }
  if(email.value == "noval@gmail.com" && password.value == "123"){
    window.location = "index.html"
    email.classList.remove("activa")
    password.classList.remove("activa")
  }else{
    alert("password salah!")
  }
}
