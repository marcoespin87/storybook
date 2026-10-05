import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { fn } from 'storybook/test';
import { DialogComponent } from './dialog.component';
import { ButtonComponent } from '../../../src/app/components/button/button.component';
import { CheckboxComponent } from '../../molecules/checkbox/checkbox.component';
import { IconComponent } from '../../molecules/icon/icon.component';

// ver documento: ruta real del icono no se lista.
const iconPath = '/assets/icons/placeholder.svg';

const meta: Meta<DialogComponent> = {
  title: 'Organisms/Dialog',
  component: DialogComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ButtonComponent, CheckboxComponent, IconComponent] })],
  args: { pboClick: fn() } as any,
  argTypes: {
    title: { control: { type: 'text' }, description: 'Título del diálogo (texto o HTML).' },
    description: { control: { type: 'text' }, description: 'Descripción principal; puede contener HTML.' },
    question: { control: { type: 'text' }, description: 'Pregunta entre descripción y acciones; puede contener HTML.' },
    icon: { control: { type: 'text' }, description: 'Icono del diálogo (ruta de imagen).' },
    iconStyleClass: {
      control: { type: 'text' },
      description: 'Clase CSS con estilos adicionales del icono.',
      table: { defaultValue: { summary: "''" } },
    },
    visible: {
      control: { type: 'boolean' },
      description: 'Muestra u oculta el diálogo.',
      table: { defaultValue: { summary: 'false' } },
    },
    actions: {
      control: { type: 'object' },
      description:
        'Configuración de botones de acción. Cada acción: label, color, typeButton (ej. button), closable, action (payload emitido por pboClick), disabled.',
    },
    topOffset: {
      control: { type: 'text' },
      description: 'Longitud CSS (64px, 4rem, variables CSS...). Desplaza el overlay bajo un header fijo.',
      table: { defaultValue: { summary: "''" } },
    },
    position: {
      control: { type: 'select' },
      options: ['center', 'top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      description: 'Posición del diálogo.',
      table: { defaultValue: { summary: 'center' } },
    },
    pboClick: { action: 'pboClick', description: 'Emite la propiedad `action` (string) del botón pulsado.' },
    closable: {
      control: { type: 'boolean' },
      description: 'Permite cerrar al pulsar el backdrop; no muestra botón de cierre.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: { component: "componentImportDoc('DialogComponent')" },
      source: { transform: '/* simplifica bindings string, elimina undefined, autocierra vacíos (no abrevia true ni elimina false) */' },
    },
  },
};
export default meta;
type Story = StoryObj<DialogComponent>;

// La mayoría de stories: showDialog = signal(false), se abre desde un Button y se enlaza [(visible)]="showDialog".
const withButton = (inner: string) => `
  <pbo-button (click)="showDialog = true">Abrir</pbo-button>
  <pbo-dialog [(visible)]="showDialog" ${inner}></pbo-dialog>`;

export const Default: Story = {
  // Título, descripción, icono y una acción. ver documento: define closable: false en args, pero la plantilla fija [closable]="true".
  args: { closable: false, icon: iconPath } as any,
  render: (args) => ({
    props: { ...args, showDialog: false },
    template: withButton(`[title]="title" [description]="description" [icon]="icon" [closable]="true" [actions]="actions"`),
  }),
};

export const Actions: Story = {
  // Dos acciones: cierre y emisión de acción (payload observado: logout); el handler cierra el diálogo y muestra un alert.
  render: (args) => ({
    props: { ...args, showDialog: false },
    template: withButton(`[title]="title" [description]="description" [actions]="actions" (pboClick)="showDialog = false"`),
  }),
};

export const QuestionAndActions: Story = {
  // Pregunta, icono rojo y acciones neutral/alert (payload observado: delete_benefeciary).
  render: (args) => ({
    props: { ...args, showDialog: false },
    template: withButton(`[title]="title" [description]="description" [question]="question" [icon]="icon" [actions]="actions" (pboClick)="showDialog = false"`),
  }),
};

export const PropertiesWithTagHtml: Story = {
  // description con HTML (span con clase bold).
  args: { description: 'Texto con <span class="bold">HTML</span>' } as any,
  render: (args) => ({
    props: { ...args, showDialog: false },
    template: withButton(`[title]="title" [description]="description" [actions]="actions" (pboClick)="showDialog = false"`),
  }),
};

export const CustomTemplateHtml: Story = {
  // No usa title/description/question/actions: proyecta todo el contenido y conecta botones propios.
  render: (args) => ({
    props: { ...args, showDialog: false },
    template: `
      <pbo-button (click)="showDialog = true">Abrir</pbo-button>
      <pbo-dialog [(visible)]="showDialog">
        <!-- ver documento: contenido proyectado exacto no se detalla -->
        <pbo-button (click)="showDialog = false">Cerrar</pbo-button>
      </pbo-dialog>`,
  }),
};

export const WithTimer: Story = {
  // Contador desde 5, -1 cada 1000ms; al llegar a 1 detiene el intervalo, restablece y oculta.
  // Título computed con formato 00:SS; pboClose limpia el timer; acciones cerrar sesión / continuar sin conectar pboClick.
  render: (args) => ({
    props: { ...args, showDialog: false, counter: 5 },
    template: withButton(`[title]="'00:0' + counter" [actions]="actions" (pboClose)="counter = 5"`),
  }),
};

export const TermsAndConditions: Story = {
  // Checkbox, lista con tres iconos y acciones computed; "Aceptar y continuar" disabled mientras accepted sea false.
  render: (args) => ({
    props: { ...args, showDialog: false, accepted: false },
    template: `
      <pbo-button (click)="showDialog = true">Abrir</pbo-button>
      <pbo-dialog [(visible)]="showDialog" [actions]="actions">
        <!-- ver documento: texto y lista de iconos no se detallan -->
        <pbo-checkbox (checkedChange)="accepted = $event"></pbo-checkbox>
      </pbo-dialog>`,
  }),
};

export const WithTopOffset: Story = {
  // topOffset: 48px (overlay debajo de un encabezado fijo).
  args: { topOffset: '48px' } as any,
  render: (args) => ({
    props: { ...args, showDialog: false },
    template: withButton(`[title]="title" [topOffset]="topOffset"`),
  }),
};

export const TopPositionDialog: Story = {
  args: { position: 'top' } as any,
  render: (args) => ({
    props: { ...args, showDialog: false },
    template: withButton(`[title]="title" [position]="position"`),
  }),
};
