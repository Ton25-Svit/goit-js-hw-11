import { getImages } from './js/pixabay-api.js';
import { renderGalleryList, clearGalleryList } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.inputText');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const userQuery = input.value.trim();

    if (!userQuery) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query!',
        });
        return;
    }

    clearGalleryList(); 
    loader.style.display = 'block'; 
    try {
        const data = await getImages(userQuery);

        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, no images found. Try another search.',
            });
        } else {
            renderGalleryList(data.hits);
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
        });
    } finally {
        loader.style.display = 'none'; 
    }

    form.reset();
});