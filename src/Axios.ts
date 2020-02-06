import axios from 'axios';

export default axios.create({
    baseURL: 'http://somewhere.com',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});