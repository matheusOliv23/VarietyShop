import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "styles/global"
import { theme } from "styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="descript"
          content="Projeto inicial simples com Typescript, Reactjs, Nextjs e Styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
