"use client"

import { useCartStore } from "@/store/cart"
import { PedidosCard } from "./PedidosCard"

export function PedidosContainer() {
  const { state: { itemsCart } } = useCartStore()
  const totalPrice = itemsCart.reduce((total, actual) => {
    return total += actual.totalPrice
  }, 0)

  return (
    <>
    
    <div className="flex flex-col gap-4">
      {itemsCart.map(item => <PedidosCard food={item} key={item.id} />)}
    </div>

    {itemsCart.length > 0 && (
      <p className="text-zinc-500 font-roboto font-medium text-xl">
       Total: R$ {totalPrice.toFixed(2)}
      </p>
    )}
   
    </>
  )
}