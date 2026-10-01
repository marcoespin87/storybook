import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { IconComponent } from '../../molecules/icon/icon.component';

// ver documento: el selector del componente no se indica; `pbo-tabs` en los templates es un marcador de fixture.
// Modelo de tab (ITabData): header, template (TemplateRef), hasIcon, pathIcon, disabled.
// ver documento: los textos de cada header, los templates de contenido y la ruta del icono (Home) no se detallan.

const meta: Meta<TabsComponent> = {
  title: 'Organisms/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [TabsComponent, IconComponent] })],
  args: {
    isMobile: false,
  },
  argTypes: {
    tabs: {
      control: { type: 'object' },
      description: 'Arreglo ITabData[].',
      table: { defaultValue: { summary: '[]' } },
    },
    isMobile: {
      control: { type: 'boolean' },
      description: 'Alterna estilos mobile y desktop.',
      table: { defaultValue: { summary: 'false' } },
    },
    activeTab: {
      control: { type: 'number' },
      description: 'Índice del tab activo.',
      table: { defaultValue: { summary: '0' } },
    },
    activeTabChange: {
      action: 'activeTabChange',
      description: 'Emite el nuevo índice.',
      table: { type: { summary: 'EventEmitter<number>' } },
    },
  },
  parameters: {
    // La transformación de docs reemplaza rutas de iconos por {{PATH_ICON}} y simplifica bindings y booleanos.
    // Descripción: el componente soporta layouts desktop y mobile; se complementa con componentImportDoc('TabsComponent').
    docs: { source: { transform: (code: string) => code.replace(/path-icon="[^"]*"/g, 'path-icon="{{PATH_ICON}}"') } },
  },
};
export default meta;
type Story = StoryObj<TabsComponent>;

// Todas las stories enlazan (activeTabChange)="activeTab = $event".

// Desktop, cuatro tabs con iconos, cuarto disabled.
export const Default: Story = {
  render: (args) => ({
    props: { ...args, activeTab: 0 },
    template: `<pbo-tabs [isMobile]="isMobile" [activeTab]="activeTab" (activeTabChange)="activeTab = $event"></pbo-tabs>`,
  }),
};

// Desktop, cuatro tabs sin iconos.
export const TabsEscritorio: Story = {
  render: (args) => ({
    props: { ...args, activeTab: 0 },
    template: `<pbo-tabs [isMobile]="isMobile" [activeTab]="activeTab" (activeTabChange)="activeTab = $event"></pbo-tabs>`,
  }),
};

// Mobile, cinco tabs sin iconos.
export const TabsMobileSinIconos: Story = {
  args: { isMobile: true },
  render: (args) => ({
    props: { ...args, activeTab: 0 },
    template: `<pbo-tabs [isMobile]="isMobile" [activeTab]="activeTab" (activeTabChange)="activeTab = $event"></pbo-tabs>`,
  }),
};

// Mobile, cinco tabs con iconos (importa IconComponent localmente además del import global).
export const TabsMobileConIconos: Story = {
  args: { isMobile: true },
  decorators: [moduleMetadata({ imports: [IconComponent] })],
  render: (args) => ({
    props: { ...args, activeTab: 0 },
    template: `<pbo-tabs [isMobile]="isMobile" [activeTab]="activeTab" (activeTabChange)="activeTab = $event"></pbo-tabs>`,
  }),
};
