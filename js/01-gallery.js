import { galleryItems } from "./gallery-items.js";

const galleeryRef = document.querySelector(".gallery");
console.log(galleeryRef);

function createGalleryEl(items) {
  return items
    .map(
      item => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"
     />
   </a>
 </div>`
    )
    .join("");
}

const addItemToMarkup = createGalleryEl(galleryItems);
console.log(addItemToMarkup);
galleeryRef.innerHTML = addItemToMarkup;

galleeryRef.addEventListener("click", openModalWindow);

function openModalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  galleeryRef.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
