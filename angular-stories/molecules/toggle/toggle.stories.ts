import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ToggleComponent } from './toggle.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';

// ver documento: no indica de dónde se importa componentImportDoc.

const meta: Meta<ToggleComponent> = {
  title: 'Molecules/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    value: {
      control: { type: 'boolean' },
      description: 'Valor actual del interruptor.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el toggle.',
      table: { defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible.',
      table: { defaultValue: { summary: 'undefined' } },
    },
  },
  parameters: {
    docs: {
      description: { component: componentImportDoc('ToggleComponent') },
      source: {
        // transform: convierte bindings string en atributos simples; abrevia booleanos verdaderos;
        // elimina booleanos falsos; autocierra elementos vacíos.
        transform: (code: string) => code,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

// Matriz de estados básicos (value x disabled).
export const Default: Story = {};
export const Checked: Story = { args: { value: true } };
export const Disabled: Story = { args: { disabled: true } };
export const CheckedDisabled: Story = { args: { value: true, disabled: true } };

// Two-way binding con signals: notifications = signal(true); [(value)]="notifications";
// muestra ON u OFF según el valor, y el valor booleano actual.
export const SignalModel: Story = {
  parameters: { docs: { description: { story: 'Two-way binding con signals.' } } },
  render: () => ({
    props: { notifications: signal(true) },
    template: `<pbo-toggle [(value)]="notifications"></pbo-toggle>`,
  }),
};

// FormsModule, NgForm y [(ngModel)]; cada toggle con un `name` único; modelo inicial
// settings = { darkMode: false (required en la plantilla), autoSave: true, emailNotifications: false };
// si el formulario es inválido: markAllAsTouched() y detiene el envío; en envío válido programa un alert
// a los 500 ms con los valores de settings; muestra los valores con el pipe json; usa ButtonComponent.
export const TemplateDrivenForm: Story = {
  parameters: { docs: { description: { story: 'Integración con formularios template-driven.' } } },
  decorators: [moduleMetadata({ imports: [FormsModule, ButtonComponent] })],
  render: () => ({
    props: { settings: { darkMode: false, autoSave: true, emailNotifications: false } },
    template: `
      <form #form="ngForm" (ngSubmit)="onSubmit(form)">
        <pbo-toggle name="darkMode" required [(ngModel)]="settings.darkMode"></pbo-toggle>
        <pbo-toggle name="autoSave" [(ngModel)]="settings.autoSave"></pbo-toggle>
        <pbo-toggle name="emailNotifications" [(ngModel)]="settings.emailNotifications"></pbo-toggle>
        <pbo-button></pbo-button>
      </form>
    `,
  }),
};

// Grupo no nullable con cuatro controles: termsAccepted (false, Validators.requiredTrue),
// marketingEmails (false), dataProcessing (false, Validators.requiredTrue), newsletter (true).
// isSubmitted inicia en false; getErrorMessage devuelve 'This field is required to proceed' ante el
// error requiredTrue; el botón de envío está deshabilitado mientras el formulario sea inválido;
// los errores se muestran con pbo-form-error-message según `control.invalid || isSubmitted()`.
// ver documento: la plantilla completa y el cuerpo de onSubmit no se detallan más allá de esto.
export const ReactiveForm: Story = {
  parameters: { docs: { description: { story: 'Integración con Reactive Forms.' } } },
  decorators: [moduleMetadata({ imports: [ReactiveFormsModule, ButtonComponent] })],
  render: () => ({
    props: { isSubmitted: signal(false) },
    template: `
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <pbo-toggle formControlName="termsAccepted"></pbo-toggle>
        <pbo-toggle formControlName="marketingEmails"></pbo-toggle>
        <pbo-toggle formControlName="dataProcessing"></pbo-toggle>
        <pbo-toggle formControlName="newsletter"></pbo-toggle>
        <pbo-button></pbo-button>
      </form>
    `,
  }),
};
