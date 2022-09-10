const refs = {
  fontSizeControlRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

refs.textRef.style.fontSize = refs.fontSizeControlRef.value + "px";

refs.fontSizeControlRef.addEventListener("input", onRangeMove);

function onRangeMove(event) {
  refs.textRef.style.fontSize = `${event.currentTarget.value}px`;
}
