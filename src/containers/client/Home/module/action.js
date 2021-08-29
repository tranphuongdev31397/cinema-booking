import { FETCH_ALL_MOVIE } from "./types";

export const actFetchAllMovie = (listMovie) => ({
    type: FETCH_ALL_MOVIE,
    payload: listMovie,
})