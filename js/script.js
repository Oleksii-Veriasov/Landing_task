var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
const result = document.getElementById("result");
const email = document.getElementById("email");
const warning = document.getElementById("warning");

function validate() {
  result.text = "";
  console.log(email.value);
  console.log(validateEmail(email.value));
  if (validateEmail(email.value)) {
    result.text = email + " is valid :)";
    result.style.color = "rgba(23, 186, 78, 1)";
    result.textContent = "✓ Resent. Check your email.";
    result.style.border = "none";
    warning.style.display = "none";
    email.style.borderBottom = "1px solid blue";
  } else {
    result.text = email + " is not valid :(";
    console.log(warning);
    warning.style.display = "block";
    result.style.color = "red";
    result.style.border = "1px solid red";
    result.textContent = "✖ Enter an email";
    email.style.borderBottom = "1px solid red";
  }
  return false;
}
// (e) => console.log(e.target.value)
email.addEventListener("input", validate);

let burger = document.getElementsByClassName("menu__burger")[0];
let menu = document.getElementsByClassName("menu")[0];
let menuList = document.getElementsByClassName("menu__list")[0];
burger.addEventListener("click", displayMenu);
let closeIco = document.getElementsByClassName("close")[0];
closeIco.addEventListener("click", closeMenu);
function displayMenu() {
  menu.style.width = "100%";
  document.getElementsByClassName("page")[0].style.marginLeft = "100%";
  closeIco.style.display = "block";
  closeIco.style.paddingLeft = "50px";
  menu.style.display = "block";
}
function closeMenu() {
  menu.style.width = "0px";
  document.getElementsByClassName("page")[0].style.marginLeft = "0px";
  menuList.style.display = "flex";
  menuList.style.flexDirection = "row";
}

const tabs = document.querySelectorAll("[data-tab-value]");
const tabInfos = document.querySelectorAll("[data-tab-info]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabValue);
    
    tabInfos.forEach((tabInfo) => {
      tabInfo.classList.remove("active");
    });
    target.classList.add("active");
  });
});
