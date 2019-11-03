// console.log('it works')

let button = document.querySelector(".logo");
let cross = document.querySelector(".cross");
let buttonAddCart = document.querySelectorAll(".addToCart");
let basket = 0;
let burger = document.querySelector(".burger");

window.onscroll = () => {
  ScrollIndicator();
};

window.onresize = () => {
  if (window.innerWidth > 768)
    document
      .querySelector(".menu-burger")
      .classList.remove("menu-burger-activated");
};

const ScrollIndicator = () => {
  console.log(window.scrollY);
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  if (Math.round(scrolled) > 0) {
    if (Math.round(scrolled) < 4)
      document.querySelector(".progress-bar").style.width = "0%";
    if (Math.round(scrolled) >= 98)
      document.querySelector(".progress-bar").style.width = "100%";
    else document.querySelector(".progress-bar").style.width = scrolled + "%";
  } else {
    document.querySelector(".progress-bar").style.width = "0%";
  }
};

button.addEventListener("click", () => {
  document.querySelector("header").classList.toggle("darkmode");
  document.querySelector(".menu-burger").classList.toggle("darkmode");
  document.querySelector(".svg-darkmode").classList.toggle("darkmode");
  document.querySelector(".count").classList.toggle("darkmode");
  document.querySelector(".logo").classList.toggle("darkmode");
  document.querySelector(".collection").classList.toggle("darkmode");
  document.querySelector(".newsletter").classList.toggle("darkmode");
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

cross.addEventListener("click", () => {
  document.querySelector(".shipping-bar").classList.toggle("hide");
});

buttonAddCart.forEach(item => {
  item.addEventListener("click", () => {
    basket++;
    document.querySelectorAll(".count").forEach(item2 => {
      item2.innerHTML = basket;
    });
  });
});

burger.addEventListener("click", () => {
  document
    .querySelector(".menu-burger")
    .classList.toggle("menu-burger-activated");
});
