import axios from 'axios';
const baseUrl = 'https://swapi.co/api/';

const instance = axios.create({
    baseURL: baseUrl,
    method: 'get'
});

instance.getPeople = id => {
    return instance.get(`people/${id}`);
}
instance.getFilm = id => {
    return instance.get(`film/${id}`);
}

export default instance;