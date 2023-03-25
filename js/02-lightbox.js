import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//add selextor to list of gallery images
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
      alt="${description}"
    />
  </a>
  </li>`,
  )
  .join('');

// add markup to html doc to gallery list ('ul')
containerGallery.insertAdjacentHTML('beforeend', galleryMarkup);

//use SimpleLightbox library
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
