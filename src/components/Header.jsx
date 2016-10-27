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
                <Link to="/post/new">New Post</Link>
            </li>
        );

        const home = (
            <li>
                <Link to="/">Home</Link>
            </li>
        )

        const postNavbar = () => {
            switch(this.props.type) {
                case 'show-post':
                    return (
                        <ul className="nav navbar-nav navbar-left">
                            { home }
                            { deletePost }
                        </ul>
                    );
                case 'new-post':
                    return (
                        <ul className="nav navbar-nav navbar-left">
                            { home }
                        </ul>
                    );
                default:
                    return (
                        <ul className="nav navbar-nav navbar-left">
                            { home }
                            { newPost }
                        </ul>
                    );
            }
        };

        return (
            <nav className="navbar navbar-default">
                <div id="navbar" className="navbar-collapse">
                    { postNavbar() }
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/ruby-china">Ruby-China</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}