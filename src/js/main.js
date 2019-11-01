// console.log('it works')

let basket = 0;

const buttonAddCart = document.querySelectorAll(".addToCart").forEach(item => {
  item.addEventListener("click", () => {
    basket++;
    document.querySelectorAll(".count").forEach(item2 => {
      item2.innerHTML = basket;
    });
  });
});

const button = document.querySelector(".btn-darkmode");

button.addEventListener("click", () => {
  document.querySelector("header").classList.toggle("darkmode");
  document.querySelector(".btn-darkmode").classList.toggle("darkmode");
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
