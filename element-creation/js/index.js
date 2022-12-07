"use strict";

const sectionEl = document.querySelector("section");

const newEl = document.createElement("article");
newEl.textContent = "ARTICAL 2";

sectionEl.append(newEl); // додати останній чайлд

const h2El = document.createElement("h2");
h2El.textContent = "Section title";
h2El.style.color = "red";

sectionEl.prepend(h2El); // додати перший чайлд

// before/after - додавання сіблінгів

const newSection = document.createElement("section");
newSection.textContent = "SECTION 2";

sectionEl.after(newSection); // додає сіблінга

const asideEl = document.createElement("aside");
asideEl.textContent = "ASIDE";

sectionEl.before(asideEl);

// remove
sectionEl.onclick = (e) => {
  e.currentTarget.remove(); // усі елементи у section
  // e.target.remove(); - один елемент у section
};

// динамічно створити структуру, наведену в html
// заповнити контент з об'єкту
