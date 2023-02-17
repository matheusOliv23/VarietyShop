import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Main from "./index"

export default {
  title: "Main",
  component: Main
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: "Boilerplate",
  description: "Typescript, Reactjs, Nextjs, Styled Components"
}
