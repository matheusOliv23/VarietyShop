interface TitleContainerProps {
  title: string
}

export default function TitleContainer({ title }: TitleContainerProps) {
  return (
    <div className="bg-black w-full h-20 md:h-40 flex items-center justify-center">
      <h1 className="font-bold font-manrope text-2xl md:text-4xl text-white">
        {title}
      </h1>
    </div>
  )
}
