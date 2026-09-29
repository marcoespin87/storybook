import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';
import { figmaDesign } from './figma';

const meta = {
  title: 'Cortex/Componentes/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: figmaDesign(),
} satisfies Meta<typeof Logo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '✅ Default (Figma)',
  tags: ['concordante'],
  parameters: { docs: { description: { story: 'Isotipo 44×44 (radio 12px, degradado #4FC3F7→#0B3D91), gap 12px, "Cortex" 700 30px, "EMPRESAS" 600 10px tracking 0.24em.' } } },
};
export const Inverse: Story = {
  name: '🟡 Inverso (fondo oscuro)',
  tags: ['extension'],
  args: { tone: 'inverse' },
  parameters: { backgrounds: { default: 'dark' }, docs: { description: { story: 'No existe en Figma. Útil si el logo se usa sobre el panel azul.' } } },
  decorators: [(S) => <div style={{ background: '#071633', padding: 24, borderRadius: 12 }}><S /></div>],
};
export const WithoutSubtitle: Story = {
  name: '❌ Sin "EMPRESAS"',
  tags: ['divergente'],
  args: { showSubtitle: false },
  parameters: { docs: { description: { story: '**No concuerda:** Figma siempre muestra el subtítulo "EMPRESAS" bajo el nombre.' } } },
};
