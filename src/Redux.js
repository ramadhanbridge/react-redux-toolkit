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



