export function Ingredient({ content }: { content: string }) {
  return (
    <div className="py-1 px-2 bg-black-300 rounded-md font-poppins font-medium text-sm text-zinc-100">
     { content }
    </div>
  )
}