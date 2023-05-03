import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {galleryItems} from "./gallery-items"
const ulImg = document.querySelector(".gallery");

const createImgMarkp = (array) => {
  const markup = array
    .map((el) => {
      return `<li class="gallery__item">
<a class="gallery__link"
  href="${el.original}">
  <img class="gallery__image"
    src="${el.preview}"
    alt="${el.description}"/></a></li>`;
    })
    .join("");

  ulImg.innerHTML = markup;
};

createImgMarkp(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});
