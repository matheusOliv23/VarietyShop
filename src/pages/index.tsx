import type { NextPage } from "next"
import Categories from "src/components/Categories"
import { categories } from "src/components/Categories/categories"
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
    </>
  )
}
export default Home
