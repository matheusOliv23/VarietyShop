import Image from "next/image"

interface InfoSectionProps {
  title: string
  text: string
  image: string
}
export default function InfoSection({ text, title, image }: InfoSectionProps) {
  return (
    <section className="flex items-center justify-center md:justify-between px-6 gap-4 md:gap-10 md:flex-row flex-col my-10 max-w-7xl m-auto">
      <div className="md:w-[445px] text-center md:text-left">
        <h2 className="font-bold mb-8 uppercase text-4xl">{title}</h2>
        <p className="font-medium opacity-40">{text}</p>
      </div>
      <Image
        src={image}
        alt="Company Image"
        className="mb-10"
        width={350}
        height={20}
      />
    </section>
  )
}
