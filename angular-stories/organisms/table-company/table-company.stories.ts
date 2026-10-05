import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TableCompanyComponent } from './table-company.component';
import { BadgeComponent } from '../../molecules/badge/badge.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';
import { SplitButtonComponent } from '../split-button/split-button.component';

// ver documento: el selector del componente no se indica; `pbo-table-company` en los templates es un marcador de fixture.
// Componente genérico: TableCompanyComponent<Transfer>. Modelo: ITableColumn + ITableConfig.
// ITableColumn: key, label, footerLabel, isNumeric, valueTransform, sortable, hideOnMobile, sticky ('left' | 'right'), minWidth.
// ITableConfig (según las stories): title, tableClass, pagination, search, searchableKeys, sortableColumns, striped, hoverable,
//   stickyHeader, mensajes de vacío y búsqueda, loadingRows, selection { mode, rowSelectable, rowDisabled },
//   contextMenu.items { key, label, icon, destructive }, rowClass (estático o función), stickyColumns.
// ver documento: MOCK_TRANSFERS, las cinco columnas (ID, Account, Symbol, Available Balance, Account Balance) y la config base
//   no se detallan valor por valor. Balances en USD, locale en-US, dos decimales.
// Config base: paginación deshabilitada (tamaño 5; opciones 5, 10 y 25; labels en español); búsqueda deshabilitada
//   (debounce 300 ms, placeholder 'Buscar...', inicialmente restringida a `account`); sorting global vía `sortableColumns`;
//   sin stripes, hover ni sticky header; cinco filas de loading; selección deshabilitada con modo checkbox.
// Demos externos (no visibles en el archivo): TableBeneficiaryDemoComponent, TableHideOnMobileDemoComponent,
//   TableKeysPreselectedDemoComponent, TableTransferHistoryDemoComponent, TableLocalBeneficiaryDemo.
// El archivo no define bloque `argTypes`. Backgrounds `dark` y `gray` con el mismo valor #f5f5f5.

const meta: Meta<TableCompanyComponent> = {
  title: 'Organisms/TableCompany',
  component: TableCompanyComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [TableCompanyComponent, BadgeComponent, ButtonComponent, SplitButtonComponent] })],
  args: {
    // data: MOCK_TRANSFERS; columns y config: ver comentario superior
    trackBy: 'id',
    loading: false,
    showTotals: true,
  },
  parameters: {
    // La transformación de docs simplifica bindings y booleanos y autocierra componentes vacíos.
    // descripción: componentImportDoc('TableCompanyComponent')
    docs: { source: { transform: (code: string) => code } },
    backgrounds: {
      values: [
        { name: 'dark', value: '#f5f5f5' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
  },
};
export default meta;
type Story = StoryObj<TableCompanyComponent>;

// Tabla base con totales.
export const Simple: Story = {};

// Búsqueda más Badge, SplitButton y Button en `slot-actions`.
export const SimpleWithSearchAndCustomActions: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-table-company [data]="data" [columns]="columns" [config]="config"><div slot-actions><pbo-badge></pbo-badge><pbo-split-button></pbo-split-button><pbo-button></pbo-button></div></pbo-table-company>`,
  }),
};

// Encabezados vacíos y config con título.
export const WithoutHeader: Story = {};

// Paginación local.
export const SimpleWithPagination: Story = {};

// Tabla de ancho limitado y dos columnas.
export const CustomColumn: Story = {};

// Filas con hover.
export const Hoverable: Story = {};

// Filas alternadas.
export const Striped: Story = {};

// Selección múltiple: selection.enabled true, mode checkbox; pboSelectionChange entrega un arreglo de filas.
export const WithCheckbox: Story = {};

// Checkbox condicionado (`rowSelectable` impide seleccionar la fila con id 1) y menú contextual
// con View detail, Download y Delete (destructive).
export const WithConditionalSelection: Story = {};

// Selección única: mode radio; el primer elemento emitido se usa como selección.
export const WithRadioButton: Story = {};

// Estado loading temporal: un botón alterna loading y programa la restauración a los 3000 ms.
export const SimulateLoading: Story = {};

// Demo externo de celda personalizada.
export const CustomCell: Story = {};

// Tabla vacía.
export const WithoutData: Story = {};

// Vacía con buscador.
export const WithoutDataWithSearch: Story = {};

// Vacía con mensajes custom.
export const WithoutDataWithCustomMessages: Story = {};

// Demo externo (TableHideOnMobileDemoComponent): fila móvil custom (mobileRowTemplate / detailTemplate) y detalle.
export const HideOnMobileCustomRow: Story = {};

// `hideOnMobile: true` oculta columnas pequeñas y las lleva a un detalle expandible.
export const HideOnMobile: Story = {};

// Clase de fila dinámica (`rowClass` como función).
export const WithRowClass: Story = {};

// Demo externo (TableKeysPreselectedDemoComponent): selección inicial escribiendo en `selectedRows`.
export const WithPreselectedActiveRows: Story = {};

// Filas no seleccionables o deshabilitadas (`rowDisabled` marca como deshabilitada la fila con id 1).
export const WithDisabledSelectedRows: Story = {};

// Demo externo (TableTransferHistoryDemoComponent): historial.
export const TransferHistory: Story = {};

// Demo externo (TableLocalBeneficiaryDemo): beneficiarios.
export const LocalBeneficiary: Story = {};

// Columnas fijas con overflow horizontal: `sticky: left | right`, `minWidth`, `stickyColumns` desactiva anclajes automáticos.
export const WithStickyColumns: Story = {};

// Ordenamiento local por columnas marcadas (`sortable`).
export const WithSortableColumns: Story = {};
