import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

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
        const posts = this.props.posts.map((post, index) => 
            <li className="list-group-item" key={index}>
                <h3>
                    <a href="#">{post.title}</a>
                </h3>
                <span>{ post.date }</span>
                <p>{ post.content }</p>
            </li>
        )

        return (
            <div className="section" style={{marginTop: 20}}>
                <form>
                    <div className="form-group">
                        <label htmlFor="">email</label>
                        <input type="text" className="form-control" />
                    </div>
                    { posts }
                </form>
            </div>
        )
    }
}