import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './TextField';
import { figmaDesign } from './figma';

const meta = {
  title: 'Cortex/Componentes/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: { label: 'Usuario', placeholder: 'Ingresa tu usuario', helperText: 'Este campo es obligatorio' },
  parameters: figmaDesign(),
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;

/* ✅ CONCORDANTE */
export const ErrorState: Story = {
  name: '✅ Error (Figma)',
  tags: ['concordante'],
  args: { state: 'error' },
  parameters: { docs: { description: { story: 'Igual a Figma: borde 1.5px #C62828, icono "!" 22×22, helper 12px a 8px del input, label a 8px arriba.' } } },
};

/* 🟡 EXTENSIÓN */
export const Default: Story = { name: '🟡 Default', tags: ['extension'], args: { state: 'default' } };
export const Focus: Story = { name: '🟡 Focus', tags: ['extension'], args: { state: 'focus' } };
export const Filled: Story = { name: '🟡 Con valor', tags: ['extension'], args: { state: 'default', defaultValue: 'marco.empresa' } };
export const Disabled: Story = { name: '🟡 Deshabilitado', tags: ['extension'], args: { state: 'disabled' } };

/* ❌ DIVERGENTE */
export const ErrorWithoutIcon: Story = {
  name: '❌ Error sin icono',
  tags: ['divergente'],
  args: { state: 'error', showErrorIcon: false },
  parameters: { docs: { description: { story: '**No concuerda:** Figma muestra el icono de error dentro del input. Aquí solo cambia el borde, así que el error depende únicamente del color (peor accesibilidad).' } } },
};
export const ErrorAltColor: Story = {
  name: '❌ Error con otro rojo',
  tags: ['divergente'],
  args: { state: 'error', errorTone: 'alt' },
  parameters: { docs: { description: { story: '**No concuerda:** usa #D32F2F en lugar del token --c-error #C62828. La diferencia es sutil a la vista, pero rompe el token.' } } },
};
export const Square: Story = {
  name: '❌ Esquinas 4px',
  tags: ['divergente'],
  args: { state: 'error', shape: 'square' },
  parameters: { docs: { description: { story: '**No concuerda:** border-radius 4px. Figma define 8px, igual que el botón y la card.' } } },
};
