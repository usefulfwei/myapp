import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import PostsList from './components/PostsList';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={PostsList} />
    </Route>
)