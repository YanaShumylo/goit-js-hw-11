import axios from 'axios';

const API_KEY = '11450328-c2e7c4daa2322168e3859ef5d';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      `Sorry, there are no images matching your search query. Please try again!
`,
      error
    );
    throw error;
  }
}

// const form = document.querySelector('.js-form');

// query.formElement.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const userValue = e.target.elements.search-text.value;

//     getImagesByQuery(userValue).then(data => {
//         const markup = imageTemplate(data);
//         form.insertAdjacentHTML('beforebegin', markup);
//         e.target.reset();
//     })
// })

// // ?-------------------------------------------------------------------------

// function imageTemplate(image) {
//   return `<li class="gallery-item">
//      <a class="gallery-link" href="${image.original}">
//       <img
//         class="gallery-image"
//         src="${image.preview}"
//         alt="${image.description}"
//       />
//     </a>
//   </li>`;
// }

// function imagesTemplate(images) {
//   return images.map(imageTemplate).join('');
// }

// function renderImages() {
//   const markup = imagesTemplate(images);
//   container.innerHTML = markup;
//   }
// renderImages();

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',      // текст підпису береться з alt
//     captionDelay: 250,        // затримка перед появою підпису
// });
// user_id:11450328
