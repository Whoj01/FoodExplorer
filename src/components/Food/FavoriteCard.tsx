'use client'

import { FavoriteProps, useFavoritesStore } from "@/store/favorites";
import { Food, foodsTest } from "@/utils/fakeFoodData";
import Image from "next/image";

type FavoriteCardProps = {
  favorite: FavoriteProps
}

export function FavoriteCard({ favorite }: FavoriteCardProps) {
  const { actions: { removeFavorite } } = useFavoritesStore()


  const handleRemove = () => {
    removeFavorite(favorite.id)
  }

  return (
    <div className="w-[320px] flex items-center py-4 px-4 gap-5 rounded">
      <Image height={72} width={72} src={favorite.img} alt={`${favorite.name} foto`}/>

      <div className="flex flex-col gap-2">
        <h2 className="text-zinc-300 font-bold font-poppins text-xl">
          { favorite.name }
        </h2>

        <small onClick={handleRemove} className="text-red-400 text-xs font-roboto font-light cursor-pointer hover:text-red-600 transition-colors">
          Remover dos Favoritos
        </small>
      </div>
    </div>
  )
}