import type { Meta, StoryObj } from '@storybook/angular';
import { InputNumberComponent } from './input-number.component';

const meta: Meta<InputNumberComponent> = {
  title: 'Organisms/InputNumber',
  component: InputNumberComponent,
  tags: ['autodocs'],
  argTypes: {
    inputId: { control: { type: 'text' }, description: 'Identificador único y asociación con label.' },
    label: { control: { type: 'text' }, description: 'Etiqueta del campo.' },
    placeholder: { control: { type: 'text' }, description: 'Texto dentro del campo vacío.' },
    min: { control: { type: 'number' }, description: 'Valor mínimo permitido.' },
    max: { control: { type: 'number' }, description: 'Valor máximo permitido.' },
    maxLength: { control: { type: 'number' }, description: 'Máximo de dígitos enteros, independiente de `max`.' },
    currency: { control: { type: 'text' }, description: 'Moneda usada en presentación monetaria (código o símbolo).' },
    isCurrency: { control: { type: 'boolean' }, description: 'Fuerza dos decimales y trunca decimales adicionales según la descripción.' },
    required: { control: { type: 'boolean' }, description: 'Marca el campo como obligatorio.' },
    disabled: { control: { type: 'boolean' }, description: 'Deshabilita el input.' },
    autoFocus: { control: { type: 'boolean' }, description: 'Enfoca el input al renderizar.' },
    useGrouping: { control: { type: 'boolean' }, description: 'Controla el separador de miles de la locale.' },
    allowDecimals: { control: { type: 'boolean' }, description: 'Permite o bloquea decimales.' },
    ariaLabel: { control: { type: 'text' }, description: 'Etiqueta accesible del input.' },
    ariaDescribedBy: { control: { type: 'text' }, description: 'Referencia al elemento descriptivo (ID).' },
    value: { control: { type: 'number' }, description: 'Valor numérico actual.' },
    helperText: { control: { type: 'text' }, description: 'Texto descriptivo auxiliar.' },
    optionalText: { control: { type: 'text' }, description: 'Texto para indicar que el campo es opcional.' },
    valid: { control: { type: 'boolean' }, description: 'Estado válido con borde primario e icono check.' },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Validación externa al formulario.',
    },
    appearance: {
      control: { type: 'select' },
      options: ['default', 'feature-amount'],
      description: 'Apariencia visual del campo.',
    },
  },
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('InputNumberComponent')
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
type Story = StoryObj<InputNumberComponent>;

export const Default: Story = {
  args: { label: 'Amount', placeholder: '0.00' /* ver documento: helper y USD */ },
};

export const WithMinMaxCurrency: Story = {
  args: { min: 0, max: 100, isCurrency: true /* ver documento: "currency true" */ },
};

export const WithMinMax: Story = {
  args: { min: 0, max: 100, isCurrency: false /* ver documento: "currency false" */ },
};

export const CurrencyMode: Story = {
  args: { currency: 'USD' },
};

export const GroupingOnlyNumber: Story = {
  args: { allowDecimals: false, useGrouping: true },
};

export const OnlyNumber: Story = {
  args: { useGrouping: false, allowDecimals: false },
};

export const OnlyNumberMaxLength: Story = {
  args: { allowDecimals: false, maxLength: 5 },
};

export const Optional: Story = {
  args: { optionalText: 'Optional' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Valid: Story = {
  args: { valid: true },
};

// ver documento: crea `quantity = signal<number | null>(null)` y enlaza con `[(value)]`; el valor actual se muestra debajo del campo
export const ModelSignal: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-number [(value)]="quantity" />`,
  }),
};

// ver documento: [(ngModel)] sobre model.amount, required; detalle de envío (500 ms, alert, reset) no reproducido
export const TemplateDrivenForm: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-number [(ngModel)]="model.amount" name="amount" required />`,
  }),
};

// ver documento: control `amount` (null) con validadores required y min(0); usa pboForm y pboFormControlError
export const ReactiveForm: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-number formControlName="amount" pboFormControlError />`,
  }),
};

// ver documento: fondo blanco, cantidad centrada (H2), línea primaria de 2 px; ancho según contenedor
export const FeatureAmount: Story = {
  args: { appearance: 'feature-amount' },
};

// ver documento: cuatro estados — Normal (placeholder sin valor), Completed (valor 1250.5), Disabled, Invalid (signal inicial 50; inválido por debajo de 100)
export const FeatureAmountStates: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-number appearance="feature-amount" />`,
  }),
};

// ver documento: error, warning y success, cada uno con pbo-form-error-message del mismo status
export const ValidationStates: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-number status="error" /><pbo-input-number status="warning" /><pbo-input-number status="success" />`,
  }),
};

// ver documento: simula respuesta externa — >=1000 success, 100..999 warning, <100 error; espera de 900 ms; botón deshabilitado mientras validating
export const ApiValidation: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-input-number [status]="status" />`,
  }),
};
