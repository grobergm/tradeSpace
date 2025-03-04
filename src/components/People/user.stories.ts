import User from "./User.vue";
import type { Meta, StoryObj } from '@storybook/vue3';
import { mockUser } from "./mockData";
const meta = {
  title: "People/User",
  component: User,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/AkbpTGfG2bfJZiyPOmdIVn/Designs?node-id=7-10&t=3UUlQI2D6kJwKOO7-1"
    }
  }
} satisfies Meta<typeof User>;

export default meta;

type Story = StoryObj<typeof meta>

export const NoImage: Story = {
  args: {
    user: {
      userId: 1,
      name: "John Doe",
      email: "john@doe.email.com"
    }
  },
}

export const HasImage: Story = {
  args: {
    user: mockUser
  },
}