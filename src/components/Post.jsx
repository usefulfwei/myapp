import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { fetchPost, deletePost } from '../actions/index';

import { formatDate } from '../libs/format';

@connect(store => ({
    post: store.posts.post
}), {
    fetchPost, deletePost
})

export default class Post extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount() {
        this.props.fetchPost(this.props.params.id);
    }

    handleDelete() {
        this.props.deletePost(this.props.params.id, this.context.router);
    }

    render() {
        const { title, date, content } = this.props.post;
        const style = {
            textAlign: 'center'
        };

        return (
            <div>
                <Header type="post" onClick={this.handleDelete.bind(this)} />
                <h2 style={style}>{ title }</h2>
                <p style={style}>{ formatDate(date) }</p>
                <hr/>
                <p>{ content }</p>
            </div>
        )
    }
}