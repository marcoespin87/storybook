import type { Meta, StoryObj } from '@storybook/react-vite';
import { RegisterCard } from './RegisterCard';
import { figmaDesign } from './figma';

const meta = {
  title: 'Cortex/Componentes/RegisterCard',
  component: RegisterCard,
  tags: ['autodocs'],
  parameters: figmaDesign(),
} satisfies Meta<typeof RegisterCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '✅ Default (Figma)',
  tags: ['concordante'],
  parameters: { docs: { description: { story: 'Igual a Figma: 430×80, padding 0 20px, gap 16px, borde 1px #CCD4DE, radio 8px.' } } },
};
export const Hover: Story = { name: '🟡 Hover', tags: ['extension'], args: { forceHover: true } };
export const WithoutIcon: Story = {
  name: '❌ Sin icono',
  tags: ['divergente'],
  args: { showIcon: false },
  parameters: { docs: { description: { story: '**No concuerda:** Figma incluye el icono de usuario 28×28 a la izquierda.' } } },
};
export const Compact: Story = {
  name: '❌ Compacta (64px)',
  tags: ['divergente'],
  args: { size: 'compact' },
  parameters: { docs: { description: { story: '**No concuerda:** alto 64px y padding 16px. Figma define 80px y 20px.' } } },
};
