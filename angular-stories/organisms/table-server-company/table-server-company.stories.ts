import type { Meta, StoryObj } from '@storybook/angular';
import { TableServerCompanyComponent } from './table-server-company.component';

// ver documento: el selector del componente no se indica; `pbo-table-server-company` en los templates es un marcador de fixture.
// Componente genérico: TableServerCompanyComponent<Transferencia>.
// Fuente demostrativa: ALL_MOCK_NOMINA vía API simulada `simulateApiCall`
//   (page, pageSize, search?, sortKey?, sortDirection? [asc | desc | null], delayMs); filtra por
//   IdSobre, Referencia, EstadoSobre, IngresadoPor y CuentaOrdenante, ordena con localeCompare numérico y pagina.
// COLUMNS (ocho): ID Sobre, Fecha Creación, Referencia, Cuenta Ordenante, Items, Valor (numérico, USD, locale es-EC), Estado, Ingresado Por.
//   Ordenables: ID, fecha, referencia y estado.
// Config base: paginación habilitada (tamaño inicial 5; opciones 3, 5 y 10; labels Siguiente, Anterior, Mostrando, de, Filas, Sin resultados);
//   búsqueda habilitada (debounce 400 ms, placeholder 'Buscar...'); filas striped y hoverable; header no sticky;
//   mensajes separados para tabla vacía y búsqueda sin coincidencias; cinco filas skeleton durante loading.
// Helpers reactivos: createPageChangeHandler, createFetchData, createSearchHandler.
// ver documento: los valores exactos de COLUMNS/config/ALL_MOCK_NOMINA no se detallan.

const meta: Meta<TableServerCompanyComponent> = {
  title: 'Organisms/TableServerCompany',
  component: TableServerCompanyComponent,
  tags: ['autodocs'],
  argTypes: {
    // Server-side inputs
    serverTotalItems: {
      control: { type: 'number' },
      description: 'Total devuelto por el servidor.',
      table: { category: 'Server-side inputs', defaultValue: { summary: '0' } },
    },
    serverCurrentPage: {
      control: { type: 'number' },
      description: 'Página activa controlada por el padre.',
      table: { category: 'Server-side inputs', defaultValue: { summary: '1' } },
    },
    // Server-side outputs
    pboServerPageChange: {
      action: 'pboServerPageChange',
      description: 'Cambio de página o tamaño.',
      table: { category: 'Server-side outputs', type: { summary: '{ page, pageSize }' } },
    },
    pboServerSortChange: {
      action: 'pboServerSortChange',
      description: 'Cambio de orden server-side.',
      table: { category: 'Server-side outputs', type: { summary: '{ key, direction }' } },
    },
    pboServerSearchChange: {
      action: 'pboServerSearchChange',
      description: 'Término emitido después del debounce.',
      table: { category: 'Server-side outputs', type: { summary: 'string' } },
    },
  },
  parameters: {
    // Transformación de docs: simplifica bindings, elimina undefined y booleanos false, abrevia true y autocierra componentes vacíos.
    // descripción: componentImportDoc('TableServerCompanyComponent')
    docs: { source: { transform: (code: string) => code } },
  },
};
export default meta;
type Story = StoryObj<TableServerCompanyComponent>;

// Paginación y búsqueda conectadas al estado externo.
export const ServerSidePagination: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-table-server-company [serverTotalItems]="serverTotalItems" [serverCurrentPage]="serverCurrentPage" (pboServerPageChange)="pboServerPageChange($event)" (pboServerSearchChange)="pboServerSearchChange($event)"></pbo-table-server-company>`,
  }),
};

// Búsqueda con placeholder especializado.
export const ServerSideSearch: Story = {
  // ver documento: el texto del placeholder especializado no se indica
  render: (args) => ({
    props: args,
    template: `<pbo-table-server-company (pboServerSearchChange)="pboServerSearchChange($event)"></pbo-table-server-company>`,
  }),
};

// Tabla más tarjeta lateral con parámetros enviados al servidor.
export const ServerSideComplete: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-table-server-company [serverTotalItems]="serverTotalItems" [serverCurrentPage]="serverCurrentPage"></pbo-table-server-company>`,
  }),
};

// Retardo de 2500 ms (delayMs) y botón manual de recarga.
export const ServerSideSlowNetwork: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-table-server-company [serverTotalItems]="serverTotalItems" [serverCurrentPage]="serverCurrentPage"></pbo-table-server-company>`,
  }),
};

// Estado vacío con cero filas y total cero. No fija loading, página actual ni handlers.
export const ServerSideEmpty: Story = {
  args: { serverTotalItems: 0 },
};

// Selección múltiple (selection.enabled: true, mode: checkbox); pboSelectionChange actualiza el arreglo de seleccionados.
// La selección se limpia al cambiar de página.
export const ServerSideCheckboxSelection: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-table-server-company [serverTotalItems]="serverTotalItems" [serverCurrentPage]="serverCurrentPage"></pbo-table-server-company>`,
  }),
};

// Selección única (mode: radio); el primer elemento emitido es la selección actual.
// La selección vuelve a null al cambiar de página.
export const ServerSideRadioSelection: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-table-server-company [serverTotalItems]="serverTotalItems" [serverCurrentPage]="serverCurrentPage"></pbo-table-server-company>`,
  }),
};
