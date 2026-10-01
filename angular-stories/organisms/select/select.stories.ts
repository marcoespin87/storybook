import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';

// ver documento: la lista de ejemplo son cinco ciudades (New York, Rome, London, Istanbul, Paris); los códigos (`code`) no se listan
const cities = [
  { name: 'New York' },
  { name: 'Rome' },
  { name: 'London' },
  { name: 'Istanbul' },
  { name: 'Paris' },
];

const meta: Meta<SelectComponent> = {
  title: 'Organisms/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  args: {
    placeholder: 'Select a city',
    options: cities,
    optionLabel: 'name',
    filter: false,
  },
  argTypes: {
    label: { control: { type: 'text' }, description: 'Etiqueta del selector.' },
    class: { control: { type: 'text' }, description: 'Clases CSS adicionales.' },
    placeholder: { control: { type: 'text' }, description: 'Texto sin selección.' },
    options: { control: { type: 'object' }, description: 'Opciones disponibles.' },
    optionLabel: { control: { type: 'text' }, description: 'Campo mostrado como etiqueta.' },
    optionValue: { control: { type: 'text' }, description: 'Campo usado como valor.' },
    disabled: { control: { type: 'boolean' }, description: 'Deshabilita el selector.', table: { defaultValue: { summary: 'false' } } },
    filter: { control: { type: 'boolean' }, description: 'Habilita búsqueda en las opciones.', table: { defaultValue: { summary: 'false' } } },
    filterPlaceholder: { control: { type: 'text' }, description: 'Placeholder del filtro.' },
    emptyMessage: { control: { type: 'text' }, description: 'Mensaje cuando no existen opciones.', table: { defaultValue: { summary: 'No results found' } } },
    emptyFilterMessage: { control: { type: 'text' }, description: 'Mensaje sin coincidencias.', table: { defaultValue: { summary: 'No results found' } } },
    virtualScroll: { control: { type: 'boolean' }, description: 'Activa virtual scrolling.' },
    virtualScrollItemSize: { control: { type: 'number' }, description: 'Altura de cada opción virtualizada.' },
    invalid: { control: { type: 'boolean' }, description: 'Estado inválido.', table: { defaultValue: { summary: 'false' } } },
  },
  parameters: {
    // ver documento: wrapper con altura mínima de 300 px; la descripción sale de componentImportDoc('SelectComponent')
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'dark', value: '#f5f5f5' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    docs: {
      source: {
        // ver documento: simplifica bindings string, elimina undefined, abrevia true, elimina false y autocierra elementos vacíos
        transform: (code: string) => code,
      },
    },
  },
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'City' /* ver documento: "label definido" (texto no especificado) */ },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledWithLabel: Story = {
  args: { label: 'City', disabled: true },
};

// ver documento: London preseleccionado (objeto seleccionado)
export const DisabledWithLabelAndSelectedItem: Story = {
  args: { label: 'City', disabled: true },
};

export const WithFilter: Story = {
  args: { filter: true },
};

// ver documento: dos anchos (cuatro y ocho columnas), optionValue `value`; ejecuta console.log(props)
export const WithGrid: Story = {
  args: { optionValue: 'value' },
};

// ver documento: templates #customSelectedItem (opción elegida) y #customItem (cada opción): tipo de cuenta, número y saldo
export const CustomSelect: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-select [options]="options"><ng-template #customSelectedItem></ng-template><ng-template #customItem></ng-template></pbo-select>`,
  }),
};

// ver documento: añade un icono de 24 x 24 px y textos secundarios; las imágenes usan el nombre de la opción como alt
export const CustomIconSelect: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-select [options]="options"><ng-template #customItem></ng-template></pbo-select>`,
  }),
};

// ver documento: igual que CustomIconSelect, con opciones de bancos
export const BankSelect: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-select [options]="options"><ng-template #customItem></ng-template></pbo-select>`,
  }),
};

// ver documento: selectedCity como signal, [(ngModel)], selección mostrada con JsonPipe
export const NgModel: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-select [options]="options" optionLabel="name" [(ngModel)]="selectedCity" />`,
  }),
};

// ver documento: control `city` requerido, pboForm y pboFormControlError, JsonPipe; reinicia tras envío válido
export const ReactiveForm: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-select [options]="options" optionLabel="name" formControlName="city" pboFormControlError />`,
  }),
};

// ver documento: optionValue `code` (el control guarda el código, no el objeto); mensaje "At least one city must be selected."
export const ReactiveFormWithOptionValue: Story = {
  args: { optionValue: 'code' },
  render: (args) => ({
    props: args,
    template: `<pbo-select [options]="options" optionLabel="name" optionValue="code" formControlName="city" pboFormControlError />`,
  }),
};

// ver documento: layout fullscreen; renderiza DropdownCompanyDemoComponent (no adjunto) dentro de un Header fijo con showBorder
export const CompanySelect: Story = {
  parameters: { layout: 'fullscreen' },
};
