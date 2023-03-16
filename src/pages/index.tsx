import type { NextPage } from "next"
import Categories from "src/components/Categories"
import { categories } from "src/components/Categories/categories"
import Footer from "src/components/Footer"
import { footerMock } from "src/components/Footer/mock"
import Header from "src/components/Header"
import { navMock } from "src/components/Header/mock"
import Hero from "src/components/Hero"

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Header nav={navMock} />
      <Hero />
      <Categories category={categories} />
      <Footer {...footerMock} />
    </>
  )
}
export default Home
