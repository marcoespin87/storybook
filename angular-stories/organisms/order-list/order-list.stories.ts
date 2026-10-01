import type { Meta } from '@storybook/angular';
import { OrderListComponent } from './order-list.component';

// ver documento: interfaz abierta `OrderListItem` con `id` obligatorio y propiedades dinámicas
interface OrderListItem {
  id: string | number;
  [key: string]: unknown;
}

// ver documento: tres contactos de ejemplo (los valores concretos no se listan); campos usados:
// id, contactName, contactEmail, contactPhone, markerIcon (el tercero lleva icono de check envolvente verde) e isMarked (ningún ejemplo lo incluye)
const contactListArgs: OrderListItem[] = [];

const meta: Meta<OrderListComponent> = {
  title: 'Organisms/Order List',
  component: OrderListComponent,
  tags: ['autodocs'],
  args: {
    items: contactListArgs,
    nameField: 'contactName',
    imageField: '',
    categoryField: 'contactEmail',
    priceField: 'contactPhone',
    pricePrefix: 'Phone: ',
    perItemMarker: true,
    markerFlagField: 'isMarked',
    markerIconField: 'markerIcon',
    markerSize: 24,
  } as Partial<OrderListComponent>,
  argTypes: {
    items: { control: { type: 'object' }, description: 'Arreglo de contactos.' },
    nameField: { control: { type: 'text' }, description: 'Campo del nombre.' },
    showAvatar: { control: { type: 'boolean' }, description: 'Activa o desactiva avatares.' },
    markerType: {
      control: { type: 'select' },
      options: ['checklist', 'puntuales'],
      description: 'Tipo de marcador.',
      table: { defaultValue: { summary: 'checklist' } },
    },
    imageField: { control: { type: 'text' }, description: 'Campo opcional de imagen.' },
    categoryField: { control: { type: 'text' }, description: 'Campo del email o categoría.' },
    priceField: { control: { type: 'text' }, description: 'Campo del teléfono o valor destacado.' },
    // ver documento: pricePrefix, perItemMarker, markerFlagField, markerIconField y markerSize se usan en args pero NO tienen argType
  },
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('OrderListComponent'); sin transformación de código
  },
};
export default meta;

// ver documento: el archivo no exporta stories individuales; solo configura el meta con args globales
