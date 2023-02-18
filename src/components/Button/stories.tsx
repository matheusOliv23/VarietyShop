import { ComponentStory, ComponentMeta } from "@storybook/react"

import Button from "./index"

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "See Product",
  variant: "PRIMARY"
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "See Product",
  variant: "SECONDARY"
}

export const Black = Template.bind({})
Black.args = {
  children: "See Product",
  variant: "BLACK"
}
