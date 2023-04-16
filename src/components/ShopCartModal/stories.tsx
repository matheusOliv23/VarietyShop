import { ComponentStory, ComponentMeta } from "@storybook/react"

import ShopCartModal from "./index"

export default {
  title: "ShopCartModal",
  component: ShopCartModal
} as ComponentMeta<typeof ShopCartModal>

const Template: ComponentStory<typeof ShopCartModal> = (args) => (
  <ShopCartModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  open: true,
  onClose: () => {
    return true
  }
}
