import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
        let posts = this.props.posts.map((post, index) =>
            <li className="list-group-item" key={index}>
                <h3>
                    <Link to={`post/${post._id}`}>{ post.title }</Link>
                    <Link to={`post/new/${post._id}`}><span className="label label-warning pull-right">Edit</span></Link> 
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