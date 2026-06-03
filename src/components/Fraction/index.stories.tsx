import type { Meta, StoryObj } from '@storybook/react-vite';

import { Fraction } from '.';

const meta = {
  component: Fraction,
  tags: ['autodocs'],
} satisfies Meta<typeof Fraction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numerator: 1,
    denominator: 2,
  },
};

export const LongNumerator: Story = {
  args: {
    numerator: 1234567,
    denominator: 2,
  },
};

export const LongDenominator: Story = {
  args: {
    numerator: 1,
    denominator: 1234567,
  },
};

export const ComplexFraction: Story = {
  args: {
    numerator: <Fraction numerator={1} denominator={2} />,
    denominator: <Fraction numerator={3} denominator={4} />,
  },
};
