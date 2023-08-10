import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

function createMarcup(arr) {
    const marcup = arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
     class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </li>`).join('')
    return marcup;
}

galleryContainer.insertAdjacentHTML("beforeend", createMarcup(galleryItems));


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
});

galleryContainer.addEventListener('click', handlerClick);
function handlerClick(evt) {
    evt.preventDefault();
}