const refs = {
  nameInput: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputText);

function onInputText(event) {
  refs.nameLabel.textContent = event.currentTarget.value || "Anonymous";
}
