export function TitleText({ content, styles }: { content : string, styles?: string}) {
  const hasOtherAlignText = styles?.split(" ").includes("text-left")

  return (
    <h2 className={`font-poppins font-medium text-zinc-100 text-3xl ${ hasOtherAlignText ? 'text-left' : 'text-center'}`}>
      { content }
    </h2>
  )
}