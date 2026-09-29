import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginPage } from './LoginPage';
import { figmaDesign } from './figma';

const meta = {
  title: 'Cortex/Pantallas/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', ...figmaDesign() },
} satisfies Meta<typeof LoginPage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  name: '✅ Desktop (Figma)',
  tags: ['concordante'],
  parameters: { docs: { description: { story: 'Réplica del frame "Cortex Empresas / Login": 1440×900, input en error y botón deshabilitado. Compárala con el tablero "Redlines (medidas)".' } } },
};
export const DesktopFilled: Story = {
  name: '🟡 Desktop con usuario',
  tags: ['extension'],
  args: { initialUsername: 'marco.empresa' },
  parameters: { docs: { description: { story: 'Flujo siguiente no dibujado en Figma: sin error y con el botón habilitado.' } } },
};
export const Mobile: Story = {
  name: '❌ Mobile (390px)',
  tags: ['divergente'],
  args: { layout: 'mobile' },
  parameters: { docs: { description: { story: '**No concuerda:** Figma solo define desktop. Aquí se oculta el panel izquierdo, el formulario ocupa el 100% con márgenes de 24px y empieza a 96px del borde superior.' } } },
};
export const WithoutInfoPanel: Story = {
  name: '❌ Sin panel informativo',
  tags: ['divergente'],
  args: { showInfoPanel: false },
  parameters: { docs: { description: { story: '**No concuerda:** Figma siempre muestra el panel azul con recomendaciones. Aquí el formulario queda centrado en toda la pantalla.' } } },
};
