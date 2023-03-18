import { ComponentStory, ComponentMeta } from "@storybook/react"

import Headline from "./index"
import { headlineMock } from "./mock"

export default {
  title: "Headline",
  component: Headline
} as ComponentMeta<typeof Headline>

const Template: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: headlineMock.title,
  subtitle: headlineMock.subtitle,
  text: headlineMock.text,
  variation: "dark"
}

export const LightTheme = Template.bind({})
LightTheme.args = {
  title: headlineMock.title,
  subtitle: headlineMock.subtitle,
  text: headlineMock.text,
  variation: "light"
}
