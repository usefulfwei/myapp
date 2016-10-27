import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-collapse">
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <Link to="/ruby-china"><b className="text-danger">Ruby</b>{" China"}</Link>
                        </li>
                        <li>
                            <Link to="/ruby-china/topics">Topics</Link>
                        </li>
                        <li>
                            <Link to="/ruby-china/wiki">Wiki</Link>
                        </li>
                        <li>
                            <Link to="/ruby-china/sites">Sites</Link>
                        </li>
                        <li>
                            <Link to="/ruby-china/jobs">Jobs</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/ruby-china">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/ruby-china">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}