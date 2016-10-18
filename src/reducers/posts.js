import CONST from '../constants';

function posts(state = { posts: [], post: {} }, action) {
    switch(action.type) {
        case CONST.FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case CONST.FETCH_POST:
            return {
                ...state,
                post: action.post
            }
        default:
            return state;
    }
}

export default posts;