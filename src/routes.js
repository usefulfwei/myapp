import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import PostsList from './components/PostsList';
import PostCreate from './components/PostCreate';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={PostsList} />
        <Route path="post/new" component={PostCreate} />
    </Route>
)