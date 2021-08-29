import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class MovieItem extends Component {
    render() {
        let { tenPhim, hinhAnh, danhGia, maPhim } = this.props.movie

        return (
            <div className="card" style={{ height: '100%' }}>
                <img className="card-img-top img-fluid" src={hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{tenPhim}</h4>
                    <Link to={`movieDetail/${maPhim}`} className="btn btn-warning">Detail</Link>
                    <p className="font-weight-bold text-danger pt-3">Đánh giá: {danhGia}/10</p>
                </div>
            </div>

        )
    }
}
