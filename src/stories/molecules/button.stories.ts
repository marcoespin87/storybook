import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ButtonComponent } from '../../app/components/button/button.component';

// ver documento: buttonIconUrl es la ruta de icono de ejemplo, valor no indicado
const buttonIconUrl = '';

const meta: Meta<ButtonComponent> = {
  title: 'Molecules/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    color: 'primary',
    iconPosition: 'left',
    pboClick: fn(),
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Etiqueta del botón.',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'alert'],
      description: 'Color/familia visual.',
      table: { defaultValue: { summary: 'primary' } },
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo nativo del botón.',
      table: { defaultValue: { summary: 'button' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el botón.',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: { type: 'boolean' },
      mapping: { true: buttonIconUrl, false: undefined },
      if: { arg: 'link', truthy: false }, // visible si link es falso
      description: 'Activa el icono mediante mapeo.',
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      if: { arg: 'icon' }, // visible si existe icon
      description: 'Posición del icono.',
      table: { defaultValue: { summary: 'left' } },
    },
    link: {
      control: { type: 'boolean' },
      description: 'Presenta el botón como enlace.',
      table: { defaultValue: { summary: 'false' } },
    },
    linkSize: {
      control: { type: 'select' },
      options: ['lg', 'md', 'sm', 'xs'],
      if: { arg: 'link', truthy: true }, // visible si link es true
      description: 'Tamaño del enlace.',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta ARIA.',
    },
    class: {
      control: { type: 'text' },
      description: 'Clases CSS del host.',
    },
    pboClick: {
      action: 'pboClick',
      description: 'Evento emitido al hacer clic.',
      table: { category: 'Events', type: { summary: 'OutputEmitterRef<Event>' } },
    },
  },
  parameters: {
    docs: {
      // ver documento: description via componentImportDoc('ButtonComponent')
      source: {
        // ver documento: transform normaliza bindings string, elimina bindings undefined,
        // abrevia booleanos true y elimina false, oculta iconPosition="left" (valor por defecto),
        // sustituye rutas de iconos locales por icon="{{RUTA_ICONO}}" y autocierra elementos vacíos
        transform: (code: string) => code,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// ver documento: variant se usa en las stories (neutral, secondary, vertical) pero NO está en argTypes global.
// ver documento: Secondary (familia neutral completa), Tertiary (vertical y familia neutral completa) y
// Alert (secondary y neutral completas) tienen base, icono izquierdo, icono derecho y solo icono con
// `variant`, pero los nombres de esas stories no se indican (solo AlertSecondary y AlertDisabled se nombran).

/* Primary */
export const Primary: Story = {
  args: { label: 'Primary', color: 'primary', class: 'w-full md:w-auto' },
  argTypes: { color: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'alert'] } },
  // ver documento: defaultValue: 'primary' se incluye fuera de table.defaultValue
};
export const PrimaryIconLeft: Story = {
  args: { label: 'Primary', color: 'primary', icon: buttonIconUrl as any, iconPosition: 'left', class: 'w-full md:w-auto' },
};
export const PrimaryIconRight: Story = {
  args: { label: 'Primary', color: 'primary', icon: buttonIconUrl as any, iconPosition: 'right', class: 'w-full md:w-auto' },
};
export const PrimaryIconOnly: Story = {
  args: { color: 'primary', icon: buttonIconUrl as any, iconPosition: 'right' },
};

/* Secondary */
export const Secondary: Story = {
  args: { label: 'Secondary', color: 'secondary', class: 'w-full md:w-auto' },
  // ver documento: control booleano `neutral` mapea true -> 'neutral' (variant), false -> undefined
  argTypes: { neutral: { control: { type: 'boolean' }, mapping: { true: 'neutral', false: undefined } } as any },
};
export const SecondaryIconLeft: Story = {
  args: { label: 'Secondary', color: 'secondary', icon: buttonIconUrl as any, iconPosition: 'left', class: 'w-full md:w-auto' },
};
export const SecondaryIconRight: Story = {
  args: { label: 'Secondary', color: 'secondary', icon: buttonIconUrl as any, iconPosition: 'right', class: 'w-full md:w-auto' },
};
export const SecondaryIconOnly: Story = {
  args: { color: 'secondary', icon: buttonIconUrl as any },
};

/* Tertiary */
export const Tertiary: Story = {
  args: { label: 'Tertiary', color: 'tertiary', class: 'w-full md:w-auto' },
};
export const TertiaryIconLeft: Story = {
  args: { label: 'Tertiary', color: 'tertiary', icon: buttonIconUrl as any, iconPosition: 'left', class: 'w-full md:w-auto' },
};
export const TertiaryIconRight: Story = {
  args: { label: 'Tertiary', color: 'tertiary', icon: buttonIconUrl as any, iconPosition: 'right', class: 'w-full md:w-auto' },
};
export const TertiaryIconOnly: Story = {
  args: { color: 'tertiary', icon: buttonIconUrl as any },
};
export const TertiaryIconFavorite: Story = {
  // ver documento: usa un signal y alterna entre dos rutas de icono al emitirse pboClick
  args: { color: 'tertiary', icon: buttonIconUrl as any },
  render: (args) => ({
    props: args,
    template: `<pbo-button color="tertiary" (pboClick)="toggle()"></pbo-button>`,
  }),
};

/* Alert */
export const Alert: Story = {
  args: { label: 'Alert', color: 'alert', class: 'w-full md:w-auto' },
};
export const AlertIconLeft: Story = {
  args: { label: 'Alert', color: 'alert', icon: buttonIconUrl as any, iconPosition: 'left', class: 'w-full md:w-auto' },
};
export const AlertIconRight: Story = {
  args: { label: 'Alert', color: 'alert', icon: buttonIconUrl as any, iconPosition: 'right', class: 'w-full md:w-auto' },
};
export const AlertIconOnly: Story = {
  args: { color: 'alert', icon: buttonIconUrl as any },
};
export const AlertDisabled: Story = {
  args: { label: 'Alert', color: 'alert', disabled: true, class: 'w-full md:w-auto' },
};
export const AlertSecondary: Story = {
  args: { label: 'Alert', color: 'alert', class: 'w-full md:w-auto' },
  // ver documento: control booleano `secondary` mapea true -> 'secondary' (variant), false -> undefined
  argTypes: { secondary: { control: { type: 'boolean' }, mapping: { true: 'secondary', false: undefined } } as any },
};

/* Link: solo color primary y secondary */
export const PrimaryLink: Story = {
  args: { label: 'Primary', color: 'primary', link: true },
  argTypes: { color: { control: { type: 'select' }, options: ['primary', 'secondary'] } },
};
export const PrimaryLinkLarge: Story = { args: { label: 'Primary', color: 'primary', link: true, linkSize: 'lg' } };
export const PrimaryLinkMedium: Story = { args: { label: 'Primary', color: 'primary', link: true, linkSize: 'md' } };
export const PrimaryLinkSmall: Story = { args: { label: 'Primary', color: 'primary', link: true, linkSize: 'sm' } };
export const PrimaryLinkExtraSmall: Story = { args: { label: 'Primary', color: 'primary', link: true, linkSize: 'xs' } };

export const SecondaryLink: Story = {
  args: { label: 'Secondary', color: 'secondary', link: true },
  argTypes: { color: { control: { type: 'select' }, options: ['primary', 'secondary'] } },
};
export const SecondaryLinkLarge: Story = { args: { label: 'Secondary', color: 'secondary', link: true, linkSize: 'lg' } };
export const SecondaryLinkMedium: Story = { args: { label: 'Secondary', color: 'secondary', link: true, linkSize: 'md' } };
export const SecondaryLinkSmall: Story = { args: { label: 'Secondary', color: 'secondary', link: true, linkSize: 'sm' } };
export const SecondaryLinkExtraSmall: Story = { args: { label: 'Secondary', color: 'secondary', link: true, linkSize: 'xs' } };

export const PrimaryLinkWithGridResponsive: Story = {
  // ver documento: link dentro de una cuadrícula responsive y con texto contextual (markup exacto no indicado)
  args: { label: 'Primary', color: 'primary', link: true },
  render: (args) => ({
    props: args,
    template: `<div class="grid"><p></p><pbo-button color="primary" link></pbo-button></div>`,
  }),
};
