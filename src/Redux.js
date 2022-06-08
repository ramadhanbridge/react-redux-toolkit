import store from "./App/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js"

console.log(store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('update', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
unsubscribe()