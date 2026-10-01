import type { Meta, StoryObj } from '@storybook/angular';
import { DataComponent } from './data.component';

const meta: Meta<DataComponent> = {
  title: 'Molecules/Data',
  component: DataComponent,
  tags: ['autodocs'],
  // ver documento: no se definen args globales; cada story configura sus propios valores
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['simple', 'double', 'triple', 'caption'],
      description: 'Formato de presentación.',
    },
    simpletext: {
      control: { type: 'text' },
      description: 'Texto primario.',
    },
    doubleText: {
      control: { type: 'text' },
      description: 'Texto secundario.',
    },
    tripleText: {
      control: { type: 'text' },
      description: 'Texto terciario.',
    },
    showAvatar: {
      control: { type: 'boolean' },
      description: 'Muestra un avatar junto al texto.',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Muestra un icono junto al texto.',
    },
    textPosition: {
      control: { type: 'select' },
      options: ['right', 'left'],
      description: 'Posición del texto dentro del componente.',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible.',
    },
  },
  parameters: {
    docs: {
      // ver documento: la configuración usa la clave `descrition` (sin segunda "p"), no `description`
      descrition: { component: '' },
      // ver documento: no se configura source.transform ni table.defaultValue
    },
  },
};

export default meta;
type Story = StoryObj<DataComponent>;

// ver documento: los textos exactos de cada story no se indican; solo qué campos se usan
export const Default: Story = {
  args: { type: 'simple', simpletext: '', showIcon: true },
};

export const DoubleData: Story = {
  args: { type: 'double', simpletext: '', doubleText: '', showIcon: true },
};

export const Caption: Story = {
  args: { type: 'caption', simpletext: '', doubleText: '', showIcon: true },
};

export const Simple: Story = {
  args: { type: 'simple', simpletext: '' },
};

export const Double: Story = {
  args: { type: 'double', simpletext: '', doubleText: '' },
};

export const DoubleTextRight: Story = {
  args: { type: 'double', simpletext: '', doubleText: '', textPosition: 'right' },
};

export const Triple: Story = {
  args: { type: 'triple', simpletext: '', doubleText: '', tripleText: '', textPosition: 'left' },
};

export const AvatarData: Story = {
  args: { type: 'triple', simpletext: '', doubleText: '', tripleText: '', textPosition: 'left', showAvatar: true },
};
