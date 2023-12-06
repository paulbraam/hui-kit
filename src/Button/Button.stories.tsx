import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './Button';
import { ButtonSizes } from './Button.types';
import { theme } from '../styles/theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button'
  }
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: ButtonSizes.LARGE
  }
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: ButtonSizes.SMALL
  }
};
