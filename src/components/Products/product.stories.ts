import Product from "./Product.vue";
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: "Products/Product",
  component:Product,
  args: {
    user:{
      userId:1,
      name: "John Doe",
      email: "john@doe.email.com"
    }
  }
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  }
}