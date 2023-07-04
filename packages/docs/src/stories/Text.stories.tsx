import type { Meta, StoryObj } from '@storybook/react';
import { Text, ITextProps } from '@ihenrits-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        ' md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<ITextProps>;

export const Primary: StoryObj<ITextProps> = {};

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
