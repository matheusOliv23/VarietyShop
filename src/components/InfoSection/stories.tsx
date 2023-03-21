import { ComponentStory, ComponentMeta } from "@storybook/react"

import InfoSection from "./index"
import { infoMock } from "./mock"

export default {
  title: "InfoSection",
  component: InfoSection
} as ComponentMeta<typeof InfoSection>

const Template: ComponentStory<typeof InfoSection> = (args) => (
  <InfoSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: infoMock.title,
  image: infoMock.image,
  text: infoMock.text
}
