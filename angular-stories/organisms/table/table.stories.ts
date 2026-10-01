import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';

// ver documento: el selector del componente no se indica; `pbo-table` en los templates es un marcador de fixture.
// Modelo de columna: field, header, subField?, icon?, rowStateType?
// Modelo de fila: id, campos dinámicos, details (arreglo de { field, value })
// ver documento: los valores demostrativos de `columns` (monto y fecha) y `data` (cuatro filas con details) no se detallan.

const meta: Meta<TableComponent> = {
  title: 'Organisms/Table',
  component: TableComponent,
  tags: ['autodocs'],
  args: {
    // columns: dos columnas (monto y fecha); data: cuatro filas con details — ver documento
    isSortable: false,
    paginator: false,
    filterTable: false,
    menuContext: false,
    rowExpand: false,
    iconPosition: 'left',
  },
  argTypes: {
    // ArgTypes visuales
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Posición del icono del header.',
      table: { defaultValue: { summary: 'right' } },
    },
    headerHeight: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Altura del encabezado.',
      table: { defaultValue: { summary: 'm' } },
    },
    rowHeight: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Altura de fila.',
      table: { defaultValue: { summary: 'm' } },
    },
    headerType: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Apariencia del header.',
      table: { defaultValue: { summary: 'primary' } },
    },
    rowType: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Apariencia de filas.',
      table: { defaultValue: { summary: 'primary' } },
    },
    rowStateClass: {
      control: { type: 'select' },
      options: ['disabled', 'normal', 'hover', 'focus', 'selected', 'activated'],
      description: 'Estado visual de fila.',
      table: { defaultValue: { summary: 'normal' } },
    },
    tableSize: {
      control: { type: 'select' },
      options: ['pbo-table--s', 'pbo-table--m', 'pbo-table--l'], // el documento abrevia: "pbo-table--s, --m, --l"
      description: 'Clase de tamaño global.',
      table: { defaultValue: { summary: 'pbo-table--s' } },
    },
    // ArgTypes funcionales
    isSortable: { control: { type: 'boolean' }, description: 'Sorting global.' },
    paginator: { control: { type: 'boolean' }, description: 'Activa paginación.' },
    rows: { control: { type: 'number' }, description: 'Filas por página.' },
    rowsPerPageOptions: { control: { type: 'object' }, description: 'Opciones de filas.' },
    radioButton: { control: { type: 'boolean' }, description: 'Selección por radio.' },
    checkbox: { control: { type: 'boolean' }, description: 'Selección por checkbox.' },
    filterTable: { control: { type: 'boolean' }, description: 'Filtro de tabla.' },
    showAvatar: { control: { type: 'boolean' }, description: 'Columna de avatar.' },
    rowExpand: { control: { type: 'boolean' }, description: 'Expansión de filas.' },
    menuContext: { control: { type: 'boolean' }, description: 'Menú contextual.' }, // ver documento: la descripción real no se explica
    globalFilterFields: { control: { type: 'object' }, description: 'Campos del filtro global.' },
    headerTipografy: { control: { type: 'text' }, description: 'Clases tipográficas del header.' },
    fieldTipografy: { control: { type: 'text' }, description: 'Clases tipográficas del campo.' },
    subFieldTipografy: { control: { type: 'text' }, description: 'Clases tipográficas del subcampo.' },
  },
  // ver documento: no hay transformación personalizada del source ni parameters adicionales
};
export default meta;
type Story = StoryObj<TableComponent>;

// Tabla básica. Hereda args globales.
export const data: Story = {};

// Cobertura funcional extensa: 15 filas, sorting, paginator, filter y expand.
export const behavior: Story = {
  args: { isSortable: true, paginator: true, filterTable: true, rowExpand: true },
  // ver documento: las 15 filas no se detallan
};

// Selección con ambos controles activos.
export const selection: Story = {
  args: { checkbox: true, radioButton: true },
};

// Datos base, ajuste mediante Controls visuales.
export const style: Story = {};

// Tabla interactiva compuesta: sorting, paginator, filter, expand y checkbox.
export const interactive: Story = {
  args: { isSortable: true, paginator: true, filterTable: true, rowExpand: true, checkbox: true },
};
