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
  product: { name: headlineMock.product.name, id: "", image: "", price: 1 , description: headlineMock.product.description},
  text: headlineMock.text,
  variation: "dark"
}

export const LightTheme = Template.bind({})
LightTheme.args = {
  product: { name: headlineMock.product.name, id: "", image: "", price: 1, description: headlineMock.product.description },
  text: headlineMock.text,
  variation: "light"
}
