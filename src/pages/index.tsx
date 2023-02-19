import type { NextPage } from "next"
import Header from "src/components/Header"
import { navMock } from "src/components/Header/mock"
import Hero from "src/components/Hero"

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Header nav={navMock} />
      <Hero />
    </>
  )
}
export default Home
