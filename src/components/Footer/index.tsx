import { NavType } from "../Header"
import Image from "next/image"
import { Icon } from "@iconify/react"
import Link from "next/link"

interface SocialIcons {
  id: string
  icon: string
  href: string
}
interface FooterProps {
  menu: NavType[]
  text: string
  allRights: string
  socialIcons: SocialIcons[]
}

export default function Footer({
  menu,
  text,
  allRights,
  socialIcons
}: FooterProps) {
  return (
    <footer className="bg-dark-50 w-full mt-10">
      <div className="md:h-[400px] max-w-7xl m-auto md:px-10 lg:pt-16 px-6 py-10 md:pb-11 md:pt-14 w-full">
        <div className="mb-9 items-center gap-6 flex md:flex-row flex-col justify-between">
          <Image
            alt="Logo image"
            width={143}
            height={25}
            src="/icons/logo.svg"
          />
          <div className="hidden gap-8 md:flex text-white">
            {menu.map((item) => (
              <li
                key={item.id}
                data-testid="footer-item"
                className="hover:text-orange-100 list-none transition duration-500"
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
          </div>
        </div>

        <p className="font-medium text-center md:text-left font-manrope lg:max-w-[540px] text-white mb-14 opacity-50">
          {text}
        </p>

        <div className="flex md:flex-row flex-col items-center gap-6 justify-center md:justify-between">
          <p className="font-bold opacity-50 text-white">{allRights}</p>
          <div className="flex gap-4">
            {socialIcons.map((item) => (
              <a
                data-testid="social-item"
                className="cursor-pointer transition-all ease-out duration-500 hover:text-orange-100 text-white"
                key={item.id}
                target="_blank"
                href={item.href}
                rel="noreferrer"
              >
                <Icon width={32} height={32} icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
