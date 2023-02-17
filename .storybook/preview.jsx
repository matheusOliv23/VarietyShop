// .storybook/preview.js

import React from "react"
import GlobalStyles from "../src/styles/global"

import { ThemeProvider } from "styled-components"

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
