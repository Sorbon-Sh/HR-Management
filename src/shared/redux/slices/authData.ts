import { createSlice } from '@reduxjs/toolkit'

interface IAuthData {
 signIn: null | {email: string, password:string},
 singUp: null | object
 logOut: boolean
}


const initialState: IAuthData = {
  signIn: null,
  singUp: null,
  logOut: true
}

export const authDataSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    signInData: (state, action) => {
      state.signIn  = action.payload
    },
    logOut: (state, action) => {
      state.logOut  = action.payload
    }
  },
})

export const { signInData,logOut } = authDataSlice.actions


export default authDataSlice.reducer