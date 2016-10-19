import { combineReducers } from 'redux';
import posts from './posts';
import movies from './movies';

const rootReducer = combineReducers({
    posts, //<-- Posts
    movies  //<-- Movies
});

export default rootReducer;