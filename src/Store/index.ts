import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Reducers/userReducer'
import menuReducer from './Reducers/GlobalReducer'

export const store = configureStore({
  reducer: {userReducer, menuReducer},
})

export type RootState = ReturnType<typeof store.getState>

export default store;