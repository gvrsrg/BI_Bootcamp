import { INCREMENT, DECREMENT } from "./actions"

const initialState = {
    count: 10,
    counta: 15
}


export const counterReducer = (state=initialState, action) => {
    switch (action.type) {

        case INCREMENT:
            return { ...state, count: state.count + action.payload }
        
        case DECREMENT:
            return { ...state, count: state.count - action.payload }

        default:
            return state
    }
}