import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Wallet } from './types'

export interface CounterState {
    wallet: Wallet|null,
    bankName: string
}

const initialState: CounterState = {
    wallet: null,
    bankName: ''
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setWallet: (state, action: PayloadAction<Wallet>) => {
            state.wallet = action.payload
        },
        setBankName: (state, action: PayloadAction<string>) => {
            state.bankName = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setWallet } = cardSlice.actions

export default cardSlice.reducer