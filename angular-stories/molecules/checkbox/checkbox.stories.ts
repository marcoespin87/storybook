import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';
// ver documento: FormErrorMessageComponent, FormSubmitDirective y FormControlErrorDirective
// son dependencias externas a estos documentos; su ruta de origen no se indica.

const meta: Meta<CheckboxComponent> = {
  title: 'Molecules/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  // ver documento: los argTypes se definen localmente en la story `Default`, no en `meta`
  parameters: {
    docs: {
      // ver documento: description via componentImportDoc('CheckboxComponent')
      source: {
        // ver documento: transform normaliza bindings string, abrevia booleanos true,
        // elimina falsos y autocierra elementos vacíos
        transform: (code: string) => code,
      },
    },
  },
  decorators: [
    moduleMetadata({
      // ver documento: también ReactiveFormsModule, FormsModule, FormErrorMessageComponent,
      // FormSubmitDirective y FormControlErrorDirective
      imports: [ButtonComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: { checked: false, label: 'label', disabled: false, indeterminate: false },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Indica si está marcado.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: { type: 'text' },
      description: 'Texto junto al checkbox.',
      table: { defaultValue: { summary: 'label' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Impide la interacción.',
      table: { defaultValue: { summary: 'false' } },
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Representa selección parcial.',
      table: { defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible.',
      table: { defaultValue: { summary: 'undefined' } },
    },
  },
};

export const Checked: Story = {
  args: { checked: true, indeterminate: false, disabled: false },
};

export const Indeterminate: Story = {
  args: { checked: true, indeterminate: true, disabled: false },
};

export const DisabledUnchecked: Story = {
  args: { checked: false, indeterminate: false, disabled: true },
};

export const DisabledChecked: Story = {
  args: { checked: true, indeterminate: false, disabled: true },
};

export const DisabledIndeterminated: Story = {
  args: { checked: true, indeterminate: true, disabled: true },
};

// ver documento: las plantillas de las stories siguientes usan name, value, id, changeEvent
// ({ checked, value }), binary, invalid, ngModel, formControlName, errorMessages,
// pboFormControlError y los slots checkbox-label / checkbox-error, que no están en argTypes.

export const GroupWithSignal: Story = {
  render: (args) => ({
    props: args,
    // ver documento: tres checkboxes estáticos (Cheese, Mushroom, Pepper); signal<string[]> con los
    // seleccionados; changeEvent agrega/elimina el value; computed concatena o muestra "None"
    template: `
      <pbo-checkbox label="Cheese" value="cheese" (changeEvent)="onChange($event)"></pbo-checkbox>
      <pbo-checkbox label="Mushroom" value="mushroom" (changeEvent)="onChange($event)"></pbo-checkbox>
      <pbo-checkbox label="Pepper" value="pepper" (changeEvent)="onChange($event)"></pbo-checkbox>
    `,
  }),
};

export const DynamicGroup: Story = {
  render: (args) => ({
    props: args,
    // ver documento: genera Angular, React y Vue mediante @for; cada elemento define id, label y value
    template: `
      @for (item of items; track item.id) {
        <pbo-checkbox [id]="item.id" [label]="item.label" [value]="item.value" (changeEvent)="onChange($event)"></pbo-checkbox>
      }
    `,
  }),
};

export const TemplateDriven: Story = {
  render: (args) => ({
    props: args,
    // ver documento: NgForm, ngModel, binary: true, ngSubmit; invalid si terms !== true y tocado/enviado;
    // proyecta FormErrorMessageComponent en checkbox-error
    template: `
      <form #f="ngForm" (ngSubmit)="onSubmit(f)">
        <pbo-checkbox name="terms" [(ngModel)]="terms" binary [invalid]="isInvalid(f)">
          <span checkbox-error></span>
        </pbo-checkbox>
        <pbo-button type="submit" label=""></pbo-button>
      </form>
    `,
  }),
};

export const ReactiveForms: Story = {
  render: (args) => ({
    props: args,
    // ver documento: FormBuilder, formControlName, Validators.requiredTrue, pboForm; errorMessages con
    // el mensaje requerido; en envío válido muestra un alert (setTimeout 500 ms) y reinicia el formulario
    template: `
      <form [formGroup]="form" pboForm (ngSubmit)="onSubmit()">
        <pbo-checkbox formControlName="terms" pboFormControlError [errorMessages]="errorMessages"></pbo-checkbox>
        <pbo-button type="submit" label=""></pbo-button>
      </form>
    `,
  }),
};

export const CustomLabel: Story = {
  render: (args) => ({
    props: args,
    // ver documento: slot checkbox-label con texto regular y un ButtonComponent en modo link
    // cuyo pboClick muestra un alert
    template: `
      <pbo-checkbox>
        <span checkbox-label>
          <pbo-button link (pboClick)="onClick()"></pbo-button>
        </span>
      </pbo-checkbox>
    `,
  }),
};
