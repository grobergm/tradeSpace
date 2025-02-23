import User from "./User.vue";
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: "People/Profile",
  component:User,
  args: {
    user:{
      userId:1,
      name: "John Doe",
      email: "john@doe.email.com"
    }
  }
} satisfies Meta<typeof User>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  }
}