// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);   
    
function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                            <img class="gallery__image" 
                                src="${preview}" 
                                alt="${description}"
                            />
                        </a>
                </div >
                `;
            })
        .join('');
}

          
let modalGallery = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,    
}); 