import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageMarkup = createImageMurkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener('click', onGalleryClick);

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

function onGalleryClick(evt) {
    evt.preventDefault();

    const isImageSwatchEl = evt.target.classList.contains('gallery__image');
    if(!isImageSwatchEl){
        return
    }  

    const sourceImgId = evt.target.dataset.source ?? evt.target.closest('.gallery__item').dataset.source;
   
    openBigImg(sourceImgId);    
}

function openBigImg(target) {
    const instance = basicLightbox.create(`    
    <img src="${target}" width="800" height="600">    
`)
instance.show()    

closeBigImg();

    function closeBigImg() {
        gallery.addEventListener("keydown", (evt) => {
            if (evt.code === "Escape") {
            instance.close();
            }
        });
    }    
}    



