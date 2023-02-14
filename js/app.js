// Grab elements functions
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Somthing went, make sure that ${selector} exists or is typed correctly.`
  );
};

const selectAllElements = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) return element;
  throw new Error(
    `Somthing went, make sure that ${selector} exists or is typed correctly.`
  );
};

//Pictures
const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

//Grab Elements
const slideButtons = selectAllElements(".btn");
const imgSliderDiv = selectElement(".img-container");
let counter = 0;

//Control counter functions
const prevBtn = () => {
  counter--;
  if (counter < 0) {
    counter = pictures.length - 1;
  }
  imgSliderDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`;
};
const nextBtn = () => {
  counter++;
  if (counter > pictures.length - 1) {
    counter = 0;
  }
  imgSliderDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`;
};

//Give every buton eventHandler (left and right buttons)
slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    if (button.classList.contains("btn-left")) {
      prevBtn();
    } else {
      nextBtn();
    }
  });
});
