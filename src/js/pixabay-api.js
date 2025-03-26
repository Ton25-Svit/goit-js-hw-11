import axios from 'axios';

export function getImages(userSearching) {
    return axios
      .get(
        `https://pixabay.com/api/?key=48639504-554e542bc8495b3a6c3499497&q=${userSearching}&image_type=photo&orientation=horizontal&safesearch=true`
      )
      .then(response => response.data)
}