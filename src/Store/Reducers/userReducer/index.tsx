import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserStore {
    username?: string;
}
const initialState: UserStore = {
    username: undefined,
}

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserStore>) => {
      state.username = action.payload.username
    },
  },
})

export const { setUserAction } = userSlice.actions

export default userSlice.reducer