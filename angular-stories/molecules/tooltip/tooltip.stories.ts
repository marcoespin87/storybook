import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonComponent } from '../button/button.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { BadgeComponent } from '../badge/badge.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ChipsComponent } from '../chips/chips.component';
import { DividerComponent } from '../divider/divider.component';
import { IconComponent } from '../icon/icon.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { ToggleComponent } from '../toggle/toggle.component';

// ver documento: no existe un TooltipComponent propio; la story documenta el TooltipModule de
// primeng/tooltip aplicado a nueve componentes anfitriones. No se indica de dónde se importa
// componentImportDoc.

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipArrowClass = 'none' | 'p-tooltip-tip-left' | 'p-tooltip-tip-right';

// Nota del documento: esta interfaz no incluye `pTooltip`, aunque existe en el meta global
// y todas las plantillas lo usan.
interface TooltipStoryArgs {
  position?: TooltipPosition;
  arrowClass?: TooltipArrowClass;
  hideDelay?: number;
}

const meta: Meta = {
  title: 'Molecules/Tooltip',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        AvatarComponent,
        BadgeComponent,
        CheckboxComponent,
        ChipsComponent,
        DividerComponent,
        IconComponent,
        RadioButtonComponent,
        ToggleComponent,
        TooltipModule,
      ],
    }),
  ],
  args: {
    hideDelay: 400000,
    pTooltip: 'Tooltip',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición del tooltip.',
    },
    arrowClass: {
      control: { type: 'select' },
      options: ['none', 'p-tooltip-tip-left', 'p-tooltip-tip-right'],
      description: 'Clase para la posición o presentación de la flecha.',
    },
    hideDelay: {
      control: { type: 'number' },
      description: 'Milisegundos antes de ocultarse tras salir el puntero.',
      table: { defaultValue: { summary: '400000' } },
    },
    pTooltip: {
      control: { type: 'text' },
      description: 'Contenido textual del tooltip.',
      table: { defaultValue: { summary: 'Tooltip' } },
    },
  },
  parameters: {
    controls: { disabled: true },
    docs: {
      description: { component: componentImportDoc('TooltipModule', 'primeng/tooltip') },
      // No se declara docs.source.transform.
    },
  },
};

export default meta;
type Story = StoryObj<TooltipStoryArgs>;

// Todas las stories usan render(args) con `props: args` y aplican a su componente anfitrión:
// pTooltip, [tooltipPosition]="position", [tooltipStyleClass]="arrowClass" y [hideDelay]="hideDelay".
// ver documento: los nombres exactos de los inputs de cada anfitrión (label, color, etc.) no se detallan.
const tooltipArgs = { position: 'top', arrowClass: 'none' } as const;

// pbo-avatar: label SM, color primary y clase de texto.
export const Avatar: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-avatar pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-avatar>`,
  }),
};

// pbo-badge: texto dinámico `Position: {{position}}`.
export const Badge: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-badge text="Position: {{position}}" pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-badge>`,
  }),
};

// pbo-button: label dinámico, color primary.
export const Button: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-button pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-button>`,
  }),
};

// pbo-checkbox: label igual a la posición.
export const Checkbox: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-checkbox [label]="position" pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-checkbox>`,
  }),
};

// pbo-chips: una opción, sin icono, sin category style, tamaño sm.
export const Chips: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-chips pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-chips>`,
  }),
};

// pbo-divider: color primary, ancho completo dentro de un contenedor de 64 unidades
// (el contenedor tiene dos niveles anidados con márgenes superiores en ambos).
export const Divider: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-divider pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-divider>`,
  }),
};

// pbo-icon: icono Home bicolor, alt y tamaño 24.
export const Icon: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-icon pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-icon>`,
  }),
};

// pbo-radiobutton: name gender, valor M, label Male y ariaLabel Gender.
export const RadioButton: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-radiobutton name="gender" value="M" label="Male" ariaLabel="Gender" pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-radiobutton>`,
  }),
};

// pbo-toggle: valor inicial true.
export const Toggle: Story = {
  args: { ...tooltipArgs },
  render: (args) => ({
    props: args,
    template: `<pbo-toggle [value]="true" pTooltip="{{ pTooltip }}" [tooltipPosition]="position" [tooltipStyleClass]="arrowClass" [hideDelay]="hideDelay"></pbo-toggle>`,
  }),
};
