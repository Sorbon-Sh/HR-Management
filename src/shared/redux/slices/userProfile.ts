import { createSlice } from "@reduxjs/toolkit";

interface IAuthData {
  id: null | string;
  full_name: null | string;
  team_id: string | null;
  role: "manager" | "employee" | null;
  email: null | string;
}

const initialState: IAuthData = {
  id: null,
  full_name: null,
  role: null,
  team_id: null,
  email: null,
};

export const authDataSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.full_name = action.payload.full_name;
      state.team_id = action.payload.team_id;
      state.role = action.payload.role;
    },
    clearAuthData: () => initialState,
  },
});

export const { setAuthData, clearAuthData } = authDataSlice.actions;

export default authDataSlice.reducer;
