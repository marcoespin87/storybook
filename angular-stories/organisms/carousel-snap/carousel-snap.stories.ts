import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CarouselSnapComponent } from './carousel-snap.component';
import { CarouselSnapChipsFilterDemoComponent } from './carousel-snap-chips-filter-demo.component';
// ver documento: usa DividerComponent dentro de las tarjetas; el decorator exacto no se detalla.
import { DividerComponent } from '../../molecules/divider/divider.component';

type ProductCategory = 'credits' | 'investments' | 'accounts';
interface IProduct {
  id: number;
  name: string;
  balance: number;
  accountNumber: string;
  category?: ProductCategory;
}

// 20 productos con nombres secuenciales; balance y los cuatro últimos dígitos del accountNumber usan Math.random() (no determinista, ver documento).
// ver documento: formato exacto del nombre y del número enmascarado no se detalla.
const products: IProduct[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  balance: Math.random() * 10000,
  accountNumber: `**** ${Math.floor(1000 + Math.random() * 9000)}`,
}));

const meta: Meta<CarouselSnapComponent> = {
  title: 'Organisms/Carousel Snap',
  component: CarouselSnapComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [DividerComponent, CarouselSnapChipsFilterDemoComponent] })],
  args: {
    gap: '1rem',
    ariaLabel: 'Carousel',
    prevLabel: 'Previous',
    nextLabel: 'Next',
    showDots: true,
    autoPlay: false,
    autoplayMs: 5000,
    animationMs: 900,
  },
  argTypes: {
    class: { control: { type: 'text' }, description: 'Clases CSS del contenedor.' },
    gap: {
      control: { type: 'text' },
      description: 'Separación entre elementos.',
      table: { defaultValue: { summary: '1rem' } },
    },
    ariaLabel: { control: { type: 'text' }, description: 'Nombre accesible del carrusel.' },
    prevLabel: { control: { type: 'text' }, description: 'Etiqueta accesible del botón anterior.' },
    nextLabel: { control: { type: 'text' }, description: 'Etiqueta accesible del botón siguiente.' },
    showDots: {
      control: { type: 'boolean' },
      description: 'Muestra puntos de navegación.',
      table: { defaultValue: { summary: 'true' } },
    },
    autoPlay: {
      control: { type: 'boolean' },
      description: 'Activa reproducción automática.',
      table: { defaultValue: { summary: 'false' } },
    },
    autoplayMs: {
      control: { type: 'number' },
      description: 'Intervalo de autoplay; 0 lo desactiva.',
      table: { defaultValue: { summary: '5000' } },
    },
    animationMs: {
      control: { type: 'number' },
      description: 'Duración de la animación de scroll.',
      table: { defaultValue: { summary: '900' } },
    },
    pboPageChange: { action: 'pboPageChange', description: 'Emite el nuevo índice de página.' },
  },
  parameters: {
    // Dos backgrounds con el mismo valor (ver documento); las stories fijan el background `gray`.
    backgrounds: {
      values: [
        { name: 'dark', value: '#f5f5f5' },
        { name: 'gray', value: '#f5f5f5' },
      ],
      default: 'gray',
    },
    docs: {
      description: { component: "componentImportDoc('CarouselSnapComponent')" },
      source: { transform: '/* normaliza bindings string, abrevia booleanos true, elimina false, autocierra vacíos */' },
    },
  },
};
export default meta;
type Story = StoryObj<CarouselSnapComponent>;

// Estructura de tarjeta (248px de alto): cabecera 80px con gradiente primario, bloque 48x48, nombre,
// número de cuenta enmascarado, Divider secundario y balance. Cuerpo: calc(100% - 80px).
const cardTemplate = (size = 'width:345px;height:248px') => `
  <div *ngFor="let p of products" style="${size}">
    <div style="height:80px"></div>
    <div style="height:calc(100% - 80px)">
      <div style="width:48px;height:48px"></div>
      <strong>{{ p.name }}</strong>
      <span>{{ p.accountNumber }}</span>
      <pbo-divider></pbo-divider>
      <span>{{ p.balance }}</span>
    </div>
  </div>`;

export const Default: Story = {
  // Carrusel full width, cards estándar, 20 productos.
  render: (args) => ({
    props: { ...args, products },
    template: `<pbo-carousel-snap [gap]="gap" [ariaLabel]="ariaLabel" [prevLabel]="prevLabel" [nextLabel]="nextLabel" [showDots]="showDots" [autoPlay]="autoPlay" [autoplayMs]="autoplayMs" [animationMs]="animationMs" (pboPageChange)="pboPageChange($event)">${cardTemplate()}</pbo-carousel-snap>`,
  }),
};

export const GridWith8Columns: Story = {
  // Restringido a ocho columnas desde el breakpoint md (md:col-span-8).
  render: (args) => ({
    props: { ...args, products },
    template: `<div class="md:col-span-8"><pbo-carousel-snap [gap]="gap" (pboPageChange)="pboPageChange($event)">${cardTemplate()}</pbo-carousel-snap></div>`,
  }),
};

export const GridWith5Columns: Story = {
  // Restringido a cinco columnas desde el breakpoint md (md:col-span-5).
  render: (args) => ({
    props: { ...args, products },
    template: `<div class="md:col-span-5"><pbo-carousel-snap [gap]="gap" (pboPageChange)="pboPageChange($event)">${cardTemplate()}</pbo-carousel-snap></div>`,
  }),
};

export const CustomWidthAndHeight: Story = {
  // Items 200 x 300 px (tarjetas simples de tamaño personalizado).
  render: (args) => ({
    props: { ...args, products },
    template: `<pbo-carousel-snap [gap]="gap" (pboPageChange)="pboPageChange($event)">${cardTemplate('width:200px;height:300px')}</pbo-carousel-snap>`,
  }),
};

export const WithChipsFilter: Story = {
  // Importa y renderiza CarouselSnapChipsFilterDemoComponent; ver documento: su lógica interna no se incluye en el análisis.
  render: () => ({ template: `<carousel-snap-chips-filter-demo></carousel-snap-chips-filter-demo>` }),
};
