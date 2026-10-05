import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { SplitButtonComponent } from './split-button.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';

// ver documento: el selector del componente no se indica; `pbo-split-button` en los templates es un marcador de fixture.
// Los comandos y `pboClick` usan fn() (acciones de Storybook); aquí se omiten: ver documento: import de `fn` no detallado.
// Modelo de opción: label, iconPath?, command, separator?, url? (mencionada en la descripción pero no usada en stories)
const options = [
  { label: 'Update', iconPath: undefined /* ver documento: ruta del icono no indicada */, command: () => {} },
  { label: 'Delete', command: () => {} },
  { separator: true },
  { label: 'Default', iconPath: undefined /* ver documento: ruta del icono no indicada */, command: () => {} },
];

const meta: Meta<SplitButtonComponent> = {
  title: 'Organisms/Split Button',
  component: SplitButtonComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [SplitButtonComponent, ButtonComponent] })], // ButtonComponent: usado en las stories responsive
  args: {
    label: 'Split Button',
    options,
  },
  argTypes: {
    label: { control: { type: 'text' }, description: 'Texto de la acción primaria.' },
    options: { control: { type: 'object' }, description: 'Opciones del menú desplegable.' },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      description: 'Esquema visual.',
      table: { defaultValue: { summary: 'primary' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita el componente.',
      table: { defaultValue: { summary: 'false' } },
    },
    ariaLabel: { control: { type: 'text' }, description: 'Etiqueta accesible.' },
    class: { control: { type: 'text' }, description: 'Clases CSS adicionales.' },
    pboClick: {
      action: 'pboClick',
      description: 'Evento de la acción principal.',
      table: { type: { summary: 'OutputEmitterRef<Event>' } },
    },
  },
  parameters: {
    // Wrapper con altura mínima de 300 px.
    // Transformación de docs: simplifica bindings, elimina undefined y false, abrevia true y autocierra componentes vacíos.
    // descripción: componentImportDoc('SplitButtonComponent')
    docs: { source: { transform: (code: string) => code } },
  },
};
export default meta;
type Story = StoryObj<SplitButtonComponent>;

export const primarySplitbutton: Story = { args: { color: 'primary' } };

// Menú con iconos (Update y Default incluyen iconPath).
export const splitButtonWithIcons: Story = { args: { color: 'primary' } };

export const secondarySplitbutton: Story = { args: { color: 'secondary' } };

export const tertiarySplitbutton: Story = { args: { color: 'tertiary' } };

// ver documento: `destructiveSplitbutton` redefine `class` con descripción/default "Button color" y `primary`; configuración inconsistente.
export const destructiveSplitbutton: Story = { args: { color: 'destructive' } };

// ver documento: los nombres de clases CSS de los layouts responsive no se indican; las clases de los templates son marcadores de fixture.
// Layout vertical en móvil y horizontal desde `md`; Split Button y Button ocupan ancho completo en móvil.
export const responsiveSplitButton: Story = {
  args: { label: 'Descargar Documentos' },
  render: (args) => ({
    props: args,
    template: `
      <div style="min-height: 300px">
        <div class="flex flex-col md:flex-row">
          <pbo-split-button class="w-full md:w-auto" [label]="label" [options]="options"></pbo-split-button>
          <pbo-button class="w-full md:w-auto"></pbo-button>
        </div>
      </div>`,
  }),
};

// Grid de una columna en móvil y doce desde `md`; ambos controles ocupan dos columnas en desktop.
export const gridSplitButton: Story = {
  args: { label: 'Descargar' },
  render: (args) => ({
    props: args,
    template: `
      <div style="min-height: 300px">
        <div class="grid grid-cols-1 md:grid-cols-12">
          <pbo-split-button class="md:col-span-2" [label]="label" [options]="options"></pbo-split-button>
          <pbo-button class="md:col-span-2"></pbo-button>
        </div>
      </div>`,
  }),
};
