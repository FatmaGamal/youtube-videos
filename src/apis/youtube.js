import axios from 'axios';


const KEY = 'AIzaSyBkfkOyMvZ7frj7Ch2Vhkly_K0BBFZbo7A';
var baseURL  = 'https://www.googleapis.com/youtube/v3';

// Default configurations for axios
export default axios.create({
    baseURL: baseURL,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});