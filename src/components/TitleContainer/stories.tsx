import { ComponentStory, ComponentMeta } from "@storybook/react"

import TitleContainer from "./index"

export default {
  title: "TitleContainer",
  component: TitleContainer
} as ComponentMeta<typeof TitleContainer>

const Template: ComponentStory<typeof TitleContainer> = (args) => <TitleContainer {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'TitleContainer'
}

