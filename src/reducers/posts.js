import CONST from '../constants';

function posts(state = {}, action) {
    switch(action.type) {
        case CONST.FETCH_POSTS:
            return {
                ...state,
                email: action.email
            }
        default:
            return state;
    }
}

export default posts;