import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/new-post">New Post</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/react-china">React-China</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}