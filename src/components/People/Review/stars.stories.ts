import Stars from "./Stars.vue";
import type { Meta, StoryObj } from '@storybook/vue3';
const meta = {
  title: "People/Stars",
  component: Stars,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/AkbpTGfG2bfJZiyPOmdIVn/Designs?node-id=33-1639&t=srtAmCSP4RfZPG81-1"
    }
  }
} satisfies Meta<typeof Stars>;

export default meta;

type Story = StoryObj<typeof meta>

export const noReviews: Story = {
  args: {
    stars:0,
    reviews:0
  },
}

export const hasReviews: Story = {
  args: {
    stars:4,
    reviews:10
  },
}