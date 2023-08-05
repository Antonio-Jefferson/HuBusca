import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuStore {
    setOpenMenu: boolean;
}
const initialState: MenuStore = {
    setOpenMenu: false,
}

export const menuSlice = createSlice({
  name: 'menuReducer',
  initialState,
  reducers: {
    setOpenMenuAction: (state, action: PayloadAction<MenuStore>) => {
      state.setOpenMenu = action.payload.setOpenMenu
    },
  },
})

export const { setOpenMenuAction } = menuSlice.actions

export default menuSlice.reducer