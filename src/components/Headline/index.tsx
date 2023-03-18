import Link from "next/link"
import Button from "../Button"

interface HeadlineProps {
  title: string
  text: string
  id: string
  subtitle: string
  variation?: "light" | "dark"
  category?: string
}
export default function Headline({
  id,
  category,
  subtitle,
  text,
  title,
  variation = "dark"
}: HeadlineProps) {
  return (
    <div className={`text-center lg:text-left`}>
      <p
        className={`${
          variation === "dark" ? "text-orange-100" : "text-white"
        } text-sm opacity-50 tracking-[10px]`}
      >
        {text}
      </p>
      <h1
        className={`${
          variation === "dark" ? "text-black" : "text-white"
        } font-bold text-6xl my-6 max-w-[396px]`}
      >
        {title}
      </h1>
      <p
        className={`${
          variation === "dark" ? "text-black" : "text-white"
        } font-medium opacity-75 max-w-sm m-auto lg:m-0 !mb-10`}
      >
        {subtitle}
      </p>
      <Link href={`/${category}/${id}`} passHref>
        <Button variant="PRIMARY">SEE PRODUCT </Button>
      </Link>
    </div>
  )
}
