import type { Meta, StoryObj } from '@storybook/angular';
import { InputPasswordComponent } from './input-password.component';

const meta: Meta<InputPasswordComponent> = {
  title: 'Organisms/InputPassword',
  component: InputPasswordComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' }, description: 'Etiqueta del campo.' },
    placeholder: { control: { type: 'text' }, description: 'Texto del campo vacío.' },
    class: { control: { type: 'text' }, description: 'Clases CSS del input.' },
    ariaLabel: { control: { type: 'text' }, description: 'Etiqueta accesible del input.' },
    ariaLabelledBy: { control: { type: 'text' }, description: 'ID del elemento que etiqueta el input.' },
    loadingProcess: { control: { type: 'boolean' }, description: 'Estado de carga en progreso.' },
    autoFocus: { control: { type: 'boolean' }, description: 'Enfoque automático al renderizar.' },
    invalid: { control: { type: 'boolean' }, description: 'Estado inválido.' },
    disabled: { control: { type: 'boolean' }, description: 'Campo deshabilitado.' },
    value: { control: { type: 'text' }, description: 'Valor actual del password.' },
  },
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('InputPasswordComponent')
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'dark', value: '#f5f5f5' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    docs: {
      source: {
        // ver documento: simplifica bindings string y autocierra componentes vacíos
        transform: (code: string) => code,
      },
    },
  },
};
export default meta;
type Story = StoryObj<InputPasswordComponent>;

export const Default: Story = {
  args: {}, // ver documento: usa placeholder y ariaLabel (no se indican sus valores)
};

export const WithLabel: Story = {
  args: { label: 'Password' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledWithValue: Story = {
  args: { disabled: true /* ver documento: valor asignado (no se especifica cuál) */ },
};

// ver documento: [(ngModel)] con model.inputValue, required y minlength="8"; invalid cuando touched o se intentó enviar; loadingProcess enlazado a una signal
export const TemplateDrivenForm: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-password [(ngModel)]="model.inputValue" name="inputValue" required minlength="8" [loadingProcess]="loading()" />`,
  }),
};

// ver documento: control `password` (vacío) con required y minLength(8); errorMessages vía ValidationErrors; pboForm y pboFormControlError
export const ReactiveForm: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-password formControlName="password" pboFormControlError [errorMessages]="errorMessages" [loadingProcess]="loading()" />`,
  }),
};
