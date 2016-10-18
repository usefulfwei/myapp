import axios from 'axios';
import CONST from '../constants';

const BASE_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000' : '';

export function fetchPosts() {
    return async (dispatch) => {
        const posts = await axios.get(`${BASE_URL}/posts`)
            .then(response => response.data)
            .catch(err => {
                console.log(err.message);
                return null
            });
        dispatch({
            type: CONST.FETCH_POSTS,
            posts
        });
            
    };
} 

export function createPost(data, router) {
    return async (dispatch) => {
        const post = await axios.post(`${BASE_URL}/posts/new`, {
            title: data.title,
            content: data.content
        })
            .then(response => response.data)
            .catch(err => {
                console.log(err.message);
                return null
            });
        if (post.code === 0) {
            router.push('/');
        }
    }
}

export function updatePost(data, id, router) {
    return async (dispatch) => {
        const post = await axios.put(`${BASE_URL}/posts/new/${id}`, {
            title: data.title,
            content: data.content
        })
            .then(response => response.data)
            .catch(err => {
                console.log(err.message);
                return null
            });
        if (post.code === 0) {
            router.push('/');
        }
    }
}

export function fetchPost(id) {
    return async (dispatch) => {
        const post = await axios.get(`${BASE_URL}/posts/${id}`)
            .then(response => response.data)
            .catch(err => {
                console.log(err.message);
                return null;
            });
        dispatch({
            type: CONST.FETCH_POST,
            post
        })
    }
}

export function deletePost(id, router) {
    return async (dispatch) => {
        const data = await axios.delete(`${BASE_URL}/posts/${id}`)
            .then(response => response.data)
            .catch(err => {
                console.log(err.message);
                return null;
            });
        if (data.code === 0) {
            router.push('/');
        }
    }
}