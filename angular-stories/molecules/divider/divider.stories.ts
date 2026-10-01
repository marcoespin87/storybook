import type { Meta, StoryObj } from '@storybook/angular';
import { DividerComponent } from './divider.component';

// ver documento: no indica de dónde se importan ColorsEnum ni componentImportDoc.

const meta: Meta<DividerComponent> = {
  title: 'Molecules/Divider',
  component: DividerComponent,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [ColorsEnum.PRIMARY, ColorsEnum.SECONDARY],
      description: 'Color del divisor.',
      table: { defaultValue: { summary: 'PRIMARY' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del divisor.',
      table: { defaultValue: { summary: 'undefined' } },
    },
  },
  parameters: {
    docs: {
      description: { component: componentImportDoc('DividerComponent') },
      source: {
        // transform: convierte bindings string en atributos simples; autocierra elementos vacíos.
        transform: (code: string) => code,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DividerComponent>;

export const Primary: Story = { args: { color: ColorsEnum.PRIMARY } };
export const Secondary: Story = { args: { color: ColorsEnum.SECONDARY } };
