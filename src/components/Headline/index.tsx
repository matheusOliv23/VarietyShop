import Link from "next/link"
import Button from "../Button"
import { ProductItemProps } from "../ProductItem"

interface HeadlineProps {
  product: ProductItemProps
  subtitle: string
  variation?: "light" | "dark"
  category?: string
  text: string
}
export default function Headline({
  category,
  subtitle,
  product,
  variation = "dark",
  text
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
        {product.name}
      </h1>
      <p
        className={`${
          variation === "dark" ? "text-black" : "text-white"
        } font-medium opacity-75 max-w-sm m-auto lg:m-0 !mb-10`}
      >
        {subtitle}
      </p>
      <Link href={`/${category}/${product.id}`} passHref>
        <Button variant="PRIMARY">SEE PRODUCT </Button>
      </Link>
    </div>
  )
}
