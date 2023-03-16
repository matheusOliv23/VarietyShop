import { ComponentStory, ComponentMeta } from "@storybook/react"
import { navMock } from "../Header/mock"

import Footer from "./index"
import { footerMock, socialMock } from "./mock"


export default {
  title: "Footer",
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  menu: navMock,
  allRights: footerMock.allRights,
  socialIcons: socialMock
}
