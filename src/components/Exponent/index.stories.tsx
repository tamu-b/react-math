import type { Meta, StoryObj } from '@storybook/react-vite'

import { Exponent } from '.'

const meta = {
  component: Exponent,
  tags: ['autodocs'],
} satisfies Meta<typeof Exponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    base: 2,
    exponent: 3,
  },
}
