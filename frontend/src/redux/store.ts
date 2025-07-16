import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './cardSlice'


export const store = configureStore({
  reducer: {
    cardSlice: cardSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch