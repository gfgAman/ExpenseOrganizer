import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    title: string
}

const initialState: CounterState = {
    title: "",
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTitle } = cardSlice.actions

export default cardSlice.reducer