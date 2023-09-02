import { itemAlreadyOnCart } from '@/utils/itemAlreadyOnCart'
import { create } from 'zustand'

export type FoodProps = {
  id: string
  name: string
  amount: number
  totalPrice: number
}

type ActionProps = {
  addNewItemCart: (item : FoodProps) => void
}

type storeProps = {
  state: {
    itemsCart: FoodProps[]
  },

  actions: ActionProps
}



export const useCartStore = create<storeProps>((set) => ({
  state: {
    itemsCart: []
  },

  actions: {
    addNewItemCart: (item) => set((state) => ({
      state: {
        itemsCart: itemAlreadyOnCart(item.id, state.state.itemsCart) ? state.state.itemsCart.map((food) => {
          if(item.id === food.id) {
            food.amount += item.amount
            food.totalPrice += item.totalPrice
          }
          return food
        }) : [...state.state.itemsCart, item]
      }
    }))
  }
}))