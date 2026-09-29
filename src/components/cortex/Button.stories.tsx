import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { figmaDesign } from './figma';

const meta = {
  title: 'Cortex/Componentes/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Continuar' },
  parameters: figmaDesign(),
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

/* ✅ CONCORDANTE ------------------------------------------------------- */
export const Disabled: Story = {
  name: '✅ Deshabilitado (Figma)',
  tags: ['concordante'],
  args: { disabled: true },
  parameters: { docs: { description: { story: 'Igual al frame de Figma: 430×48, radio 8px, fondo #E8EDF4, texto Inter 600 15px rgba(140,148,161,.8).' } } },
};

/* 🟡 EXTENSIÓN (no existe en Figma, respeta tokens) ------------------- */
export const Enabled: Story = {
  name: '🟡 Habilitado',
  tags: ['extension'],
  parameters: { docs: { description: { story: 'Figma solo dibuja el botón deshabilitado. Este estado usa --c-primary (#1565C0) y mantiene medidas y tipografía.' } } },
};
export const Hover: Story = { name: '🟡 Hover', tags: ['extension'], args: { forceState: 'hover' } };
export const Active: Story = { name: '🟡 Active', tags: ['extension'], args: { forceState: 'active' } };
export const Focus: Story = { name: '🟡 Focus visible', tags: ['extension'], args: { forceState: 'focus' } };

/* ❌ DIVERGENTE (contradice Figma a propósito) ------------------------ */
export const Pill: Story = {
  name: '❌ Pill (radio 24px)',
  tags: ['divergente'],
  args: { shape: 'pill' },
  parameters: { docs: { description: { story: '**No concuerda:** border-radius 24px. Figma define 8px (--radius-sm).' } } },
};
export const Compact: Story = {
  name: '❌ Compacto (40px)',
  tags: ['divergente'],
  args: { size: 'compact' },
  parameters: { docs: { description: { story: '**No concuerda:** alto 40px y texto 14px. Figma define 48px y 15px.' } } },
};
export const AutoWidth: Story = {
  name: '❌ Ancho automático',
  tags: ['divergente'],
  args: { fullWidth: false },
  parameters: { docs: { description: { story: '**No concuerda:** el ancho depende del texto (padding 0 24px). Figma fija 430px, igual que el input.' } } },
};
