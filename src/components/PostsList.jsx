import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
        email: state.posts.email
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: bindActionCreators(fetchPosts, dispatch)
    };
}

@connect(mapStateToProps, mapDispatchToProps)

export default class PostsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="">email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="section">
                        {this.props.email}
                    </div>
                </form>
            </div>
        )
    }
}