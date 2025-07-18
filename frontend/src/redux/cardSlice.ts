import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    wallet: object,
    bankName: string
}

const initialState: CounterState = {
    wallet: {
        bank_name: '',
        budget_cards: [],
        bank_balance: 0
    },
    bankName: ''
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setWallet: (state, action: PayloadAction<object>) => {
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