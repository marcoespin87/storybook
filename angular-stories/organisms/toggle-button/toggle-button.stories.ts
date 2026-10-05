import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message'; // ver documento: el origen de MessageModule no se indica
import { ToggleButtonComponent } from './toggle-button.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';

// ver documento: el selector del componente no se indica; `pbo-toggle-button` en los templates es un marcador de fixture.
// Forma de cada opción: { label: string; value: any; isDisabled?: boolean }
// (los nombres reales son configurables con optionLabel, optionValue y optionDisabled).

const meta: Meta<ToggleButtonComponent> = {
  title: 'Organisms/ToggleButton',
  component: ToggleButtonComponent,
  tags: ['autodocs'],
  // Dependencias del ejemplo reactivo: ReactiveFormsModule, MessageModule y ButtonComponent.
  decorators: [moduleMetadata({ imports: [ToggleButtonComponent, ReactiveFormsModule, MessageModule, ButtonComponent] })],
  args: {
    options: [
      { label: 'Opción A', value: 'A' }, // ver documento: los valores exactos de value no se indican (selectedModel es 'A')
      { label: 'Opción B', value: 'B' },
    ],
    selectedModel: 'A',
    optionValue: 'value',
    optionLabel: 'label',
    optionDisabled: 'isDisabled',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita todo el componente.',
      table: { defaultValue: { summary: 'false' } },
    },
    selectedModel: {
      control: { type: 'text' },
      description: 'Valor seleccionado cuando se utiliza model binding.',
      table: { defaultValue: { summary: '' } },
    },
    controlKey: {
      control: { type: 'text' },
      description: 'Nombre del FormControl usado mediante formControlName.',
      table: { defaultValue: { summary: '' } },
    },
    options: {
      control: { type: 'object' },
      description: 'Arreglo de opciones.',
      table: { defaultValue: { summary: '[]' } },
    },
    optionValue: {
      control: { type: 'text' },
      description: 'Propiedad usada como valor.',
      table: { defaultValue: { summary: 'value' } },
    },
    optionLabel: {
      control: { type: 'text' },
      description: 'Propiedad usada como etiqueta.',
      table: { defaultValue: { summary: 'label' } },
    },
    optionDisabled: {
      control: { type: 'text' },
      description: 'Propiedad usada para deshabilitar una opción.',
      table: { defaultValue: { summary: '' } },
    },
    ariaLabelledBy: {
      control: { type: 'text' },
      description: "ID externo para aria-labelledby.",
      table: { defaultValue: { summary: '' } },
    },
    fluid: {
      control: { type: 'boolean' },
      description: 'Expande el componente al ancho del contenedor.',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Cambia el tamaño.', // ver documento: la descripción solo menciona small
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible con aria-label.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    class: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales.',
      table: { defaultValue: { summary: 'undefined' } },
    },
  },
  // La descripción NO está anidada en parameters.docs.description (según el documento).
  parameters: {
    // descripción: componentImportDoc('ToggleButtonComponent')
    description: { component: 'componentImportDoc("ToggleButtonComponent")' },
  },
};
export default meta;
type Story = StoryObj<ToggleButtonComponent>;

// Estado base con Opción A seleccionada. Hereda args globales.
export const ToggleButton: Story = {};

// Componente completamente deshabilitado.
export const ToggleButtonDisabled: Story = {
  args: { disabled: true },
};

// Deshabilitación por opción: Opción B con isDisabled: true.
export const ToggleButtonPartiallyDisabled: Story = {
  args: {
    options: [
      { label: 'Opción A', value: 'A' },
      { label: 'Opción B', value: 'B', isDisabled: true },
    ],
  },
};

// Integración con Reactive Forms: controlKey="option", validación required, estado inválido.
// Formulario: option: ['A', Validators.required]. Opción A deshabilitada, Opción B habilitada.
// Estado inválido: [invalid]="form.controls.option.invalid && form.controls.option.touched".
// Si el formulario es inválido marca todos los controles como touched; si es válido muestra el valor en un alert demostrativo.
// Mensaje warning 'Elija una opción' cuando el control es inválido y touched. El botón Submit usa ButtonComponent.
export const ReactiveForms: Story = {
  args: {
    controlKey: 'option',
    options: [
      { label: 'Opción A', value: 'A', isDisabled: true },
      { label: 'Opción B', value: 'B' },
    ],
    ariaLabel: undefined, // ver documento: el texto de ariaLabel usado en esta story no se indica
  },
  render: (args) => ({
    props: args,
    template: `
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <pbo-toggle-button [controlKey]="controlKey" [options]="options" [invalid]="form.controls.option.invalid && form.controls.option.touched"></pbo-toggle-button>
        <p-message *ngIf="form.controls.option.invalid && form.controls.option.touched" severity="warn">Elija una opción</p-message>
        <pbo-button type="submit">Submit</pbo-button>
      </form>`,
    // ver documento: la construcción del FormGroup (form) y onSubmit no se detallan más allá de lo descrito arriba
  }),
};
