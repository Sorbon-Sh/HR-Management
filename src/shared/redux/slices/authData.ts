import { createSlice } from '@reduxjs/toolkit'

interface IAuthData {
 signIn: null | {email: string, password:string},
 singUp: null | object

}


const initialState: IAuthData = {
  signIn: null,
  singUp: null,

}

export const authDataSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    signInData: (state, action) => {
      state.signIn  = action.payload
    },

  },
})

export const { signInData } = authDataSlice.actions


export default authDataSlice.reducer