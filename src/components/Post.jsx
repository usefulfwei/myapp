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

        return (
            <div>
                <Header type="show-post" onClick={this.handleDelete.bind(this)} />
                <h2 className="text-center">{ title }</h2>
                <p className="text-center">{ formatDate(date) }</p>
                <hr/>
                <p className="text-center">{ content }</p>
            </div>
        )
    }
}