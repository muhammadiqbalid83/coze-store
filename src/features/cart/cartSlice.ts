import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

interface Product {
  cartID: number
  amount: number
  price: number
}

interface CartState {
  cartItems: Product[]
  numItemsInCart: number
  cartTotal: number
  shipping: number
  tax: number
  orderTotal: number
}

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
}

// const getCartFromLocalStorage = (): CartState => {
//   return JSON.parse(localStorage.getItem('cart')) || defaultState
// }

const getCartFromLocalStorage = (): CartState => {
  const cartData = localStorage.getItem('cart')
  return cartData ? JSON.parse(cartData) : defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action: PayloadAction<{ product: Product }>) => {
      const { product } = action.payload
      const item = state.cartItems.find((i) => i.cartID === product.cartID)
      if (item) {
        item.amount += product.amount
      } else {
        state.cartItems.push(product)
      }
      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount

      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Item added to cart')
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState
    },
    removeItem: (state, action: PayloadAction<{ cartID: number }>) => {
      const { cartID } = action.payload
      const product = state.cartItems.find((i) => i.cartID === cartID)
      if (product) {
        state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)
        state.numItemsInCart -= product.amount
        state.cartTotal -= product.price * product.amount
        cartSlice.caseReducers.calculateTotals(state)
        toast.error('Item removed from cart')
      }
    },
    editItem: (
      state,
      action: PayloadAction<{ cartID: number; amount: number }>
    ) => {
      const { cartID, amount } = action.payload
      const item = state.cartItems.find((i) => i.cartID === cartID)
      if (item) {
        state.numItemsInCart += amount - item.amount
        state.cartTotal += item.price * (amount - item.amount)
        item.amount = amount
        cartSlice.caseReducers.calculateTotals(state)
        toast.success('Cart update')
      }
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer
