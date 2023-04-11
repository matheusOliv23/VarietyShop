import { ComponentStory, ComponentMeta } from "@storybook/react"

import Modal from "./index"

export default {
  title: "Modal",
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Modal",
  open: true,
  onClose: () => {
    return true
  }
}
