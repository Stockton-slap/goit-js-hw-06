const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
  } else {
    const data = { email: email.value, password: password.value };

    console.log(data);
    event.currentTarget.reset();
  }
}
