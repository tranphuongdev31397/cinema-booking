import movieApi from 'apis/movieApi'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actFetchAllMovie } from '../module/action'
import MovieItem from './MovieItem/MovieItem'

class MovieList extends Component {

    render() {
        const {listMovie, loading} = this.props
        if (loading) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
                <div className="row">
                    {
                        listMovie.map(movie => {
                            return (<div className="col-3 my-3" key={movie.maPhim}>
                                <MovieItem movie={movie} />
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        movieApi.fetchAllMovieApi()
            .then(res => {
                this.props.fetchAllMovie(res.data)
            })
            .catch(err => {

            })
    }
}
const mapStateToProps = state => ({
    listMovie: state.movieReducer.listMovie,
    loading: state.movieReducer.loading
})
const mapDispatchToProps = dispatch => ({
    fetchAllMovie: (listMovie) => {
        dispatch(actFetchAllMovie(listMovie))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
