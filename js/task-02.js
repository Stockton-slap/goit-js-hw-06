const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const arr = [];

const separateIngredients = ingredients.map((item) => {
  const itemRef = document.createElement("li");

  itemRef.textContent = item;
  itemRef.classList.add("item");

  arr.push(itemRef);
});

listRef.append(...arr);
console.log(listRef);
