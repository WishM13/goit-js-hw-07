import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageMarkup = createImageMurkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarkup);


function createImageMurkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>{
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img                    
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    target = "_parent"
                />
            </a>
        </li>
        `
    }).join('');    
}


const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: 'alt',    
    captionDelay: 250,    
    captionPosition: 'bottom',
    
});



