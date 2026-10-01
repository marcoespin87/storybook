import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<BadgeComponent> = {
  title: 'Molecules/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  args: {
    text: 'Badge Text',
    alt: 'Badge icon',
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['SUCCESS', 'WARNING', 'ERROR', 'INFORMATIVE', 'NEUTRAL'],
      description: 'Estado semántico; define color e icono predeterminados.',
      table: { defaultValue: { summary: 'SUCCESS' } },
    },
    text: {
      control: { type: 'text' },
      description: 'Texto mostrado dentro del badge.',
      // ver documento: valor documentado "required", no es un valor por defecto
    },
    alt: {
      control: { type: 'text' },
      description: 'Texto alternativo del icono.',
      table: { defaultValue: { summary: '""' } },
    },
    color: {
      control: { type: 'text' },
      description: 'Color de fondo personalizado; si es nulo se usa el del estado.',
      table: { defaultValue: { summary: 'null' } },
    },
    iconPath: {
      control: { type: 'text' },
      description: 'Ruta de icono personalizada.',
      table: { defaultValue: { summary: 'null' } },
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Controla si se muestra el icono.',
      table: { defaultValue: { summary: 'false' } },
    },
    feature: {
      control: { type: 'boolean' },
      description: 'Activa la presentación especial de feature.',
      table: { defaultValue: { summary: 'false' } },
    },
    withSparks: {
      control: { type: 'boolean' },
      description: 'Añade sparks al feature.',
      table: { defaultValue: { summary: 'false' } },
    },
    dotStyle: {
      control: { type: 'boolean' },
      description: 'Activa la presentación dot style.',
      table: { defaultValue: { summary: 'false' } },
    },
    ariaLabelBadge: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del badge.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    ariaLabelIcon: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del icono.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    ariaLabelText: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del texto.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    size: {
      control: { type: 'select' },
      options: ['MD', 'XS'],
      description: 'Tamaño del status badge.',
      table: { defaultValue: { summary: 'undefined' } },
    },
  },
  parameters: {
    docs: {
      // ver documento: description via componentImportDoc('BadgeComponent')
      source: {
        // ver documento: transform limpia el snippet (bindings string a atributos simples,
        // booleanos true abreviados, booleanos false eliminados, elementos vacíos autocerrados)
        transform: (code: string) => code,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent], // solo usado por DotStyleWithButton
    }),
  ],
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: { text: 'Badge Text', showIcon: true },
};

export const StatusBadge: Story = {
  args: { text: 'Warning', status: 'WARNING' as any, showIcon: true },
};

export const FeatureBadge: Story = {
  args: { text: 'Feature', feature: true },
};

export const FeatureBadgeWithSparks: Story = {
  args: { feature: true, withSparks: true },
};

export const DotStyleBadge: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-badge text="44" dotStyle></pbo-badge>`,
  }),
};

export const CustomColorIconBadge: Story = {
  args: { color: '#885CF6', showIcon: true, iconPath: '' /* ver documento: ruta no indicada */, alt: 'Badge icon' },
};

export const StatusWithIcon: Story = {
  render: (args) => ({
    props: args,
    // ver documento: grupo SUCCESS, WARNING, ERROR e INFORMATIVE, todos con showIcon (sin NEUTRAL)
    template: `
      <pbo-badge text="Success" status="SUCCESS" showIcon></pbo-badge>
      <pbo-badge text="Warning" status="WARNING" showIcon></pbo-badge>
      <pbo-badge text="Error" status="ERROR" showIcon></pbo-badge>
      <pbo-badge text="Informative" status="INFORMATIVE" showIcon></pbo-badge>
    `,
  }),
};

export const StatusWithoutIcon: Story = {
  render: (args) => ({
    props: args,
    // ver documento: grupo de los cinco estados sin icono
    template: `
      <pbo-badge text="Success" status="SUCCESS"></pbo-badge>
      <pbo-badge text="Warning" status="WARNING"></pbo-badge>
      <pbo-badge text="Error" status="ERROR"></pbo-badge>
      <pbo-badge text="Informative" status="INFORMATIVE"></pbo-badge>
      <pbo-badge text="Neutral" status="NEUTRAL"></pbo-badge>
    `,
  }),
};

export const BadgeVariations: Story = {
  render: (args) => ({
    props: args,
    // ver documento: tres badges dot style con contenido proyectado (imágenes) y textos "", 12, +99
    template: `
      <pbo-badge text="" dotStyle></pbo-badge>
      <pbo-badge text="12" dotStyle></pbo-badge>
      <pbo-badge text="+99" dotStyle></pbo-badge>
    `,
  }),
};

export const DotStyleWithButton: Story = {
  render: (args) => ({
    props: args,
    // ver documento: ButtonComponent proyectado dentro del badge
    template: `<pbo-badge text="44" dotStyle><pbo-button></pbo-button></pbo-badge>`,
  }),
};
