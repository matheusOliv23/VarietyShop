import { ComponentStory, ComponentMeta } from "@storybook/react"
import { categories } from "./categories"

import Categories from "./index"

export default {
  title: "Categories",
  component: Categories
} as ComponentMeta<typeof Categories>

const Template: ComponentStory<typeof Categories> = (args) => (
  <Categories {...args} />
)

export const Default = Template.bind({})
Default.args = {
  category: categories
}
