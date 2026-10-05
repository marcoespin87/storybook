/*eslint-disable @typescript-eslint/naming-convention */
import { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from '../../app/components';
import { componentImportDoc } from '../utils';

const meta: Meta<FooterComponent> = {
  title: 'Organisms/Footer',
  tags: ['autodocs'],
  component: FooterComponent,
  argTypes: {
    label: {
      control: 'text',
      description: 'Text to show in footer component.',
      table: {
        defaultValue: { summary: 'All rights reserved.' }
      }
    }
  },
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#f5f5f5' },
        gray: { name: 'Gray', value: '#f5f5f5' }
      }
    },
    docs: {
      source: {
        transform: (source: string) =>
          source
            .replaceAll(/\[([\w+]+)\]="'([^']+)'"/g, '$1="$2"')
            .replaceAll(/\s*\[([\w+]+)\]="undefined"/g, '')
            .replaceAll(/<([\w-]+)([^>]*)><\/\1>/g, '<$1$2 />')
      },
      description: {
        component: componentImportDoc('FooterComponent')
      }
    }
  }
};

export default meta;

type Story = StoryObj<FooterComponent>;

export const Simple: Story = {
  globals: {
    backgrounds: { value: 'gray' }
  }
};

export const CustomText: Story = {
  globals: {
    backgrounds: { value: 'gray' }
  },
  args: {
    label: 'Custom all rights reserved'
  }
};
