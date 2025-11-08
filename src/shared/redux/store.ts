import { configureStore } from '@reduxjs/toolkit'
import signInDataReducer  from './slices/authData'
import { employerApi } from '../api/addEmployer'

export const store = configureStore({
  reducer: {
  usersSignIn: signInDataReducer,
  [employerApi.reducerPath]: employerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employerApi.middleware,

    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch