import type { Meta, StoryObj } from '@storybook/angular';
import { ChipsComponent } from './chips.component';

// IGenericOption: label, value, selected, disabled, ariaLabel
// ver documento: los textos/valores exactos de cada conjunto de datos no se indican
const defaultOptions = [
  // ver documento: cuatro opciones; `Option 2` inicia seleccionada
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2', selected: true },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
];
const mixedOptions: any[] = [
  // ver documento: combina opciones seleccionadas, disponibles y una deshabilitada
];
const categoryOptions: any[] = [
  // ver documento: categorías Technology, Design, Marketing y Sales; sin `selected` explícito
  { label: 'Technology', value: 'technology' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Sales', value: 'sales' },
];

const meta: Meta<ChipsComponent> = {
  title: 'Molecules/Chips',
  component: ChipsComponent,
  tags: ['autodocs'],
  args: {
    options: defaultOptions,
    showIcon: false,
    categoryStyle: false,
    size: 'SM' as any, // SizesEnum.SM
  },
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Opciones mostradas como chips.',
      // ver documento: requerida; arreglo de IGenericOption
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Muestra u oculta el icono.',
      table: { defaultValue: { summary: 'false' } },
    },
    categoryStyle: {
      control: { type: 'boolean' },
      description: 'Activa el estilo de categoría.',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: { type: 'select' },
      options: ['XS', 'SM', 'MD'],
      description: 'Tamaño de los chips.',
      table: { defaultValue: { summary: 'SM' } },
    },
    changeOption: {
      action: 'optionChanged',
      description: 'Evento al seleccionar o deseleccionar.',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del componente.',
      table: { defaultValue: { summary: 'undefined' } },
    },
  },
  parameters: {
    docs: {
      // ver documento: description via componentImportDoc('ChipsComponent')
      source: {
        // ver documento: transform convierte bindings string a atributos simples, abrevia
        // booleanos verdaderos, elimina falsos y autocierra elementos sin contenido
        transform: (code: string) => code,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ChipsComponent>;

// ver documento: createSingleSelectionHandler (desmarca todas y marca event.index; no desmarca la ya
// seleccionada) y createMultipleSelectionHandler (alterna selected; no permite desmarcar la última).

export const ChoiceChips: Story = {
  args: { options: defaultOptions, showIcon: false, size: 'sm' as any },
};

export const FilterChips: Story = {
  args: { options: mixedOptions, showIcon: true },
};

export const CategoryChips: Story = {
  args: { options: categoryOptions, categoryStyle: true },
};

export const ExtraSmallSize: Story = { args: { size: 'XS' as any } };
export const SmallSize: Story = { args: { size: 'SM' as any } };
export const MediumSize: Story = { args: { size: 'MD' as any } };

export const SingleSelectionWithSignal: Story = {
  render: (args) => ({
    props: args,
    // ver documento: signal + computed, selección única; muestra el label seleccionado
    template: `<pbo-chips [options]="options" (changeOption)="onChange($event)"></pbo-chips>`,
  }),
};

export const MultipleSelectionWithSignal: Story = {
  render: (args) => ({
    props: args,
    // ver documento: selección múltiple, mínimo una activa; muestra número y etiquetas seleccionadas
    template: `<pbo-chips [options]="options" (changeOption)="onChange($event)"></pbo-chips>`,
  }),
};

export const CategoryStyleWithSignal: Story = {
  render: (args) => ({
    props: args,
    // ver documento: categoryStyle sin handler de cambio
    template: `<pbo-chips [options]="options" categoryStyle></pbo-chips>`,
  }),
};
