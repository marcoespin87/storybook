import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { EmptyStateComponent } from './empty-state.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';
import { CarouselComponent } from '../carousel/carousel.component';

// ver documento: ruta real del icono monocromático de búsqueda no se lista.
const iconUrl = '/assets/icons/search-monochrome.svg';

const meta: Meta<EmptyStateComponent> = {
  title: 'Organisms/EmptyState',
  component: EmptyStateComponent,
  tags: ['autodocs'],
  // El decorator global importa también el propio EmptyStateComponent (ver documento, observaciones).
  decorators: [moduleMetadata({ imports: [EmptyStateComponent, ButtonComponent, CarouselComponent] })],
  args: {
    title: 'No results were found',
    // ver documento: "Texto de recomendación para ajustar búsqueda o filtros" (texto exacto no listado).
    description: '',
    type: 'primary',
    icon: iconUrl,
  } as any,
  argTypes: {
    title: { control: { type: 'text' }, description: 'Título del estado vacío.' },
    description: { control: { type: 'text' }, description: 'Descripción de apoyo.' },
    icon: {
      control: { type: 'boolean' },
      mapping: { true: iconUrl, false: undefined },
      description: 'Muestra u oculta el icono.',
      table: { defaultValue: { summary: 'true' } },
    },
    type: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Define fondo transparente (primary) o gris (secondary).',
      table: { defaultValue: { summary: 'primary' } },
    },
    iconFilter: {
      control: { type: 'boolean' },
      description: 'Aplica filtro de color al icono.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
  parameters: {
    docs: {
      description: { component: "componentImportDoc('EmptyStateComponent')" },
      // elimina bindings undefined, simplifica string, abrevia true, conserva false como arg="false", autocierra vacíos.
      source: { transform: '/* ver documento, 2.7 */' },
    },
  },
};
export default meta;
type Story = StoryObj<EmptyStateComponent>;

export const Default: Story = { args: { type: 'primary', icon: iconUrl } as any };

export const Secondary: Story = { args: { type: 'secondary', icon: iconUrl } as any };

export const NoIcon: Story = {
  // ver documento: hereda los args globales (icon: iconUrl); no define icon: undefined ni false.
};

export const IconWithoutFilter: Story = { args: { iconFilter: false, icon: iconUrl } as any };

export const WithActions: Story = {
  // Proyecta en `actions`: botón "Change Filters" y un carrusel LANDING (tres imágenes, una por página, indicadores, lazy loading).
  render: (args) => ({
    props: args,
    template: `
      <pbo-empty-state [title]="title" [description]="description" [type]="type" [icon]="icon">
        <pbo-button actions>Change Filters</pbo-button>
        <pbo-carousel actions type="LANDING" [numVisible]="1" [numScroll]="1" [showIndicators]="true">
          <!-- ver documento: URLs de las tres imágenes no se listan -->
        </pbo-carousel>
      </pbo-empty-state>`,
  }),
};
