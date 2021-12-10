let visibleForm = document.querySelector(".login");
let loginForm = document.querySelector(".login-form");
let closeForm = document.querySelector(".btn-close");

visibleForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginForm.classList.add("visible");
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginForm.classList.remove("visible");
});

// let test;
// test = "hello";

// console.log(visibleForm);
