'use client'

import { useFavoritesStore } from "@/store/favorites"
import { FavoriteCard } from "./FavoriteCard"

export function FavoritesFood() {
  const { state: { favorites } } = useFavoritesStore()


  return (
    <section className="min-w-full flex items-start flex-wrap gap-12">
      {favorites.map(favorite => <FavoriteCard favorite={favorite} key={favorite.id}/>)}
    </section>
  )
}