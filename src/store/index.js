import { createStore, combineReducers } from 'redux'
import movieReducer from 'containers/client/Home/module/reducers';
import movieDetailReducer from 'containers/client/MovieDetail/module/reducer';
const rootReducer = combineReducers({
    movieReducer,
    movieDetailReducer
});

const store = createStore(rootReducer)

export default store