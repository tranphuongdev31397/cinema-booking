import movieApi from 'apis/movieApi';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import './MovieDetail.css'

import actFetchMovieDetail from './module/action';

class MovieDetail extends Component {

    render() {
        const { loading, movieDetail } = this.props

        if (loading) return <div>Loading...</div>
        console.log(movieDetail);
        return (
            <div className="container mt-5 movie__detail">
                <h1 className="text-danger mb-5">Movie Detail</h1>
                <div className="row">
                    <div className="col-3">
                        <img src={movieDetail.hinhAnh} className="img-fluid" />
                    </div>
                    <div className="col-9 text-left  d-flex flex-column justify-content-center">
                        <h2>{movieDetail.tenPhim}</h2>
                        <h3>Mô tả: </h3>
                        <span>{movieDetail.moTa}</span>
                        <h5>Đánh giá: {movieDetail.danhGia}/10</h5>
                    </div>
                </div>
                <h1 className="my-5 text-danger">Show Time</h1>
                <div className="row text-left">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {movieDetail.heThongRapChieu.map(heThongRap => {
                                return (
                                    <a className="nav-link  my-2" id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <span><img className="mr-2" src={heThongRap.logo} style={{ width: '50px', height: '50px' }} /> {heThongRap.tenHeThongRap} </span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">

                            {movieDetail.heThongRapChieu.map(heThongRap => {
                                return (
                                    <div className="tab-pane fade show" id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        {heThongRap.cumRapChieu.map(cumRap => {
                                            return (
                                                <div className="mb-2 pb-2">
                                                    <p>{cumRap.tenCumRap}</p>
                                                    <div>
                                                        {cumRap.lichChieuPhim.map(lichChieu => {
                                                            return (
                                                                <button className="btn btn-secondary mr-3 mb-3">
                                                                    {new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    async componentDidMount() {
        try {
            const { movieId } = this.props.match.params
            const { data } = await movieApi.fetchAllMovieDetailApi(movieId)
            this.props.fetchMovieDetail(data)
        }
        catch (err) {
            console.log(err);
        }
    }
}
const mapStateToProps = state => ({
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading
})
const mapDispatchToProps = dispatch => ({
    fetchMovieDetail: movieDetail => {
        dispatch(actFetchMovieDetail(movieDetail))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
