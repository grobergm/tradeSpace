import Trade from "./Trade.vue";
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: "Products/Trade",
  component:Trade,
  args: {
    user:{
      userId:1,
      name: "John Doe",
      email: "john@doe.email.com"
    }
  }
} satisfies Meta<typeof Trade>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  }
}