import Image from "next/image"
import Link from "next/link"
import Button from "../Button"

interface ProductItemProps {
  id: string
  price: number
  name: string
  image: string
}

export default function ProductItem({
  id,
  image,
  price,
  name
}: ProductItemProps) {
  return (
    <div key={id} className="w-[223px] flex flex-col items-center">
      <div className="w-[223px] rounded-lg flex items-center justify-center py-8 bg-gray-100">
        <Image
          width={148}
          height={193}
          className="w-36 h-48"
          src={image}
          alt={name}
        />
      </div>

      <div className="flex flex-col items-center py-3">
        <p className="font-bold">{name}</p>

        <p className="text-2xl">R$ {price}</p>
      </div>

      <Link href={`/products/${id}`}>
        <Button variant="PRIMARY">SEE PRODUCT</Button>
      </Link>
    </div>
  )
}
