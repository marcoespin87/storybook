import type { Meta, StoryObj } from '@storybook/angular';
import { ContextMenuComponent } from './context-menu.component';

// ver documento: rutas de icono reales no se listan; se usa un placeholder.
const iconPath = '/assets/icons/placeholder.svg';

// MenuItem: key?, label, icon?, command, separator, destructive (+ disabled usado en las stories pero no listado en el modelo).
const items = [
  { label: 'Guardar', icon: iconPath, separator: false, destructive: false, command: () => alert('Guardar') },
  { label: 'Editar', icon: iconPath, separator: true, disabled: false, destructive: false, command: () => alert('Editar') },
  { label: 'Descargar PDF', icon: iconPath, separator: true, disabled: true, destructive: false },
  { label: 'Eliminar', icon: iconPath, separator: false, destructive: true, command: () => alert('Eliminar') },
];

const meta: Meta<ContextMenuComponent> = {
  title: 'Organisms/Context Menu',
  component: ContextMenuComponent,
  tags: ['autodocs'],
  args: { items } as any,
  argTypes: {
    items: {
      control: { type: 'object' },
      description:
        'Elementos mostrados en el menú (MenuItem[]): key (opcional), label, icon (ruta opcional), command (callback), separator (divisor visual), destructive (estilo destructivo).',
      table: { defaultValue: { summary: '[]' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Controler to able/disable',
      table: { defaultValue: { summary: 'false' } },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Estilo visual del botón disparador.',
      table: { defaultValue: { summary: 'primary' } },
    },
  },
  parameters: {
    docs: {
      description: { component: "componentImportDoc('ContextMenuComponent')" },
      source: {
        transform:
          '/* simplifica bindings string, elimina undefined, abrevia true, elimina false, reemplaza iconos por {{PATH_ICON}} y labels por {{ITEM_LABEL}}, autocierra y compacta espacios */',
      },
    },
  },
  // ver documento: presentación con wrapper alineado a la derecha y altura mínima de 300px (el doc no da el código del decorator).
};
export default meta;
type Story = StoryObj<ContextMenuComponent>;

export const contextMenuWithCustomIcons: Story = {
  // Hereda los items globales.
};

export const contextMenuWithoutIcons: Story = {
  // Redefine items sin icon; conserva separator, disabled y destructive.
  args: { items: items.map(({ icon, ...rest }) => rest) } as any,
};
