import { ComponentStory, ComponentMeta } from "@storybook/react"

import CategoryItem from "./index"

export default {
  title: "CategoryItem",
  component: CategoryItem
} as ComponentMeta<typeof CategoryItem>

const Template: ComponentStory<typeof CategoryItem> = (args) => (
  <CategoryItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: "HEADPHONES",
  route: "/headphones",
  img: "/images/phone_small.svg"
}
