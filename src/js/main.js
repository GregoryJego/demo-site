// console.log('it works')

const button = document.querySelector(".logo");

const showburgermenu = () => {
  if (window.screen.width < 768)
    document.querySelector(".burger").classList.toggle("show");
};

showburgermenu();

button.addEventListener("click", () => {
  document.querySelector("header").classList.toggle("darkmode");
  document.querySelector(".menu-burger").classList.toggle("darkmode");
  document.querySelector(".svg-darkmode").classList.toggle("darkmode");
  document.querySelector(".count").classList.toggle("darkmode");
  document.querySelector(".logo").classList.toggle("darkmode");
  document.querySelector(".hero").classList.toggle("darkmode");
  document.querySelectorAll("a").forEach(item => {
    item.classList.toggle("darkmode");
  });
  document.querySelector(".box").classList.toggle("darkmode");
  document.querySelector("footer").classList.toggle("darkmode");
  document.querySelector(".products").classList.toggle("darkmode");
  document.querySelectorAll(".section-category").forEach(item => {
    item.classList.toggle("darkmode");
  });
});

const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  document
    .querySelector(".menu-burger")
    .classList.toggle("menu-burger-activated");
});

const cross = document.querySelector(".cross");

cross.addEventListener("click", () => {
  document.querySelector(".shipping-bar").classList.toggle("hide");
});

let basket = 0;

const buttonAddCart = document.querySelectorAll(".addToCart").forEach(item => {
  item.addEventListener("click", () => {
    basket++;
    document.querySelectorAll(".count").forEach(item2 => {
      item2.innerHTML = basket;
    });
  });
});
