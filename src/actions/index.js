import axios from 'axios';
import CONST from '../constants';

const BASE_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000' : '';

// export function fetchPosts() {
//     return (dispatch) => {
//         axios
//             .get(`${BASE_URL}/users`)
//             .then(res => {
//                 return dispatch({
//                     type: CONST.FETCH_POSTS,
//                     email: res.data.email
//                 });
//             })
//             .catch(err => {
//                 console.log(err.message);
//             })
//     }  
// } 

export function fetchPosts() {
    return dispatch => {
        axios
            .get(`${BASE_URL}/users`)
            .then(res => {
                return dispatch({
                    type: CONST.FETCH_POSTS,
                    email: res.data.email
                });
            })
            .catch(err => {
                console.log(err.message);
            })
    }
        
} 