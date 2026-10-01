import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DynamicDialogDemoComponent } from './dynamic-dialog-demo.component';
import { CompactPaddingDemoComponent } from './compact-padding-demo.component';

// ver documento: IDialogService y DialogService pertenecen al servicio de la librería; el doc no indica de dónde se importan.
// import { IDialogService, DialogService } from '<ver documento>';
declare const IDialogService: any;
declare const DialogService: any;

// El meta.component de la story es el demo (DynamicDialogDemoComponent); la descripción importada
// corresponde a DynamicDialogComponent. No hay argTypes ni args globales.
const meta: Meta<DynamicDialogDemoComponent> = {
  title: 'Organisms/DynamicDialog',
  component: DynamicDialogDemoComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [{ provide: IDialogService, useExisting: DialogService }],
    }),
  ],
  parameters: {
    docs: {
      description: { component: "componentImportDoc('DynamicDialogComponent')" },
      // meta.parameters.docs.source está vacío; cada story da su snippet manual en parameters.docs.source.code.
      source: {},
    },
  },
};
export default meta;
type Story = StoryObj<DynamicDialogDemoComponent>;

export const Default: Story = {
  // Render del componente demo definido como meta.component.
  parameters: {
    docs: {
      source: {
        code: `<pbo-dynamic-dialog />
// IDialogService se provee con DialogService; se usa para abrir el diálogo con contenido dinámico.`,
      },
    },
  },
};

export const CompactPadding: Story = {
  // Renderiza CompactPaddingDemoComponent con moduleMetadata dentro del objeto retornado por render (no decorator de story).
  render: () => ({
    moduleMetadata: { imports: [CompactPaddingDemoComponent] },
    template: `<compact-padding-demo></compact-padding-demo>`,
  }),
  parameters: {
    docs: {
      description: { story: 'compactPadding: true reduce el padding de 32px a 16px; útil cuando el contenido ya gestiona su propio espaciado o necesita un layout más compacto.' },
      source: {
        code: `this.dialogService.show(
  { closable: true, compactPadding: true },
  BuscadorEmpresasComponent,
  {
    outputs: {
      cerrarComponente: () => this.dialogService.close()
    }
  }
);`,
      },
    },
  },
};
