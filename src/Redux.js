import redux from "redux"
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED"
let initialState = {
    numOfCakes: 10
}

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}


const store = createStore(reducer)

console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => { console.log("update state", store.getState()) })
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
unsubscribe()



