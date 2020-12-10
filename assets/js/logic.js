const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

const levelElements = document.querySelectorAll("input[name=level]");
const workElements = document.querySelectorAll("input[name=work]");
const confirmButton = document.querySelector("div.config-confirm > button");
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

window.addEventListener(
  "DOMContentLoaded",
  function () {
    levelElements[randomInteger(0, 2)].checked = true;
    workElements[randomInteger(0, 2)].checked = true;
  },
  true
);

confirmButton.addEventListener("click", (e) => {
  startActivityView();
});

function startActivityView(params) {
  const userConfig = formToObject(document.querySelector(".config-inputs"));
  localStorage.setItem("work", userConfig.work);
  localStorage.setItem("level", userConfig.level);
  document.querySelector(".player-container").classList.remove("hidden");
  let board = document.querySelector("#board");
  let carousel = new Carousel(board);

  const exercices = data.exercices.filter((exo) => {
    return exo.zone == userConfig.zone, exo.level == userConfig.level;
  });

  console.log(exercices);

  for (let index = 0; index < exercices.length; index++) {
    const element = exercices[index];
    console.log(element);
    carousel.addCard(element)
  }
}

function resumeActivityView(params) {
  const userChoice = {
    zone: window.localStorage.getItem("work"),
    level: window.localStorage.getItem("level"),
  };
}
