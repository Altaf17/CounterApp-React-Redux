import { createStore, combineReducers } from 'redux';
import CounterReducer from '../reducers/CounterReducer';
import AuthReducer from '../reducers/AuthReducer';

const reducers = combineReducers({
    CounterReducer,
    AuthReducer,
})


const store = createStore(reducers);

export default store;