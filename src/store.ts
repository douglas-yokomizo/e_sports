import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './features/carrinho/carrinho-slice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
