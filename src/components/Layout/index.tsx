import React from "react"
import Footer from "../Footer"
import { footerMock } from "../Footer/mock"
import Header from "../Header"
import { navMock } from "../Header/mock"

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header nav={navMock} />
      <main>{children}</main>
      <Footer {...footerMock} />
    </>
  )
}
