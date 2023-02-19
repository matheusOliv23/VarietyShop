import type { NextPage } from "next"
import Header from "src/components/Header"
import { navMock } from "src/components/Header/mock"

const Home: NextPage = () => {
  return <Header nav={navMock} />
}

export default Home
