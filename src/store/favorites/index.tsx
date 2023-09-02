import { StaticImageData } from 'next/image'
import { create } from 'zustand'

export type FavoriteProps = {
  id: string,
  name: string,
  img: StaticImageData,
}

type ActionsProps = {
  addNewFavorite: (favoriteFood: FavoriteProps) => void

  removeFavorite: (id: string) => void
}

type storeProps = {
  state: {
    favorites: FavoriteProps[]
  },

  actions: ActionsProps
}


export const useFavoritesStore = create<storeProps>((set) => ({
  state: {
    favorites: []
  },

  actions: {
    addNewFavorite: (favoriteFood) => set((state) => ({
      state: {
        favorites: state.state.favorites.some(favorite => favoriteFood.id === favorite.id) ? 
                    state.state.favorites.filter(favorite => favorite.id !== favoriteFood.id) : 
                    [...state.state.favorites, favoriteFood]
      }
    })),

    removeFavorite: (id) => set((state) => ({
      state: {
        favorites: state.state.favorites.filter(food => food.id !== id)
      }
    }))
  }
}))