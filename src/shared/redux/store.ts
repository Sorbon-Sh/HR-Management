import { configureStore } from '@reduxjs/toolkit'
import signInDataReducer  from './slices/authData'
import logOutReducer from './slices/authData'

export const store = configureStore({
  reducer: {
  usersSignIn: signInDataReducer,
  userLogOut: logOutReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch