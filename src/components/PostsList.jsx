import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';
import Header from './Header';

@connect(store => ({
    posts: store.posts.posts
}), {
    fetchPosts
})

export default class PostsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        let posts = this.props.posts.filter((post, index) =>
            Object.keys(post).includes('title')
        );
        posts = posts.map((post, index) =>
            <li className="list-group-item" key={index}>
                <h3>
                    <a href="#">{post.title}</a>
                </h3>
                <span>{ post.date }</span>
                <p>{ post.content }</p>
            </li>
        )

        return (
            <div>
                <Header />
                <div className="section" style={{marginTop: 20}}>
                    { posts }
                </div>
            </div>
            
        )
    }
}