import type { Meta, StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './datepicker.component';

// ver documento: el doc menciona FormsModule, ReactiveFormsModule, DatePipe, pboForm y pboFormControlError, pero no el decorator exacto.
// Altura mínima del wrapper: 400px (ver documento: decorator no detallado).
// El archivo NO define args ni argTypes globales (la API se observa por los bindings de las stories).

// Calcula límites relativos a la fecha de ejecución: minDate = mes anterior, maxDate = mes siguiente (corrige año dic/ene).
function minAndMaxDate(kind: 'min' | 'max'): Date {
  const date = new Date();
  const delta = kind === 'min' ? -1 : 1;
  date.setMonth(date.getMonth() + delta);
  return date;
}

const meta: Meta<DatePickerComponent> = {
  title: 'Organisms/DatePicker',
  component: DatePickerComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: { component: "componentImportDoc('DatePickerComponent')" },
      source: { transform: '/* normaliza bindings string, elimina undefined, abrevia true, elimina false, autocierra vacíos */' },
    },
  },
};
export default meta;
type Story = StoryObj<DatePickerComponent>;

export const Basic: Story = {};

export const WithLabel: Story = { args: { label: 'Select a date' } as any };

export const SignalModel: Story = {
  // [(value)] con signal<Date | null> inicializado en null; muestra la fecha con DatePipe 'dd/MM/yyyy'.
  render: () => ({
    props: { value: null },
    template: `<pbo-datepicker [(value)]="value"></pbo-datepicker><p *ngIf="value">{{ value | date: 'dd/MM/yyyy' }}</p>`,
  }),
};

export const NgModel: Story = {
  // [(ngModel)] con signal (FormsModule).
  render: () => ({
    props: { value: null },
    template: `<pbo-datepicker [(ngModel)]="value"></pbo-datepicker><p *ngIf="value">{{ value | date: 'dd/MM/yyyy' }}</p>`,
  }),
};

export const Format: Story = {
  args: { dateFormat: 'mm/dd/yy', placeholder: 'mm/dd/yyyy' } as any,
};

export const MinAndMax: Story = {
  // Mes anterior y siguiente (minAndMaxDate() se invoca dos veces, una por límite).
  args: { minDate: minAndMaxDate('min'), maxDate: minAndMaxDate('max') } as any,
};

export const MonthSelection: Story = {
  // view month, mm/yy, placeholder mm/yyyy.
  args: { view: 'month', dateFormat: 'mm/yy', placeholder: 'mm/yyyy' } as any,
};

export const MonthSelectionInline: Story = {
  args: { view: 'month', dateFormat: 'mm/yy', placeholder: 'mm/yyyy', inline: true } as any,
};

export const RangeSelection: Story = {
  args: { selectionMode: 'range', readonlyInput: true } as any,
};

export const Inline: Story = { args: { inline: true } as any };

export const Disabled: Story = { args: { disabled: true } as any };

export const Grid: Story = {
  // Dos datepickers en grid responsive (1/2 columnas).
  render: () => ({
    template: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><pbo-datepicker></pbo-datepicker><pbo-datepicker></pbo-datepicker></div>`,
  }),
};

export const ReactiveForm: Story = {
  // FormGroup con birthDate (null) + Validators.required; errorMessages: 'This field is required'; pboForm / pboFormControlError.
  // Inválido -> marca touched; válido -> alert, reset y marca untouched.
  render: () => ({
    props: {
      errorMessages: { required: 'This field is required' },
      onSubmit() {
        // ver documento: lógica de submit descrita en 3.8; no se reproduce el FormGroup real.
      },
    },
    template: `
      <form pboForm [formGroup]="form" (ngSubmit)="onSubmit()">
        <pbo-datepicker formControlName="birthDate" [errorMessages]="errorMessages" pboFormControlError></pbo-datepicker>
      </form>`,
  }),
};
