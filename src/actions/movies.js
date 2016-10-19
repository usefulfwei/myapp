import axios from 'axios';
import CONST from '../constants';

const BASE_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000' : '';

export function fetchMovies() {
    return async (dispatch) => {
        const movies = await axios.get(`${BASE_URL}/movies`)
            .then(response => response.data)
            .catch(err => {
                console.log(err.message);
                return null
            });
        dispatch({
            type: CONST.FETCH_MOVIES,
            movies
        });
    }
}