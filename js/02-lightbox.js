import { galleryItems } from "./gallery-items.js";

const galleeryRef = document.querySelector(".gallery");

function createGalleryEl(items) {
  return items
    .map(
      item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
</a>`
    )
    .join("");
}

const addItemToMarkup = createGalleryEl(galleryItems);
console.log(addItemToMarkup);
galleeryRef.innerHTML = addItemToMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});
