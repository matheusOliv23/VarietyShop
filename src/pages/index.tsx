import type { NextPage } from "next"
import Categories from "src/components/Categories"
import { categories } from "src/components/Categories/categories"
import Hero from "src/components/Hero"
import Layout from "src/components/Layout"

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Categories category={categories} />
    </Layout>
  )
}
export default Home
