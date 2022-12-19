import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterSlice from './counter';
// import { createStore } from 'redux';

const store = configureStore({ reducer: { counter: counterSlice.reducer, auth: authSlice.reducer } })

// the next 'counterSlice.actions' to access to the actions of the reducer, slice
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "INCREMENT") {
//         return { ...state, counter: state.counter + 1 }
//     }
//     if (action.type === "DECREMENT") {
//         return { ...state, counter: state.counter - 1 }
//     }
//     if (action.type === "INCREASE") {
//         return { ...state, counter: state.counter + action.amount }
//     }
//     if (action.type === "TOGGLE") {
//         return { ...state, showCounter: !state.showCounter }
//     }
//     return state;
// }

// const store = createStore(counterReducer)

export default store;