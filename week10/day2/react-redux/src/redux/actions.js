export const INCREMENT = 'plus'
export const DECREMENT = 'minus'


export const increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

export const decrement = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}
