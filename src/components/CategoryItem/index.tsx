import Image from "next/image"
import Link from "next/link"

interface CategoryProps {
  title: string
  route: string
  img: string
}

export default function CategoryItem({ img, route, title }: CategoryProps) {
  return (
    <div
      data-testid="category-item"
      className="relative rounded-lg h-[165px] flex-col flex items-center justify-center bg-gray-100 w-[327px] md:w-[350px]"
    >
      <Image
        className="absolute -top-12"
        width={80}
        height={104}
        alt={title}
        src={img}
      />
      <p className="uppercase font-bold text-black mt-[50px] mb-[18px]">
        {title}
      </p>
      <Link
        href={route}
        className="text-sm hover:text-orange-100 flex items-center gap-3 text-black opacity-50 font-bold"
      >
        SHOP
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.32178 1L6.32178 6L1.32178 11"
            stroke="#D87D4A"
            strokeWidth="2"
          />
        </svg>
      </Link>
    </div>
  )
}
