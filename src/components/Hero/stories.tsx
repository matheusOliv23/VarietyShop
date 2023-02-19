import { ComponentStory, ComponentMeta } from "@storybook/react"

import Hero from "./index"

export default {
  title: "Hero",
  component: Hero
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = () => <Hero />

export const Default = Template.bind({})
Default.args = {}
