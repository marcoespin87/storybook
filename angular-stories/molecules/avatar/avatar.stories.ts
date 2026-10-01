import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Molecules/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  args: {
    label: 'SM',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Texto o inicial si no hay imagen.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    ariaLabelAvatar: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del avatar.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    image: {
      control: { type: 'text' },
      description: 'URL de imagen.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    size: {
      control: { type: 'select' },
      options: ['SM', 'MD', 'LG', 'XL'],
      description: 'Tamaño del avatar.',
      table: { defaultValue: { summary: 'MD' } },
    },
    color: {
      control: { type: 'select' },
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
      description: 'Color del avatar.',
      table: { defaultValue: { summary: 'PRIMARY' } },
    },
    performAction: {
      control: { type: 'boolean' },
      description: 'Indica si ejecuta una acción al hacer clic.',
      table: { defaultValue: { summary: 'false' } },
    },
    pboClick: {
      action: 'pboClick',
      description: 'Evento emitido al hacer clic.',
      // ver documento: valor por defecto no especificado
    },
  },
  parameters: {
    docs: {
      // ver documento: description via componentImportDoc('AvatarComponent')
      source: {
        // ver documento: transform normaliza bindings string, elimina valores undefined,
        // abrevia booleanos true, elimina false y autocierra elementos vacíos
        transform: (code: string) => code,
      },
    },
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'SM' /* ver documento: valor del label no indicado */ },
};

export const WithImage: Story = {
  args: {
    label: undefined,
    image: '', // ver documento: URL externa de PrimeFaces, valor exacto no indicado
  },
};

export const SmallSize: Story = { args: { size: 'SM' as any } };
export const MediumSize: Story = { args: { size: 'MD' as any } };
export const LargeSize: Story = { args: { size: 'LG' as any } };
export const ExtraLargeSize: Story = { args: { size: 'XL' as any } };

export const Primary: Story = { args: { color: 'PRIMARY' as any } };
export const Secondary: Story = { args: { color: 'SECONDARY' as any } };
export const Tertiary: Story = { args: { color: 'TERTIARY' as any } };

export const InteractiveAvatar: Story = {
  args: { performAction: true },
};

export const DifferentColors: Story = {
  render: (args) => ({
    props: args,
    template: `
      <pbo-avatar label="SM" color="PRIMARY"></pbo-avatar>
      <pbo-avatar label="SM" color="SECONDARY"></pbo-avatar>
      <pbo-avatar label="SM" color="TERTIARY"></pbo-avatar>
    `,
  }),
};

export const DifferentSizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <pbo-avatar label="SM" size="SM"></pbo-avatar>
      <pbo-avatar label="SM" size="MD"></pbo-avatar>
      <pbo-avatar label="SM" size="LG"></pbo-avatar>
      <pbo-avatar label="SM" size="XL"></pbo-avatar>
    `,
  }),
};
