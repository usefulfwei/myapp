import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';
import Header from './Header';
@connect(store => ({
    movies: store.movies.movies
}), {
    fetchMovies,
})

export default class Movies extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const movies = this.props.movies.map((movie, index) =>
            <div className="list-group-item" key={index}>
                <a href={movie.link}>{ `【${index + 1}】 ${movie.title}` }</a>
                <span className="badge">{ movie.date }</span>
            </div>
        )
        return (
            <div>
                <Header />
                <ul className="list-group">
                    { movies }
                </ul>
            </div>
        )
    }
}