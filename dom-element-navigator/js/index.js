"use strict";

function eventHandler(e) {
  // console.log("e.target :>> ", e.target);
  // e.target.style.background = "red";
  console.log("e.currentTarget :>> ", e.currentTarget);
  e.stopPropagation(); // вимикає подальше розповсюдження події
}

document.body.addEventListener("click", eventHandler, {
  capture: true,
  once: true,
});

// події по дефолту спрацьовують на сплиття (bubbling)
document.body.addEventListener("click", eventHandler);

document.body.firstElementChild.addEventListener("click", eventHandler);

document.body.firstElementChild.firstElementChild.addEventListener(
  "click",
  eventHandler
);

document.body.addEventListener("click", eventHandler, { capture: true });
// document.body.remuveEventListener("click", eventHandler, { capture: true });

// повісити обробники на section і article на занурення (capturing)

document.body.firstElementChild.addEventListener("click", eventHandler, {
  capture: true,
});

document.body.firstElementChild.firstElementChild.addEventListener(
  "click",
  eventHandler,
  { capture: true }
);
