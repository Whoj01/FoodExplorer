export function handleAmountChange(amount: number , quantity: number) {
  return amount <= 1 && quantity === -1 ? 1 : amount + quantity 
}
