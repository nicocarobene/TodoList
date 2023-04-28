import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types';

export const DEFAULT_VALUE: User = {
  username: null,
  name: null,
  token: null
}

const initialState: User = (() => {
	const persistedState = localStorage.getItem("__redux__user");
  console.log()
	return persistedState ? JSON.parse(persistedState) : DEFAULT_VALUE;
})();


export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (_state: User, action: PayloadAction<User>) => {
      return { ...action.payload }
    },
    logout: (state: User) => {
      state = { ...DEFAULT_VALUE }
      return state
    }
  }
})

export const { loginUser, logout } = counterSlice.actions
export default counterSlice.reducer