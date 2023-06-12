import { TOGGLE_AUTH } from '../redux-types/types'
const initialState = {
    Auth: false
}
const AuthReducer = (state = initialState, action) => {
    if (action.type === TOGGLE_AUTH) {
        return {
            ...state,
            Auth: state.Auth = !state.Auth
        }
    }
    return state;
}

export default AuthReducer