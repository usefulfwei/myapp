import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

@connect(store => ({
    posts: store.posts
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
        const { email } = this.props.posts

        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="">email</label>
                        <input type="text" className="form-control" value={email} />
                    </div>
                </form>
            </div>
        )
    }
}