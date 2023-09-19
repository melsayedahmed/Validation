const input = document.querySelector("input");
const button = document.querySelector("button");
const errorMsgP = document.querySelector("p");

button.onclick = handleValidation;

function handleValidation() {
  if (input.value.trim().length < 1) {
    invalid("Please Enter Value For Name Input !");
    return;
  }
  if (input.value.trim().length < 10) {
    invalid("Please Enter More Than 10 Characters");
    return;
  }
  valid();
}

function invalid(msg) {
  errorMsgP.innerText = msg;
  input.classList.add("error");
}

function valid() {
  errorMsgP.innerText = "";
  input.classList.remove("error");
}
