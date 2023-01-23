const numberCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberCategories.length);

const allCategory = document.querySelectorAll('li.item');
for (let elem of allCategory) {
  console.log('Category:', elem.firstElementChild.textContent);
  console.log('Elements:', elem.lastElementChild.childElementCount);
}
