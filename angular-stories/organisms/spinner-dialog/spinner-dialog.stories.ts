import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerDialogDemoComponent } from './spinner-dialog-demo.component';

// ver documento: el componente documentado es `SpinnerDialogComponent`; la story usa un demo no adjunto.
// El archivo no define args globales, argTypes, eventos ni variantes.
const meta: Meta<SpinnerDialogDemoComponent> = {
  title: 'Organisms/Spinner Dialog',
  component: SpinnerDialogDemoComponent,
  tags: ['autodocs'],
  parameters: {
    // ver documento: la descripción sale de componentImportDoc('SpinnerDialogComponent');
    // la story reemplaza el source con el snippet manual del host global:
    //   <pbo-spinner-dialog />
    docs: {
      source: { code: '<pbo-spinner-dialog />' },
    },
  },
};
export default meta;
type Story = StoryObj<SpinnerDialogDemoComponent>;

// ver documento: componente demo + snippet del host, para explicar instalación y uso global (host en el template raíz, control vía ISpinnerDialogService)
export const Default: Story = {};
