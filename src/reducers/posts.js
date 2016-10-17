import CONST from '../constants';

function posts(state = { posts: [] }, action) {
    switch(action.type) {
        case CONST.FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state;
    }
}

export default posts;