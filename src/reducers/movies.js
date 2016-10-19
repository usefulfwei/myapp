import CONST from '../constants';

function movies(state = { movies: [], movie: {} }, action) {
    switch(action.type) {
        case CONST.FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
}

export default movies;