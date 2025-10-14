import { createSlice } from '@reduxjs/toolkit'

interface IAuthData {
 signIn: null | {email: string, password:string},
 singUp: null | object
 acsessToken?: string
}


const initialState: IAuthData = {
  signIn: null,
  singUp: null
}

export const authDataSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    signInData: (state, action) => {
      state.signIn  = action.payload
    },
    acesssTokenData: (state, action) => {
      state.acsessToken  = action.payload
    }
  },
})

export const { signInData, acesssTokenData } = authDataSlice.actions


export default authDataSlice.reducer