import Image from "next/image"
import Link from "next/link"

export interface NavType {
  id: number
  title: string
  route: string
}

interface NavItemsProps {
  nav: NavType[]
}

export default function Header({ nav }: NavItemsProps) {
  return (
    <header
      className="bg-dark-150 m-auto py-8 px-10 w-full text-white"
      data-testid="navbar"
    >
      <div className="flex items-center justify-between m-auto pb-6 max-w-7xl border-b-[0.2px] border-[#ffffff14]">
        <span className="flex gap-10 items-center">
          <p className="md:hidden flex">
            <Image
              alt="Menu icon"
              width={16}
              height={15}
              src="/icons/menu.svg"
            />
          </p>

          <Image
            alt="Logo image"
            width={143}
            height={25}
            src="/icons/logo.svg"
          />
        </span>

        <nav className="flex items-center">
          <ul className="md:flex hidden transition ease duration-500 text-xs font-bold space-x-9">
            {nav.map((item) => (
              <li
                key={item.id}
                className="hover:text-orange-100 transition duration-500"
              >
                <Link
                  href={item.route}
                  data-testid={`nav-item`}
                  key={item.id}
                  passHref
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Image alt="Card icon" width={24} height={23} src="/icons/cart.svg" />
      </div>
    </header>
  )
}
