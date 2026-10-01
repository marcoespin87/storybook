import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AlertComponent } from './alert.component';
// ver documento: CustomContentAlert compone un ButtonComponent en modo link; el doc no lista el decorator de imports.
import { ButtonComponent } from '../../molecules/button/button.component';

const meta: Meta<AlertComponent> = {
  title: 'Organisms/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ButtonComponent] })],
  args: {
    title: 'Alert Title',
    text: 'This is an alert message to inform you about something important.',
  },
  argTypes: {
    ariaLabelAlert: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del alert.',
      if: { arg: 'type', neq: 'global' },
    },
    title: {
      control: { type: 'text' },
      description: 'Título del mensaje.',
      if: { arg: 'type', neq: 'global' },
    },
    ariaLabelTitle: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del título.',
      table: { defaultValue: { summary: 'global' } },
    },
    text: { control: { type: 'text' }, description: 'Contenido principal.' },
    ariaLabelText: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del texto.',
      table: { defaultValue: { summary: 'global' } },
    },
    closable: {
      control: { type: 'boolean' },
      description: 'Permite cerrar sin emitir evento al padre.',
      table: { defaultValue: { summary: 'false' } },
    },
    showCloseIcon: {
      control: { type: 'boolean' },
      description: 'Permite cierre por el usuario.',
      table: { defaultValue: { summary: 'false' } },
    },
    ariaLabelAlertIcon: {
      control: { type: 'text' },
      description: 'Etiqueta accesible del icono.',
      table: { defaultValue: { summary: 'global' } },
    },
    color: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'Tema semántico.',
      table: { defaultValue: { summary: 'success' } },
    },
    onBackground: {
      control: { type: 'boolean' },
      description: 'Ajusta el fondo para contexto sobre pantalla Fondo (Gris 10).',
      if: { arg: 'type', neq: 'global' },
      table: { defaultValue: { summary: 'false' } },
    },
    type: {
      control: { type: 'radio' },
      options: ['context', 'global'],
      description: 'Determina layout y comportamiento.',
      table: { defaultValue: { summary: 'context' } },
    },
  },
  parameters: {
    docs: {
      description: { component: "componentImportDoc('AlertComponent')" },
      source: { transform: '/* simplifica bindings string, abrevia booleanos true, elimina false, autocierra vacíos */' },
    },
  },
};
export default meta;
type Story = StoryObj<AlertComponent>;

// ver documento: los textos exactos de cada mensaje (éxito, problema, preventivo, informativo) no se listan.

/* Stories contextuales */
export const Default: Story = { args: { color: 'success' } };
export const SuccessAlert: Story = { args: { color: 'success' } };
export const ErrorAlert: Story = { args: { color: 'error' } };
export const WarningAlert: Story = { args: { color: 'warning' } };
export const InfoAlert: Story = { args: { color: 'info' } };
export const OnBackgroundAlert: Story = {
  args: { color: 'info', onBackground: true },
  // wrapper con fondo var(--pbo-color-background-20) y padding de 24px.
  render: (args) => ({
    props: args,
    template: `<div style="background: var(--pbo-color-background-20); padding: 24px;"><pbo-alert [title]="title" [text]="text" [color]="color" [onBackground]="onBackground"></pbo-alert></div>`,
  }),
};

/* Stories globales: solo fijan text; title queda oculto en Controls por la condición del tipo. */
export const GlobalSuccessAlert: Story = { args: { type: 'global', color: 'success' } };
export const GlobalErrorAlert: Story = { args: { type: 'global', color: 'error' } };
export const GlobalWarningAlert: Story = { args: { type: 'global', color: 'warning' } };
export const GlobalInfoAlert: Story = { args: { type: 'global', color: 'info' } };

/* Estados de cierre */
export const AutomaticCloseAlert: Story = {
  // Cierre gestionado sin emitir evento al padre.
  args: { closable: true },
};
export const ManualCloseAlert: Story = {
  // Cierre que emite un evento al padre; ver documento: no documenta el nombre del evento.
  args: { closable: false, showCloseIcon: true },
};

/* Contenido personalizado */
export const CustomContentAlert: Story = {
  // type global; proyecta #customText con texto y ButtonComponent en modo link; no define customTitle.
  args: { type: 'global' },
  render: (args) => ({
    props: args,
    template: `
      <pbo-alert type="global">
        <ng-template #customText>Texto personalizado <pbo-button variant="link">Acción</pbo-button></ng-template>
      </pbo-alert>`,
  }),
};
