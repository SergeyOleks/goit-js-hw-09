// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const ulEl = document.querySelector('.gallery');

// Загрузка файлов предпросмотра
const markup = galleryItems.map(({ preview: url, description: alt,  original: urlLarge}) =>
    `<li class="gallery__item" >
        <a class="gallery__link"
            href = ${urlLarge} 
        >   
            <img
                class="gallery__image"
                src=${url} 
                data-source=${urlLarge} 
                alt=${alt}
            />
        </a>
    </li>`).join('')

ulEl.insertAdjacentHTML("beforeend", markup); 
    let gallerySimLight = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });

gallerySimLight.on('show.simplelightbox');


console.log(galleryItems);
