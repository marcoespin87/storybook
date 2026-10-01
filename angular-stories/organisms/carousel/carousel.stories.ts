import type { Meta, StoryObj } from '@storybook/angular';
import { CarouselComponent } from './carousel.component';

// ver documento: el doc no detalla los imports del decorator; las stories de producto usan TagModule (PrimeNG).
// Datos demostrativos descritos por el doc (interfaz Product, 10 productos, 5 imágenes landing).
interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  category?: string;
  image?: string;
  rating?: number;
}
// ver documento: diez productos de prueba y cinco imágenes externas (valores no listados).
const products: Product[] = [];
const landingImages: string[] = [];
const getSeverity = (status: Product['inventoryStatus']) =>
  status === 'INSTOCK' ? 'success' : status === 'LOWSTOCK' ? 'warn' : 'danger';

const responsiveOptions = [
  { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
  { breakpoint: '768px', numVisible: 2, numScroll: 1 },
  { breakpoint: '560px', numVisible: 1, numScroll: 1 },
];

const meta: Meta<CarouselComponent> = {
  title: 'Organisms/Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
  argTypes: {
    values: { control: false, description: 'Arreglo genérico de elementos.', table: { category: 'Data' } },
    type: {
      control: { type: 'radio' },
      options: ['LANDING', 'PRODUCTS'],
      description: 'Tipo de carrusel.',
      table: { category: 'Appearance', defaultValue: { summary: 'PRODUCTS' } },
    },
    numVisible: {
      control: { type: 'number' },
      description: 'Elementos visibles por página.',
      table: { category: 'Layout', defaultValue: { summary: '3' } },
    },
    numScroll: {
      control: { type: 'number' },
      description: 'Elementos desplazados por navegación.',
      table: { category: 'Layout', defaultValue: { summary: '3' } },
    },
    circular: {
      control: { type: 'boolean' },
      description: 'Navegación infinita.',
      table: { category: 'Behavior', defaultValue: { summary: 'false' } },
    },
    responsiveOptions: { control: false, description: 'Configuración por breakpoint.', table: { category: 'Layout' } },
    autoplayInterval: {
      control: { type: 'number' },
      description: 'Intervalo automático; 0 lo desactiva.',
      table: { category: 'Behavior', defaultValue: { summary: '0' } },
    },
    showIndicators: {
      control: { type: 'boolean' },
      description: 'Muestra indicadores.',
      table: { category: 'Appearance', defaultValue: { summary: 'true' } },
    },
    showNavigators: {
      control: { type: 'boolean' },
      description: 'Muestra flechas.',
      table: { category: 'Appearance', defaultValue: { summary: 'true' } },
    },
    page: {
      control: { type: 'number' },
      description: 'Índice del primer elemento.',
      table: { category: 'Data', defaultValue: { summary: '0' } },
    },
    styleClass: {
      control: { type: 'text' },
      description: 'Clase del componente.',
      table: { category: 'Styling', defaultValue: { summary: "''" } },
    },
    contentClass: {
      control: { type: 'text' },
      description: 'Clase del contenido.',
      table: { category: 'Styling', defaultValue: { summary: "''" } },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Etiqueta accesible.',
      table: { category: 'Accessibility', defaultValue: { summary: 'Content Carousel' } },
    },
    ariaRoleDescription: {
      control: { type: 'text' },
      description: 'Descripción ARIA del rol.',
      table: { category: 'Accessibility', defaultValue: { summary: 'carousel' } },
    },
    pboChange: {
      action: 'pboChange',
      description: 'Evento de cambio de página (EventEmitter<CarouselPageEvent>).',
      table: { category: 'Events' },
    },
  },
  parameters: {
    docs: {
      description: { component: "componentImportDoc('CarouselComponent')" },
      source: { transform: '/* normaliza bindings string, elimina undefined, abrevia true, elimina false, autocierra vacíos */' },
    },
  },
};
export default meta;
type Story = StoryObj<CarouselComponent>;

export const Default: Story = {
  // PRODUCTS, 5 items, 3 visibles, scroll 1, responsive.
  args: { type: 'PRODUCTS', numVisible: 3, numScroll: 1, responsiveOptions, values: products.slice(0, 5) } as any,
  render: (args) => ({
    props: { ...args, getSeverity },
    template: `
      <pbo-carousel [values]="values" [type]="type" [numVisible]="numVisible" [numScroll]="numScroll" [responsiveOptions]="responsiveOptions">
        <ng-template #itemTemplate let-product>{{ product.name }}</ng-template>
      </pbo-carousel>`,
  }),
};

export const LandingType: Story = {
  // LANDING, 1 visible, circular, autoplay 0.
  args: { type: 'LANDING', numVisible: 1, numScroll: 1, circular: true, autoplayInterval: 0, values: landingImages } as any,
  render: (args) => ({
    props: args,
    template: `
      <pbo-carousel [values]="values" [type]="type" [numVisible]="numVisible" [numScroll]="numScroll" [circular]="circular" [autoplayInterval]="autoplayInterval">
        <ng-template #itemTemplate let-image><img [src]="image" alt="" style="width:100%" /></ng-template>
      </pbo-carousel>`,
  }),
};

export const AutoPlay: Story = {
  // LANDING, autoplay 3000, circular, indicadores.
  args: { type: 'LANDING', numVisible: 1, numScroll: 1, autoplayInterval: 3000, circular: true, showIndicators: true, values: landingImages } as any,
};

export const ResponsiveCarousel: Story = {
  // PRODUCTS, numVisible 4 como estado inicial + responsiveOptions por breakpoint.
  args: { type: 'PRODUCTS', numVisible: 4, numScroll: 1, responsiveOptions, values: products } as any,
};

export const WithoutNavigators: Story = {
  // Flechas ocultas, indicadores visibles.
  args: { type: 'PRODUCTS', numScroll: 1, showNavigators: false, showIndicators: true, values: products } as any,
};

export const WithoutIndicators: Story = {
  // Flechas visibles, indicadores ocultos.
  args: { type: 'PRODUCTS', numScroll: 1, showNavigators: true, showIndicators: false, values: products } as any,
};

export const CustomStyling: Story = {
  // 2 visibles, clases personalizadas (nombres: ver documento) y template de ítem con inicial, categoría, precio y rating.
  args: { type: 'PRODUCTS', numVisible: 2, numScroll: 1, values: products } as any,
};
