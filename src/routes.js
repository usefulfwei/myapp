import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import PostsList from './components/PostsList';
import PostCreate from './components/PostCreate';
import Post from './components/Post';
import Movies from './components/Movies';
import Ruby from './components/ruby/Home';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={PostsList} />
        <Route path="post/new" component={PostCreate} />
        <Route path="post/new/:id" component={PostCreate} />
        <Route path="post/:id" component={Post} />
        <Route path="movies" component={Movies} />
        <Route path="ruby-china" component={Ruby} />
    </Route>
)