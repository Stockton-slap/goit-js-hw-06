const refs = {
  color: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener("click", () => {
  refs.body.classList.add("body");
  const bodyRef = document.querySelector(".body");
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
