const email = document.getElementById("email");
const form = document.getElementById("form");
const formBtn = document.getElementsByClassName("news-btn");
const errorMsg = document.getElementById("error-msg");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!email.value.match(emailRegex)) {
    errorMsg.style.dsiplay = "block";
    errorMsg.innerText = "Please provide a valid email";
    errorMsg.style.fontSize = 0.8 + "rem";
    errorMsg.style.color = "Red";
    email.style.border = "2px solid red";
  }
  else {
    errorMsg.style.display = "none";
    errorMsg.innerText = "Please provide a valid email";
    errorMsg.style.fontSize = 0.8 + "rem";
    errorMsg.style.color = "Red";
    email.style.border = "0px";
  }

})