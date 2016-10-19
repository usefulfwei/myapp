import React, { Component, PropTypes } from 'react';
import classname from 'classnames';
import { connect } from 'react-redux';

import { createPost, fetchPost, updatePost } from '../actions/index';
import Header from './Header';

@connect(store => ({
    post: store.posts.post
}), {
    createPost, fetchPost, updatePost
})
export default class PostCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            hasTitleError: false,
            hasContentError: false,
            isEdit: false
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount() {
        let id = this.props.params.id;
        if (!id) return false;

        this.setState({
            isEdit: true
        });

        this.props.fetchPost(id);
    }

    componentWillReceiveProps(nextProps) {
        const { title, content } = nextProps.post
        this.setState({
            title,
            content
        })
    }

    handleChange(state, event) {
        this.setState({
            [state]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, content, isEdit } = this.state;

        if (!title.trim()) {
            this.setState({ hasTitleError: true });
            return false;
        } else {
            this.setState({ hasTitleError: false });
        }
        if (!content.trim()) {
            this.setState({ hasContentError: true });
            return false;
        } else {
            this.setState({ hasContentError: false });
        }

        const data = {title, content},
            router = this.context.router;

        if (!isEdit) {
            this.props.createPost(data, router);
        } else {
            this.props.updatePost(data, this.props.params.id, router);
        }
        
    }

    render() {
        const { title, hasTitleError, content, hasContentError, isEdit } = this.state;
        const necessary = (
            <span style={{color: '#f00'}}>*</span>
        );

        return (
            <div>
                <Header type="new-post" />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={classname('form-group', { 'has-error': hasTitleError })}>
                        <label>Title { necessary }</label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />
                        <span className={classname({'hidden': !hasTitleError}, { 'help-block': hasTitleError })}>Required</span>
                    </div>
                    <div className={classname('form-group', { 'has-error': hasContentError })}>
                        <label>Content { necessary }</label>
                        <textarea rows="10" className="form-control" value={this.state.content} onChange={this.handleChange.bind(this, 'content')} />
                        <span className={classname({'hidden': !hasContentError}, { 'help-block': hasContentError })}>Required</span>
                    </div>
                    <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>{isEdit ? 'Update' : 'Submit'}</button>
                </form>
            </div>
            
        )
    }
}