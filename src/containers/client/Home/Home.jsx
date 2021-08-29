import React, { Component } from 'react'
import MovieList from './MovieList/MovieList'

export default class Home extends Component {
    render() {
        return (
            <div className="container my-3">
                <MovieList /> 
            </div>
        )
    }
}
