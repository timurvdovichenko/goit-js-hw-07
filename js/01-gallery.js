import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');

const GalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
  </li>`,
  )
  .join('');

containerGallery.insertAdjacentHTML('beforeend', GalleryMarkup);

containerGallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const targetImageItemGallery = event.target.classList.contains('gallery__image');
  if (!targetImageItemGallery) {
    return;
  }

  const galleryItemShow = basicLightbox.create(`<img
      class="gallery__image"
      src=${event.target.dataset.source}
      alt=${event.target.description}
    />`);
  galleryItemShow.show();
}
