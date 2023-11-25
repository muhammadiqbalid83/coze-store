import { combineReducers, configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import userReducer from './features/user/userSlice'

const rootReducer = combineReducers({
  cartState: cartReducer,
  userState: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
})
