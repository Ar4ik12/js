"use strict";
import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");

const itemList = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src =${item.preview} data-source=${item.original} alt=${item.description} width=400 height=320></a></li>`,
  ""
);
galleryList.insertAdjacentHTML("beforeend", itemList);

const divLightbox = document.querySelector(".js-lightbox");
const imgLightbox = document.querySelector(".lightbox__image");

galleryList.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.classList.contains("gallery__image")) {
    const chosenImg = e.target;
    divLightbox.classList.add("is-open");
    imgLightbox.setAttribute("src", chosenImg.dataset.source);
    imgLightbox.setAttribute("alt", chosenImg.alt);
    divLightbox.addEventListener("click", overlayClose);
    window.addEventListener("keydown", onKeydown);
  }
}

// const btnLightbox = document.querySelector(".lightbox__button");

// function onClose(e) {
//   divLightbox.classList.remove("is-open");
//   imgLightbox.removeAttribute("src", chosenImg.dataset.source);
//   btnLightbox.removeEventListener("click", onClose);
// }
function overlayClose(e) {
  if (!e.target.classList.contains("lightbox__image")) {
    divLightbox.classList.remove("is-open");
    imgLightbox.removeAttribute("src");
    divLightbox.removeEventListener("click", overlayClose);
  }
}

function onKeydown(e) {
  if (e.code === "Escape") {
    divLightbox.classList.remove("is-open");
    imgLightbox.removeAttribute("src");
    window.removeEventListener("keydown", onKeydown);
  }
}
