import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Organisms/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: { type: 'text' },
      description: 'Clases personalizadas del host.',
      table: { defaultValue: { summary: '' } },
    },
    background: {
      control: { type: 'text' },
      description: 'Clase de fondo personalizada.',
      table: { defaultValue: { summary: 'bg-surface' } },
    },
    // ver documento: `showBorder` se usa en Authenticated pero NO está documentado en argTypes
  },
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('HeaderComponent')
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'dark', value: '#f5f5f5' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    docs: {
      source: {
        // ver documento: simplifica bindings string, elimina bindings undefined y autocierra elementos vacíos
        transform: (code: string) => code,
      },
    },
  },
  // ver documento: "varias stories añaden decorators con imports: []" (no se indica en cuáles)
  decorators: [moduleMetadata({ imports: [] })],
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Simple: Story = {};

// ver documento: ng-template #content con logo + Search; searchValue = signal('') enlazado con [(value)]
export const CustomWithSearch: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-header><ng-template #content><!-- logo a la izquierda, <pbo-search [(value)]="searchValue" /> a la derecha --></ng-template></pbo-header>`,
  }),
};

// ver documento: ng-template #content con logo + Avatar (label 'LC', performAction)
export const CustomWithAvatar: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-header><ng-template #content><!-- logo + <pbo-avatar label="LC" /> interactivo --></ng-template></pbo-header>`,
  }),
};

export const CustomBackground: Story = {
  args: { background: 'bg-secondary-10' },
};

// ver documento: logo centrado dentro de ng-template #content
export const CustomLogo: Story = {
  render: (args) => ({
    props: args,
    template: `<pbo-header><ng-template #content><!-- logo centrado --></ng-template></pbo-header>`,
  }),
};

// ver documento: logo + showBorder (booleano usado fuera de argTypes)
export const Authenticated: Story = {
  render: (args) => ({
    props: { ...args, showBorder: true },
    template: `<pbo-header [showBorder]="showBorder"><ng-template #content><!-- logo --></ng-template></pbo-header>`,
  }),
};
