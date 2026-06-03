import type { Meta, StoryObj } from '@storybook/react-vite';

import { Exponent } from '.';

const meta = {
  component: Exponent,
  tags: ['autodocs'],
} satisfies Meta<typeof Exponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    base: 2,
    exponent: 3,
  },
};

export const NestedExponent: Story = {
  args: {
    base: 2,
    exponent: <Exponent base={3} exponent={4} />,
  },
};

export const BaseHasExponent: Story = {
  args: {
    base: <Exponent base={2} exponent={3} />,
    exponent: 4,
  },
};
