export function TitleText({ content }: { content : string}) {
  return (
    <h2 className='text-center font-poppins font-medium text-zinc-100 text-3xl'>
      { content }
    </h2>
  )
}