import { ComponentStory, ComponentMeta } from "@storybook/react"

import ProductItem from "./index"

export default {
  title: "ProductItem",
  component: ProductItem
} as ComponentMeta<typeof ProductItem>

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  id: "1",
  name: "XX99 MARK II",
  image: "/images/phone_small.svg",
  price: 250
}
