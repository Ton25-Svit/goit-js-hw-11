import { getData, searchImageForm } from './js/pixabay-api'


searchImageForm.addEventListener("submit", event => {
    event.preventDefault();
    getData(event);
});