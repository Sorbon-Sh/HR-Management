import { createSlice } from "@reduxjs/toolkit";

interface IAuthData {
  id: null | string;
  full_Name: null | string;
  team_id: string | null;
  role: "manager" | "employee" | null;
  email: null | string;
}

const initialState: IAuthData = {
  id: null,
  full_Name: null,
  role: null,
  team_id: null,
  email: null,
};

export const authDataSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.role = action.payload;
    },
    setProfile: (state, action) => {
      state.team_id = action.payload.team_id;
      state.role = action.payload.role;
    },
  },
});

export const { authUser, setProfile } = authDataSlice.actions;

export default authDataSlice.reducer;
