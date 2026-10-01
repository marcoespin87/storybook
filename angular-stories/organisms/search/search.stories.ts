import type { Meta, StoryObj } from '@storybook/angular';
import { SearchComponent } from './search.component';

const meta: Meta<SearchComponent> = {
  title: 'Organisms/Search',
  component: SearchComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'number'],
      description: 'Tipo de entrada.',
      table: { defaultValue: { summary: 'text' } },
    },
    placeholder: { control: { type: 'text' }, description: 'Placeholder de búsqueda.' },
    class: { control: { type: 'text' }, description: 'Clases CSS del contenedor.' },
    ariaLabel: { control: { type: 'text' }, description: 'Etiqueta accesible.', table: { defaultValue: { summary: 'Search Input' } } },
    disabled: { control: { type: 'boolean' }, description: 'Deshabilita el componente.', table: { defaultValue: { summary: 'false' } } },
    highContrast: { control: { type: 'boolean' }, description: 'Activa el modo de alto contraste.', table: { defaultValue: { summary: 'false' } } },
    // ver documento: `value` se usa en las stories pero NO aparece en argTypes
  },
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('SearchComponent')
    docs: {
      source: {
        // ver documento: simplifica bindings string, autocierra elementos vacíos, abrevia booleanos true y elimina false
        transform: (code: string) => code,
      },
    },
  },
};
export default meta;
type Story = StoryObj<SearchComponent>;

export const Default: Story = {
  args: { placeholder: 'Search' },
};

export const HighContrast: Story = {
  args: { highContrast: true },
};

export const Disabled: Story = {
  args: { disabled: true /* ver documento: "labels custom" (valores no especificados) */ },
};

export const DisabledHighContrast: Story = {
  args: { disabled: true, highContrast: true },
};

export const DisabledWithText: Story = {
  args: { disabled: true /* ver documento: value asignado (no se especifica cuál) */ },
};

// ver documento: valorBusqueda = signal(''), [(value)], muestra el valor solo si longitud > 0; layout de cuatro columnas ocupando tres
export const SignalModel: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-search [(value)]="valorBusqueda" />`,
  }),
};

// ver documento: FormControl `term` no nullable y requerido; botón Search disabled mientras el formulario sea inválido;
// envío válido espera 500 ms, alert con el término y reset
export const ReactiveForms: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-search formControlName="term" />`,
  }),
};

// ver documento: modelo `empresa.term` vacío con [(ngModel)], name y required; sin error visual; si es inválido el handler termina sin acción
export const TemplateDriven: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-search [(ngModel)]="empresa.term" name="term" required />`,
  }),
};
