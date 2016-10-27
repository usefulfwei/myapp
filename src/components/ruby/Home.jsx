import React, { Component } from 'react';

import Nav from './Nav';

export default class Ruby extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contianer">
                <Nav />
                <div className="panel panel-default">
                    <div className="panel-body" style={{width: 480, margin: 'auto'}}>
                        <div className="media">
                            <a className="media-left">
                                <img style={{width: 50}} src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" alt="box"/>
                            </a>
                            <div className="media-body text-center">
                                <p className="media-heading">Ruby China 官方 RubyGems 镜像、Ruby镜像正式上线!</p>
                                <code>gem source -a https://gems.ruby-china.org</code>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}