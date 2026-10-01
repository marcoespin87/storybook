import type { Meta, StoryObj } from '@storybook/angular';
import { PaginatorComponent } from './paginator.component';

// ver documento: `IPageChangeEvent` es el payload de pboPageChange (página y tamaño seleccionados)
interface IPageChangeEvent {
  page: number;
  pageSize: number;
}

// ver documento: textos personalizados en español (se usa en CustomLabelConfig y ShowPageSizeSelector)
interface IPaginationLabelConfig {
  previous: string;
  next: string;
  showing: string;
  of: string;
  noResults: string;
  rows: string;
}
const labelConfig: IPaginationLabelConfig = {
  previous: 'Anterior',
  next: 'Siguiente',
  showing: 'Mostrando',
  of: 'de',
  noResults: 'No hay resultados',
  rows: 'Filas',
};

// ver documento: `PaginatorCase` — currentPage y currentPageSize son signals
interface PaginatorCase {
  totalItems: number;
  pageSize: number;
  pageSizeOptions: number[];
  showPageSizeSelector: boolean;
  currentPage: { set(value: number): void };
  currentPageSize: { set(value: number): void };
}

// ver documento: todas las stories implementan el mismo handler
const onChangePage = (item: PaginatorCase, event: IPageChangeEvent): void => {
  item.currentPage.set(event.page);
  item.currentPageSize.set(event.pageSize);
};

const meta: Meta<PaginatorComponent> = {
  title: 'Organisms/Paginator',
  component: PaginatorComponent,
  tags: ['autodocs'],
  argTypes: {}, // ver documento: argTypes global vacío
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('PaginatorComponent')
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
type Story = StoryObj<PaginatorComponent>;

// ver documento: todas usan tamaño inicial efectivo 5 y opciones [5, 10, 25]; pboPageChange -> onChangePage
const render = (totalItems: number, currentPage: number, extra = '') => () => ({
  props: { totalItems, currentPage, pageSizeOptions: [5, 10, 25], labelConfig, onChangePage },
  template: `<pbo-paginator [totalItems]="totalItems" [currentPage]="currentPage" [pageSizeOptions]="pageSizeOptions" ${extra} (pboPageChange)="onChangePage($event)" />`,
});

export const BasicFewPages: Story = { render: render(35, 1) };

export const ManyPagesEndingWithEllipses: Story = { render: render(150, 1) };

export const ManyPagesWithEllipsesBothSides: Story = { render: render(150, 15) };

export const ManyPagesWithEllipsesBeginning: Story = { render: render(150, 30) };

export const CustomLabelConfig: Story = { render: render(35, 1, '[labelConfig]="labelConfig"') };

export const ShowPageSizeSelector: Story = {
  render: render(35, 1, '[labelConfig]="labelConfig" [showPageSizeSelector]="true"'),
};
