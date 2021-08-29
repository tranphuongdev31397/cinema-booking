const { FETCH_MOVIE_DETAIL } = require("./types");

const actFetchMovieDetail = (movieDetail) => ({
    type: FETCH_MOVIE_DETAIL,
    payload: movieDetail,
})
export default actFetchMovieDetail