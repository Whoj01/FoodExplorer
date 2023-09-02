import { FavoritesFood } from "@/components/Food/FavoritesFood";

export default function Favoritos() {
  return (
    <main className="px-28 flex flex-col gap-8 justify-start pt-8">
      <h1 className="font-poppins text-3xl font-medium text-zinc-200">
        Meus favoritos
      </h1>

      <FavoritesFood/>
    </main>
  )
}