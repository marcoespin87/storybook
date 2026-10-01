import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

// ver documento: no indica de dónde se importan IconSizeEnum, componentImportDoc,
// iconMono, iconBicolor, iconDisabled ni IMAGES_ROUTES; se usan como identificadores.

const meta: Meta<IconComponent> = {
  title: 'Molecules/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  args: {
    path: iconBicolor,
    alt: 'Home Icon',
    size: IconSizeEnum.SM,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      mapping: {
        sm: IconSizeEnum.SM,
        md: IconSizeEnum.MD,
        lg: IconSizeEnum.LG,
        xl: IconSizeEnum.XL,
        '2xl': IconSizeEnum['2XL'],
      },
      description: 'Define el tamaño del icono en píxeles.',
      table: { defaultValue: { summary: '24 (SM)' } },
    },
    path: {
      control: { type: 'text' },
      description: 'Recurso gráfico que renderiza el componente.',
    },
    alt: {
      control: { type: 'text' },
      description: 'Texto alternativo de la imagen.',
      table: { defaultValue: { summary: 'icon' } },
    },
    containerClass: {
      control: { type: 'text' },
      description: 'Clases adicionales del contenedor.',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del icono.',
      table: { defaultValue: { summary: 'undefined' } },
    },
  },
  parameters: {
    docs: {
      description: { component: componentImportDoc('IconComponent') },
      source: {
        // transform: convierte bindings string en atributos simples; elimina bindings con
        // undefined; abrevia booleanos verdaderos; elimina booleanos falsos; autocierra
        // elementos vacíos. ver documento: las expresiones regulares exactas no se detallan.
        transform: (code: string) => code,
      },
    },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const SmallMonochromatic: Story = { args: { size: IconSizeEnum.SM, path: iconMono } };
export const SmallBicolor: Story = { args: { size: IconSizeEnum.SM, path: iconBicolor } };
export const SmallDisabled: Story = { args: { size: IconSizeEnum.SM, path: iconDisabled } };
export const SmallError: Story = { args: { size: IconSizeEnum.SM, path: iconMono, containerClass: 'pbo-filter-red' } };

export const MediumMonochromatic: Story = { args: { size: IconSizeEnum.MD, path: iconMono } };
export const MediumBicolor: Story = { args: { size: IconSizeEnum.MD, path: iconBicolor } };
export const MediumDisabled: Story = { args: { size: IconSizeEnum.MD, path: iconDisabled } };
export const MediumError: Story = { args: { size: IconSizeEnum.MD, path: iconMono, containerClass: 'pbo-filter-red' } };

export const LargeMonochromatic: Story = { args: { size: IconSizeEnum.LG, path: iconMono } };
export const LargeBicolor: Story = { args: { size: IconSizeEnum.LG, path: iconBicolor } };
export const LargeDisabled: Story = { args: { size: IconSizeEnum.LG, path: iconDisabled } };
export const LargeError: Story = { args: { size: IconSizeEnum.LG, path: iconMono, containerClass: 'pbo-filter-red' } };

export const ExtraLargeMonochromatic: Story = { args: { size: IconSizeEnum.XL, path: iconMono } };
export const ExtraLargeBicolor: Story = { args: { size: IconSizeEnum.XL, path: iconBicolor } };
export const ExtraLargeDisabled: Story = { args: { size: IconSizeEnum.XL, path: iconDisabled } };
export const ExtraLargeError: Story = { args: { size: IconSizeEnum.XL, path: iconMono, containerClass: 'pbo-filter-red' } };

export const DoubleExtraLargeMonochromatic: Story = { args: { size: IconSizeEnum['2XL'], path: iconMono } };
export const DoubleExtraLargeBicolor: Story = { args: { size: IconSizeEnum['2XL'], path: iconBicolor } };
export const DoubleExtraLargeDisabled: Story = { args: { size: IconSizeEnum['2XL'], path: iconDisabled } };
export const DoubleExtraLargeError: Story = { args: { size: IconSizeEnum['2XL'], path: iconMono, containerClass: 'pbo-filter-red' } };

// Demuestra que `size` también acepta un número fuera del selector; hereda path bicolor y alt global.
export const Custom: Story = { args: { size: 50 } };

// Usan render: propagan los args, sustituyen `path` y fijan `alt`.
// ver documento: la plantilla (template) de render no se detalla.
export const EnlargeArrow: Story = {
  render: (args) => ({
    props: { ...args, path: IMAGES_ROUTES /* ...monocromatico.ampliarFecha */, alt: 'Enlarge Arrow Icon' },
  }),
};
export const EnlargeArrowGray: Story = {
  render: (args) => ({
    props: { ...args, path: IMAGES_ROUTES /* ...gris.ampliarFecha */, alt: 'Enlarge Arrow Icon' },
  }),
};
