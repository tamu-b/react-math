import type { Meta, StoryObj } from '@storybook/react-vite';

import { Exponent } from '../Exponent';
import { Math } from '.';

const meta = {
  component: Math,
  tags: ['autodocs'],
} satisfies Meta<typeof Math>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        E=m
        <Exponent base="c" exponent="2" />
      </>
    ),
  },
};
