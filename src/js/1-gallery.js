// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import images from "./images";


const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(images));


function createMarkup(arr) {
  return arr.map(image => `
     <li class="gallery-item">
	<a class="gallery-link" href="${image.original}">
		<img 
			class="gallery-image" 
			src="${image.preview}" 
      width= 340;
			title="${image.description}" 
			/>
	 </a>
    </li>
    `).join('');
}


let lightbox = new SimpleLightbox('.gallery a', {  });