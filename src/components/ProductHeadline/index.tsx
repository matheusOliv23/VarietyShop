import Image from "next/image"
import Headline from "../Headline"
import { ProductItemProps } from "../ProductItem"

interface ProductHeadline {
  product: ProductItemProps
}

export default function ProductHeadline({ product }: ProductHeadline) {
  return (
    <section className="flex even:flex-row-reverse items-center lg:justify-between md:flex-row flex-col my-40 justify-around">
      <div className="md:w-[370px] lg:w-[540px] flex justify-center items-center bg-gray-100 md:h-[380px] lg:h-[560px] w-4/5">
        <Image
          width={350}
          height={350}
          src={product.image}
          alt={product.name}
        />
      </div>

      <Headline text="New Product" product={product} />
    </section>
  )
}
