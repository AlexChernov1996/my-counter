import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer";
const rootReducer = combineReducers({
    counter:counterReducer
})

export const store = createStore(rootReducer)
export type rootStateType = ReturnType<typeof rootReducer>
