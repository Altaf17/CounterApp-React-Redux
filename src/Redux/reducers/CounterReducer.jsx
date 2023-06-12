import { INCREMENT, DECREMENT, RESET, ADDFIVE, } from "../redux-types/types"

const initialState = {
    count: 0
}

const CounterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        }
    }
    if (action.type === DECREMENT) {
        return {
            ...state,
            count: state.count - 1
        }
    }
    if (action.type === RESET) {
        return {
            ...state,
            count: state.count = 0
        }
    }
    if (action.type === ADDFIVE) {
        return {
            ...state,
            count: state.count + action.payload
        }
    }
    return state;
}

export default CounterReducer