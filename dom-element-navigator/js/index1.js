"use strict";

// Родитель:
// element.parentElement – родитель-элемент.

// Соседи:
// element.previousElementSibling – предыдущий сосед-элемент.
// element.nextElementSibling – lastElementChildследующий сосед-элемент.

// Дети:
// element.children – коллекция детей, которые являются элементами.
// element.firstElementChild – первый дочерний элемент.
// element.lastElementChild – последний дочерний элемент.

// element.closest(selector) - найближній батьківський елемент по селектору

const articleEl = document.querySelector("article.class1");
console.log("articleEl.parentElement :>> ", articleEl.parentElement);

const p1El = document.querySelector("p:first-of-type");
console.log("p1.previousElementSibling :>> ", p1El.previousElementSibling);
console.log("p1.nextElementSibling :>> ", p1El.nextElementSibling);
console.log("p1.previousSibling :>> ", p1El.previousSibling);
console.log("p1.nextSibling :>> ", p1El.nextSibling);

console.log("articleEl.children :>> ", articleEl.children);
console.log("articleEl.children :>> ", articleEl.firstElementChild);
console.log("articleEl.children :>> ", articleEl.lastElementChild);

// знайти h3 через ul

const ulEl = document.querySelector("ul");
console.log(
  "ulEl.previousElementSibling.previousElementSibling :>> ",
  ulEl.previousElementSibling.previousElementSibling
);
console.log(
  "ulEl.parentElement.firstElementChild",
  ulEl.parentElement.firstElementChild
);

console.log('ulEl.closest(".class1") :>> ', ulEl.closest(".class1"));

// повісити обробника подій на всі елементи списку
// і законсололожити їх textContent, маючи посилання на ul

const liClickHandler = function (e) {
  console.log("this.textContent :>> ", this.textContent);
  console.log("e.target.textContent :>> ", e.target.textContent);
};

for (const liEl of ulEl.children) {
  liEl.onclick = liClickHandler;
}

// for (const liEl of ulEl.children) {
//   liEl.onclick = () => {
//     console.log("liEl.textContent :>> ", liEl.textContent);
//   };
// }

// [...ulEl.children].forEach(
//   (liEl.onclick = () => {
//     console.log("liEl.textContent :>> ", liEl.textContent);
//   })
// );
