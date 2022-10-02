import { configureStore, createSlice } from "@reduxjs/toolkit";

import React from "react"
import { Provider, useSelector, useDispatch } from "react-redux"

/////////////////// Making The Store

export const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 0},
    reducers: {
        inc(state) {
            state.counter = state.counter + 1
        },

        makeNull(state) {
            state.counter = 0
        },
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

////////////////// Read from Redux

const {inc, makeNull} = counterSlice.actions;


////////////////// Time to expose
export function useStore() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return {
        counter,
        inc: () => dispatch(inc()),
        makeNull: () => dispatch(makeNull())
    }
}

export function StateProvider({children}) {
    return <Provider store={store}>{children}</Provider>
}