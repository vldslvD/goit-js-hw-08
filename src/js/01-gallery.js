import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
      </li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markup);

galleryRef.addEventListener("click", onImageClick);

const modalBox = new SimpleLightbox('.gallery li a', { captionsData: "alt", captionDelay: 250, disableScroll: false });
function onImageClick(e) {
  e.preventDefault();
  
}
