import { FoodProps } from "@/store/cart"

export function itemAlreadyOnCart(id: string, cart: FoodProps[]) {
 return cart.some(item => item.id === id)
}