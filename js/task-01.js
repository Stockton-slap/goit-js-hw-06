const categoriesRef = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesRef.children.length}`);

const itemRef = document.querySelectorAll("h2");

itemRef.forEach((item) => {
  console.log(`Category: ${item.textContent}`);
});

const listRef = document.querySelectorAll(".item ul");

listRef.forEach((item) => {
  console.log(`Elements: ${item.children.length}`);
});
