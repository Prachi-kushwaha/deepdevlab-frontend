import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
}


const initialState: User = {
  id: '',
  username: '',
  email: '',
  role: 'USER',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: User, action: PayloadAction<User>) => {
      return action.payload;
    },
    removeUser: () => {
      return initialState;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;