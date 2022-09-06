const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
console.log(listRef);

for (let i = 0; i < ingredients.length; i++) {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredients[i];
  // console.log(itemRef);
  itemRef.classList.add("item");
  listRef.append(itemRef);
}
