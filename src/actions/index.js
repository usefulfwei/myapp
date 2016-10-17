import axios from 'axios';
import CONST from '../constants';

const BASE_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000' : '';

export function fetchPosts() {
    return async (dispatch) => {
        const posts = await axios.get(`${BASE_URL}/users`)
            .then(response => response.data)
            .catch(err => {
                console.log(err.message);
                return null
            });
        dispatch({
            type: CONST.FETCH_POSTS,
            posts
        });
            
    }
        
} 