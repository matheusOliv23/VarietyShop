import { ComponentStory, ComponentMeta } from "@storybook/react"
import { headlineMock } from "../Headline/mock"

import ProductHeadline from "./index"

export default {
  title: "ProductHeadline",
  component: ProductHeadline
} as ComponentMeta<typeof ProductHeadline>

const Template: ComponentStory<typeof ProductHeadline> = (args) => (
  <ProductHeadline {...args} />
)

export const Default = Template.bind({})
Default.args = {
  product: headlineMock.product
}
