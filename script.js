"use strict";

const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
const reset = document.querySelector(".reset");

img.classList.add("hidden");

btn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 11) + 1;
  console.log(random);

  img.classList.remove("hidden");

  img.src = `/img/cat-${random}.avif`;
});

reset.addEventListener("click", function () {
  img.classList.add("hidden");
});
