const allCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories:`, allCategoriesRef.length);

const categoriesListRef = document.querySelector('#categories');

const firstItemRef = categoriesListRef.firstElementChild;
console.log(`Category:`, firstItemRef.firstElementChild.textContent);
console.log(`Elements:`, firstItemRef.lastElementChild.children.length);

const secondItemRef = firstItemRef.nextElementSibling;
console.log(`Category:`, secondItemRef.firstElementChild.textContent);
console.log(`Elements:`, secondItemRef.lastElementChild.children.length);

const thirdItemRef = secondItemRef.nextElementSibling;
console.log(`Category:`, thirdItemRef.firstElementChild.textContent);
console.log(`Elements:`, thirdItemRef.lastElementChild.children.length);
