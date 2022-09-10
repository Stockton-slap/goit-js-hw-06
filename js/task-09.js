// Напиши скрипт, который изменяет цвета фона элемента <body> через
// инлайн стиль при клике на button.change-color и выводит значение
// цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
  widgetRef: document.querySelector(".widget"),
  colorRef: document.querySelector(".color"),
  changeColorBtnRef: document.querySelector(".change-color"),
  bodyRef: document.querySelector("body"),
};

refs.changeColorBtnRef.addEventListener("click", () => {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();

  console.log((refs.colorRef.textContent = getRandomHexColor()));
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
