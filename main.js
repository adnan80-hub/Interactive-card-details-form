const fullInputs = document.querySelector(".inputs-user");
const confirmPage = document.querySelector(".confirm-page");

const nameInput = document.querySelector(".card-name");
const numberInput = document.querySelector(".numbers-card");
const longNumbers = document.querySelector(".long-numbers");
const username = document.querySelector(".name-card");
const cvc_numbers = document.querySelector(".cvc-numbers");
const button_confirm = document.querySelector(".confirm-button");
const button_continue = document.querySelector(".continue-button");
const headNumbers = document.querySelector(".numbers-input");
const error_num = document.querySelectorAll(".error-num");
const error_length = document.querySelector(".error-length");
const sameInput = document.querySelectorAll(".same");
const placeMonth = document.querySelector(".place-month");
const placeYear = document.querySelector(".place-year");
let dateMonth = document.querySelector(".date-month");
let dateYear = document.querySelector(".date-year");
let cvcInput = document.querySelector(".cvc-user-input");

button_confirm.onclick = function () {
  sameInput.forEach((ele, ind) => {
    if (ele.value === "") {
      error_num[ind].classList.replace("hide", "show");
    } else {
      error_num[ind].classList.replace("show", "hide");
    }
  });

  let validNumbers = /^[0-9]{16}$/.test(numberInput.value);
  let validCvc = /^[0-9]{3}$/.test(cvcInput.value);
  if (numberInput.value === "") {
    error_length.classList.replace("appear", "disppear");
  } else if (validNumbers && validCvc) {
    numberInput.style.cssText = "border-color: var(--gray-400)";
    error_length.textContent = "";
    longNumbers.textContent = "";
    window.localStorage.setItem(
      "numbers",
      numberInput.value.match(/\d{4}/g).join(" "),
    );
    longNumbers.textContent += `${window.localStorage.getItem("numbers")}`;
    username.textContent = "";
    window.localStorage.setItem("name", nameInput.value);
    username.textContent += `${window.localStorage.getItem("name")}`;
    placeMonth.textContent = "";
    window.localStorage.setItem("month", dateMonth.value);
    placeMonth.textContent += `${window.localStorage.getItem("month")}`;
    placeYear.textContent = "";
    window.localStorage.setItem("year", dateYear.value);
    placeYear.textContent += `${window.localStorage.getItem("year")}`;

    cvc_numbers.textContent = "";
    window.localStorage.setItem("cvc", cvcInput.value);
    cvc_numbers.textContent += `${window.localStorage.getItem("cvc")}`;
    cvcInput.style.cssText = "border-color: var(--gray-400);";

    error_length.classList.replace("appear", "disppear");
    fullInputs.classList.replace("show-page", "hide-page");
    confirmPage.classList.replace("hide-page", "show-page");
  } else {
    error_length.classList.replace("disppear", "appear");
    numberInput.style.cssText = "border-color: red;";
    cvcInput.style.cssText = "border-color: red;";
  }

  // if (validCvc) {
  //   cvc_numbers.textContent = "";
  //   cvc_numbers.textContent += `${cvcInput.value}`;
  //   cvcInput.style.cssText = "border-color: var(--gray-400);";
  // } else {
  //   cvcInput.style.cssText = "border-color: red;";
  // }
};

button_continue.onclick = function () {
  fullInputs.classList.replace("hide-page", "show-page");
  confirmPage.classList.replace("show-page", "hide-page");
  username.textContent = "JANE APPLESEED";
  longNumbers.textContent = "0000 0000 0000 0000";
  placeMonth.textContent = "00";
  placeYear.textContent = "00";
  cvc_numbers.textContent = "000";
  numberInput.value = "";
  nameInput.value = "";
  dateMonth.value = "";
  dateYear.value = "";
  cvcInput.value = "";
};

let record = {};

record["10"] = "ten";
record["2"] = "two";
record["01"] = "leading";
record["name"] = "Ada";
record["1"] = "one";

console.log(Object.keys(record));
