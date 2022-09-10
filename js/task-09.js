const refs = {
  colorRef: document.querySelector(".color"),
  changeColorBtnRef: document.querySelector(".change-color"),
  bodyRef: document.querySelector("body"),
};

refs.changeColorBtnRef.addEventListener("click", () => {
  refs.bodyRef.classList.add("body");
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
  refs.colorRef.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
