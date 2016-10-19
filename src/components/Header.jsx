import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        const deletePost = (
            <li>
                <a href="javascript:;" onClick={this.props.onClick} >Delete Post</a>
            </li>
        );

        const newPost = (
            <li>
                <Link to="post/new">New Post</Link>
            </li>
        );

        const home = (
            <li>
                <Link to="/">Home</Link>
            </li>
        )

        return (
            <nav className="navbar navbar-default">
                <div id="navbar" className="navbar-collapse">
                    <ul className="nav navbar-nav navbar-left">
                        { home }
                        { this.props.type === 'post' ? deletePost : newPost }
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="react-china">React-China</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}