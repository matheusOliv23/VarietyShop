import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="descript"
          content="Projeto inicial simples com Typescript, Reactjs, Nextjs e Styled components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
