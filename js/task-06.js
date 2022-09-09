// 1)
// const inputRef = document.querySelector("#validation-input");

// inputRef.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const isValid =
//     event.currentTarget.value.length ===
//     Number(event.currentTarget.dataset.length);

//   if (isValid) {
//     event.currentTarget.style.borderColor = "";

//     inputRef.classList.add("valid");
//   } else {
//     event.currentTarget.style.borderColor = "red";
//     inputRef.classList.remove("valid");
//   }
// }

// 2)
const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const isValid =
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length);

  if (isValid) {
    inputRef.classList.remove("not-valid");

    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("not-valid");

    inputRef.classList.remove("valid");
  }
}
