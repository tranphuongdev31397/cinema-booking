import { FETCH_ALL_MOVIE } from "./types"

const initialState = {
    listMovie: [],
    loading: true,
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_ALL_MOVIE:
        return { ...state, listMovie: payload, loading: false }

    default:
        return state
    }
}
export default movieReducer
