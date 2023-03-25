import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//add selector to list of gallery images
const containerGallery = document.querySelector('.gallery');

//create html markup from gallery-items array
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`,
  )
  .join('');

// add markup to html doc to gallery list ('ul')
containerGallery.insertAdjacentHTML('beforeend', galleryMarkup);

// add event listener to gallery list with function to click on gallery item
containerGallery.addEventListener('click', onGalleryItemClick);

// function : open and close gallery item with BASICLIGHTBOX library
function onGalleryItemClick(event) {
  event.preventDefault();

  const targetImageItemGallery = event.target.classList.contains('gallery__image');
  if (!targetImageItemGallery) {
    return;
  }

  const galleryItemShow = basicLightbox.create(`<img
      class="gallery__image"
      src="${event.target.dataset.source}"
      alt="${event.target.description}"
    />`);
  galleryItemShow.show();

  // add event listener to keyboard event only when function onGalleryItemClick called
  document.addEventListener('keydown', onGalleryItemClose);

  // function: Escape key keyboard close view gallery item
  function onGalleryItemClose(eventkey) {
    // console.log(eventkey.code);
    if (eventkey.code === 'Escape') {
      galleryItemShow.close();
    }
  }
}
