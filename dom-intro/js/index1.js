const doc = document;

console.dir(doc);

const docHead = document.head;
console.dir(docHead);

const docBody = document.body;
console.dir(docBody);

const divDoc = document.body.firstChild;

const divRoot = document.getElementById("root");

const divs = document.getElementsByTagName("div");

// for (const el of dirs) {
//   console.dir(el);
// }

// const [div1, div2, div3] = document.getElementsByTagName("div");

// const contentClassDiv = document.getElementsByClassName("content");

const divRoot2 = document.querySelector("#root");
const divs2 = document.querySelectorAll("div");

//  Отримати список елементів з класом content
const contentClassDiv2 = document.querySelectorAll("body > .content"); // (body >) - нащадки body

// Обробка подій -------------------------------------

const [btn1, btn2] = document.querySelectorAll("button");

btn1.onclick = function () {
  console.log("Click btn1");
};

// btn1.onclick = null;

// const btn2ClickHander = () => {
//   console.log("The btn2 was Clicked");
// };

// btn2.addEventListener("click", () => {
//   console.log("Click btn2");
// });

// btn2.removeEventListener("click", () => {
//   console.log("Click btn2");
// });

//При натисканні на <div id="root">Привіт</div> вивести алертом привітання
// const rootId = document.querySelectorAll("div");

// divRoot.onclick = function () {
//   alert("Hello");
// };
// АБО
// divRoot.onmouseover = function(){
//   alert('Hello');
// }

// Атрибути

// console.log("divRoot.title :>> ", divRoot.title);

// divRoot.title = "new title";
// // console.log("divRoot.style :>> ", divRoot.style);
// divRoot.style.color = "green";
// divRoot.style.backgroundColor = "red";
// // divRoot.hidden = true; // зникло

// console.log("divRoot.getAttribute :>> ", divRoot.getAttribute("title"));

// divRoot.setAttribute("title", "new title 2");
// divRoot.setAttribute("style", "color: blue; font-size: 30px");
// divRoot.setAttribute("hidden", "hidden"); // Зникло

// При натисканні на кнопку
// Отримати заголовок першого рівня і встановити для нього інший колір тла.
// * Виставити для заголовків другого рівня розмір шрифта 20px і їх колір.
// Встановити src i alt, розміри для головного зображення.
// * Встановити src i alt, розміри для зображень в кожному атіклі.

// const [button] = document.querySelectorAll("button");
// button.onclick = function () {
//   console.log("The button was clicked");

//   const h1Style = document.querySelector("h1");
//   h1Style.style.backgroundColor = "red";

//   const imgStyle = document.querySelector("img");
//   imgStyle.setAttribute("alt", "new alt");
//   imgStyle.setAttribute(
//     "src",
//     "https://planbphoto.com/wp-content/uploads/Serze.jpg"
//   );
//   imgStyle.setAttribute("style", "width: 20px", "height: 35px");
// };
// АБО
// const btnCklick = document.querySelector("button");
// const h1 = document.querySelector("h1");
// const h2All = document.querySelectorAll("h2");
// const mainImg = document.querySelector("h1+img");
// const primaryMainImg = document.querySelectorAll("h2+img");

// btnCklick.addEventListener(
//   "click",
//   (btnCklickClickHandler = () => {
//     h1.style.backgroundColor = "green";

//     h2All.forEach((el) => {
//       el.style.fontSize = "20 px";
//       el.style.color = "red";
//     });
//     mainImg.src = "https://planbphoto.com/wp-content/uploads/Serze.jpg";
//     mainImg.alt = "#";
//     primaryMainImg.forEach((el) => {
//       el.src = "https://planbphoto.com/wp-content/uploads/Serze.jpg";
//       el.alt = "#";
//     });
//   })
// );
// АБО кращ
const btnCklick = document.querySelector("button");
const h1 = document.querySelector("h1");
const h2All = document.querySelectorAll("h2");
const mainImg = document.querySelector("h1+img");
const primaryMainImg = document.querySelectorAll("h2+img");

btnCklick.addEventListener("click", btnCklickClickHandler);
function btnCklickClickHandler() {
  h1.style.backgroundColor = "green";
  h2All.forEach((el) => {
    el.style.fontSize = "20px";
    el.style.color = "red";
  });
  mainImg.src = "https://planbphoto.com/wp-content/uploads/Serze.jpg";
  mainImg.alt = "#";
  mainImg.style.width = mainImg.style.hight = "200px";
  primaryMainImg.forEach((el) => {
    el.src = "https://planbphoto.com/wp-content/uploads/Serze.jpg";
    el.alt = "#";
    el.style.width = el.style.hight = "200px";
  });
}
