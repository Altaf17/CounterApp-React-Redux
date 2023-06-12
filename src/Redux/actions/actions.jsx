import { INCREMENT, DECREMENT, RESET, ADDFIVE, TOGGLE_AUTH } from '../redux-types/types';


export const Increment = () => {
    return {
        type: INCREMENT
    }
}
export const Decrement = () => {
    return {
        type: DECREMENT
    }
}
export const Reset = () => {
    return {
        type: RESET
    }
}
export const AddFive = (amount) => {
    return {
        type: ADDFIVE,
        payload: amount
    }
}
export const ToggleAuth = (amount) => {
    return {
        type: TOGGLE_AUTH,
        payload: amount
    }
}