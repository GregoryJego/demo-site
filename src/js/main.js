// console.log('it works')

let button = document.querySelector(".darkmode");

const darkmode = () => {
  button.classList.toggle();
};

console.log("Voici le bouton recherché : " + button);

button.addEventListener("click", darkmode());
