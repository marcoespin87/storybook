import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm, FormBuilder, Validators } from '@angular/forms';
import { RadioButtonComponent } from './radio-button.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';
import { FormErrorMessageComponent } from '../form-error-message/form-error-message.component';

// ver documento: no indica de dónde se importa componentImportDoc.

const meta: Meta<RadioButtonComponent> = {
  title: 'Molecules/RadioButton',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, ReactiveFormsModule, FormsModule, FormErrorMessageComponent],
    }),
  ],
  // Los argTypes están definidos localmente en `Default`, no en el meta global.
  parameters: {
    docs: {
      description: { component: componentImportDoc('RadioButtonComponent') },
      source: {
        // transform: normaliza bindings string; elimina bindings con undefined; abrevia
        // booleanos verdaderos; elimina booleanos falsos; autocierra elementos vacíos.
        transform: (code: string) => code,
      },
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: { value: 'M' },
  argTypes: {
    name: { control: { type: 'text' }, description: 'Nombre del input y agrupación lógica.' },
    value: { control: { type: 'text' }, description: 'Valor del radio button.' },
    inputId: { control: { type: 'text' }, description: 'Identificador del input.' },
    label: { control: { type: 'text' }, description: 'Texto mostrado junto al control.' },
    ariaLabel: { control: { type: 'text' }, description: 'Etiqueta ARIA.' },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el radio button.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export const Disabled: Story = { args: { value: 'M', disabled: true } };

// Seleccionado y deshabilitado: selectedModel coincide con value.
export const SelectedDisabled: Story = { args: { value: 'M', selectedModel: 'M', disabled: true } as any };

// Inicializa `selectedFramework` con `args.selectedModel`; tres opciones estáticas (Angular, React, Vue),
// todas con name="framework", cada una con value e inputId distintos; two-way binding con [(selectedModel)].
// ver documento: los value/inputId/label exactos de cada opción no se detallan.
export const GroupWithSignal: Story = {
  render: (args: any) => ({
    props: { selectedFramework: signal(args.selectedModel) },
    template: `
      <pbo-radiobutton name="framework" [(selectedModel)]="selectedFramework"></pbo-radiobutton>
    `,
  }),
};

// Inicializa `selectedFramework` con string vacío; arreglo con id, label y value; genera los controles
// con @for (track $index); todos comparten name="framework" y enlazan selectedModel al mismo signal.
export const DynamicGroup: Story = {
  render: () => ({
    props: { selectedFramework: signal('') },
    template: `
      @for (option of options; track $index) {
        <pbo-radiobutton name="framework" [(selectedModel)]="selectedFramework"></pbo-radiobutton>
      }
    `,
  }),
};

// selectedGender = signal vacío; NgForm + ngSubmit; dos radios (male, female) con [(selectedModel)]="selectedGender";
// grupo inválido si no hay selección y el formulario ya fue enviado; [invalid] en ambos radios;
// muestra FormErrorMessageComponent ("At least one gender must be selected."); en envío válido
// muestra el valor con alert y ejecuta resetForm().
export const TemplateDriven: Story = {
  render: () => ({
    props: { selectedGender: signal('') },
    template: `
      <form #form="ngForm" (ngSubmit)="onSubmit(form)">
        <pbo-radiobutton name="gender" value="male" [(selectedModel)]="selectedGender"></pbo-radiobutton>
        <pbo-radiobutton name="gender" value="female" [(selectedModel)]="selectedGender"></pbo-radiobutton>
      </form>
    `,
  }),
};

// Formulario con el control `gender` (string vacío, Validators.required); controlKey="gender" en ambos radios;
// error controlado con formSubmitted; marca controles como touched si es inválido; mensaje de error cuando
// `gender` sigue inválido; en envío válido muestra el valor, reinicia formSubmitted y ejecuta form.reset().
export const ReactiveForms: Story = {
  render: () => ({
    props: { formSubmitted: signal(false) },
    template: `
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <pbo-radiobutton controlKey="gender" value="male"></pbo-radiobutton>
        <pbo-radiobutton controlKey="gender" value="female"></pbo-radiobutton>
      </form>
    `,
  }),
};
