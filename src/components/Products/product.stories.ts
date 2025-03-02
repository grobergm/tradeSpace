import ProductSearch from "./ProductSearch.vue";
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: "Products/Product",
  component:ProductSearch,
  args: {

  }
} satisfies Meta<typeof ProductSearch>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

  }
}