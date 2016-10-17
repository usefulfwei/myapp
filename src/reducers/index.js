import { combineReducers } from 'redux';
import posts from './posts';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts, //<-- Posts
    // form: formReducer // <-- redux-form
});

export default rootReducer;