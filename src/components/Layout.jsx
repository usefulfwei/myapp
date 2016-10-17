import React, { Component } from 'react';
import Header from './Header';
import PostsList from './PostsList';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <PostsList />
            </div>
        )
    }
}