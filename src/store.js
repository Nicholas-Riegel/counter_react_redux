import {createStore} from 'redux'

//actions

export const increment = (n) => {
    return {
        type: 'INCREMENT',
        payload: n
    }
}

export const decrement = (n) => {
    return {
        type: 'DECREMENT',
        payload: n
    }
}

//reducer

const reducer = (state = 0, actions) => {
    switch (actions.type) {
        case 'INCREMENT':
            return state + actions.payload
        case 'DECREMENT':
            return state - actions.payload
        default:
            return state
    }
}

//store

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


