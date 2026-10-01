import type { Meta, StoryObj } from '@storybook/angular';
import { InputTextComponent } from './input-text.component';

const tooltipPositions = ['top', 'bottom', 'left', 'right'];
const tooltipArrows = ['none', 'tip-left', 'tip-right'];

const meta: Meta<InputTextComponent> = {
  title: 'Organisms/InputText',
  component: InputTextComponent,
  tags: ['autodocs'],
  argTypes: {
    inputId: { control: { type: 'text' }, description: 'Identificador y asociación con label.' },
    label: { control: { type: 'text' }, description: 'Etiqueta del campo.' },
    maxLength: { control: { type: 'number' }, description: 'Máximo de caracteres.', table: { defaultValue: { summary: '300' } } },
    type: { control: { type: 'select' }, options: ['text', 'email'], description: 'Tipo del input.' },
    placeholder: { control: { type: 'text' }, description: 'Texto del campo vacío.' },
    optionalText: { control: { type: 'text' }, description: 'Texto del indicador opcional.', table: { defaultValue: { summary: 'Optional' } } },
    isOptional: { control: { type: 'boolean' }, description: 'Muestra el indicador opcional.' },
    required: { control: { type: 'boolean' }, description: 'Marca el campo como requerido.' },
    invalid: { control: { type: 'boolean' }, description: 'Estado inválido.' },
    autoFocus: { control: { type: 'boolean' }, description: 'Foco automático.' },
    ariaLabel: { control: { type: 'text' }, description: 'Etiqueta accesible.' },
    ariaLabelledBy: { control: { type: 'text' }, description: 'ID del elemento etiquetador.' },
    disabled: { control: { type: 'boolean' }, description: 'Deshabilita el campo.' },
    value: { control: { type: 'text' }, description: 'Valor actual.' },
    icon: { control: { type: 'text' }, description: 'Ruta del icono.', table: { defaultValue: { summary: 'undefined' } } },
    iconToolTip: { control: { type: 'text' }, description: 'Tooltip del icono normal.', table: { defaultValue: { summary: 'undefined' } } },
    iconToolTipPosition: { control: { type: 'select' }, options: tooltipPositions, description: 'Posición del tooltip normal.' },
    iconToolTipArrow: { control: { type: 'select' }, options: tooltipArrows, description: 'Clase de flecha del tooltip normal.' },
    invalidIconToolTip: { control: { type: 'text' }, description: 'Tooltip del icono inválido.', table: { defaultValue: { summary: 'undefined' } } },
    invalidIconToolTipPosition: { control: { type: 'select' }, options: tooltipPositions, description: 'Posición del tooltip inválido.' },
    invalidIconToolTipArrow: { control: { type: 'select' }, options: tooltipArrows, description: 'Flecha del tooltip inválido.' },
    helperText: { control: { type: 'text' }, description: 'Texto auxiliar.', table: { defaultValue: { summary: 'undefined' } } },
  },
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('InputTextComponent')
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'dark', value: '#f5f5f5' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    docs: {
      source: {
        // ver documento: simplifica bindings string y autocierra elementos vacíos
        transform: (code: string) => code,
      },
    },
  },
};
export default meta;
type Story = StoryObj<InputTextComponent>;

export const Default: Story = {
  args: { label: 'Name', type: 'text' }, // ver documento: "Name, texto"
};

export const WithEmailType: Story = {
  args: { type: 'email' },
};

export const MaxLength: Story = {
  args: { maxLength: 3 },
};

export const Optional: Story = {
  args: { isOptional: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledWithText: Story = {
  args: { disabled: true /* ver documento: valor asignado (no se especifica cuál) */ },
};

export const DisabledWithOptional: Story = {
  args: { disabled: true, isOptional: true },
};

export const Invalid: Story = {
  args: { invalid: true /* ver documento: tooltip de error (invalidIconToolTip), texto no especificado */ },
};

export const WithIcon: Story = {
  args: { /* ver documento: icono + tooltip (rutas y textos no especificados) */ },
};

export const DisabledWithIcon: Story = {
  args: { disabled: true /* ver documento: + icono */ },
};

// ver documento: el nombre de la story es `WithIconAnOptional` (el propio documento anota la inconsistencia)
export const WithIconAnOptional: Story = {
  args: { isOptional: true /* ver documento: + icono */ },
};

// ver documento: modelo `name` vacío con [(ngModel)], required y minlength 2; invalid si touched o se intentó enviar; envío válido espera 500 ms, alert y reset
export const TemplateDrivenForm: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-text [(ngModel)]="name" name="name" required minlength="2" />`,
  }),
};

// ver documento: controles no-nullable `username` y `name` (required, minLength(2)) con pboFormControlError y el mismo mapa de mensajes;
// `username` agrega icono, helper, tooltip normal (flecha p-tooltip-tip-right) y tooltip inválido; `name` solo tooltip inválido
export const ReactiveForm: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-text formControlName="username" pboFormControlError /><pbo-input-text formControlName="name" pboFormControlError />`,
  }),
};
