import type { Preview } from '@storybook/react-vite';
import '../src/components/cortex/cortex.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: { order: ['Cortex', ['Login', ['Especificaciones', 'Concordancia con Figma']]] },
    },
  },
};
export default preview;
