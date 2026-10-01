import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';
// ver documento: el doc no lista los imports del decorator; se infieren de la composición mostrada (Badge, Button, Divider, InputText, Toggle).
import { BadgeComponent } from '../../molecules/badge/badge.component';
import { ButtonComponent } from '../../molecules/button/button.component';
import { DividerComponent } from '../../molecules/divider/divider.component';
import { ToggleComponent } from '../../molecules/toggle/toggle.component';
import { InputTextComponent } from '../input-text/input-text.component';

// ver documento: CardTypesEnum / ComponentStatusEnum no se definen en el doc; se usan sus valores como strings.
const meta: Meta<CardComponent> = {
  title: 'Organisms/Card',
  component: CardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent, ButtonComponent, DividerComponent, ToggleComponent, InputTextComponent],
    }),
  ],
  args: {
    type: 'BORDER',
    disabled: false,
    status: null,
    class: '',
    presentation: false,
    bodyPadding: null,
    strokeColor: null,
  } as any,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['BORDER', 'DASHED', 'SHADOW', 'BG_GREEN', 'BG_GRAY', 'STROKE'],
      description: 'Define el estilo visual.',
      table: { defaultValue: { summary: 'BORDER' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deshabilita la interacción y los clics.',
      table: { defaultValue: { summary: 'false' } },
    },
    status: {
      control: { type: 'select' },
      options: [null, 'SELECTED', 'MULTIPLE_SELECTED'],
      description: 'Estado de selección.',
      table: { defaultValue: { summary: 'null' } },
    },
    class: {
      control: { type: 'text' },
      description: 'Personalización del host.',
      table: { defaultValue: { summary: "''" } },
    },
    presentation: {
      control: { type: 'boolean' },
      description:
        'Elimina estados interactivos y el borde, salvo en STROKE; aplica padding responsive (32px 16px en móvil, 40px 16px desde 768px).',
      table: { defaultValue: { summary: 'false' } },
    },
    bodyPadding: {
      control: { type: 'text' },
      description: 'Sobrescribe el padding del cuerpo. Cualquier padding CSS válido. Tiene prioridad sobre el padding predeterminado.',
      table: { defaultValue: { summary: 'null' } },
    },
    pboClick: {
      action: 'cardClicked',
      description: 'Evento emitido si la tarjeta no está deshabilitada.',
    },
    strokeColor: {
      control: { type: 'color' },
      description: 'Color del borde izquierdo. Solo aplica a STROKE.',
      table: { defaultValue: { summary: 'null' } },
    },
  },
  parameters: {
    docs: {
      description: { component: "componentImportDoc('CardComponent') + descripción manual del componente (ver documento)." },
      source: { transform: '/* simplifica bindings string, abrevia booleanos true, elimina false, autocierra vacíos */' },
    },
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  // ver documento: el texto de Default afirma "default shadow style" pero el arg global es BORDER.
  render: (args) => ({ props: args, template: `<pbo-card [type]="type">Contenido proyectado</pbo-card>` }),
};

export const CustomBodyPadding: Story = {
  args: { type: 'BORDER' } as any,
  // Compara padding predeterminado, 2rem y 0.
  render: (args) => ({
    props: args,
    template: `
      <pbo-card [type]="type">Padding predeterminado</pbo-card>
      <pbo-card [type]="type" bodyPadding="2rem">Padding 2rem</pbo-card>
      <pbo-card [type]="type" bodyPadding="0">Padding 0</pbo-card>`,
  }),
};

export const BorderType: Story = { args: { type: 'BORDER' } as any };

export const BorderTypeWithIcon: Story = {
  args: { type: 'BORDER', presentation: true } as any,
  // ver documento: lista de tarjetas con icono y contador; contenido no detallado.
  render: (args) => ({ props: args, template: `<pbo-card [type]="type" [presentation]="presentation">Icono + contador</pbo-card>` }),
};

export const BorderTypeWithIconDisabled: Story = {
  args: { type: 'BORDER', disabled: true } as any,
};

export const BorderTypeWithSelected: Story = {
  args: { type: 'BORDER' } as any,
  // Selección única entre cuatro tarjetas; traduce item.selected a SELECTED o null; conecta pboClick.
  render: (args) => ({
    props: {
      ...args,
      items: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
      ],
      onCardSelect(id: number) {
        (this as any).items.forEach((item: any) => (item.selected = item.id === id));
      },
    },
    template: `<pbo-card *ngFor="let item of items" [type]="type" [status]="item.selected ? 'SELECTED' : null" (pboClick)="onCardSelect(item.id)">Tarjeta {{ item.id }}</pbo-card>`,
  }),
};

export const BorderTypeDisabled: Story = { args: { type: 'BORDER', disabled: true } as any };
export const DashedType: Story = { args: { type: 'DASHED' } as any };
export const ShadowType: Story = { args: { type: 'SHADOW' } as any };

export const ShadowTypeWithSelected: Story = {
  args: { type: 'SHADOW' } as any,
  // Selección única con sombra; onCardSelect devuelve string vacío (ver documento).
  render: (args) => ({
    props: {
      ...args,
      items: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
      ],
      onCardSelect(id: number) {
        (this as any).items.forEach((item: any) => (item.selected = item.id === id));
        return '';
      },
    },
    template: `<pbo-card *ngFor="let item of items" [type]="type" [status]="item.selected ? 'SELECTED' : null" (pboClick)="onCardSelect(item.id)">Tarjeta {{ item.id }}</pbo-card>`,
  }),
};

export const BackgroundGreenType: Story = {
  // Fondo verde y clase personalizada (nombre de la clase: ver documento).
  args: { type: 'BG_GREEN' } as any,
};
export const BackgroundGrayType: Story = { args: { type: 'BG_GRAY' } as any };

export const StrokeType: Story = {
  // Borde izquierdo de 8 px, color predeterminado (primario).
  args: { type: 'STROKE', presentation: true } as any,
};

export const StrokeTypeCustomColor: Story = {
  // Compara color primario, secundario y error (tokens CSS; nombres exactos: ver documento).
  args: { type: 'STROKE' } as any,
};

export const StrokeTypeDisabled: Story = { args: { type: 'STROKE', disabled: true } as any };

export const Disabled: Story = { args: { disabled: true } as any };

export const CustomClass: Story = {
  // Personalización visual mediante clases (nombre de la clase: ver documento).
  args: { presentation: true } as any,
};

export const CustomClassDisabled: Story = {
  // ver documento: no propaga disabled desde args; lo fija de forma estática en la plantilla.
  render: (args) => ({ props: args, template: `<pbo-card [disabled]="true">Personalización + disabled</pbo-card>` }),
};

export const AllCardTypes: Story = {
  // Comparador visual de los seis tipos.
  render: (args) => ({
    props: { ...args, types: ['BORDER', 'DASHED', 'SHADOW', 'BG_GREEN', 'BG_GRAY', 'STROKE'] },
    template: `<pbo-card *ngFor="let t of types" [type]="t">{{ t }}</pbo-card>`,
  }),
};

export const PresentationCardWithBorder: Story = {
  // Caso de presentación con Toggle e InputText.
  args: { type: 'BORDER', presentation: true } as any,
};

export const UseCaseOne: Story = {
  // Tarjetas de beneficios con selección y alert; incluye status SELECTED en args (cada tarjeta calcula el suyo desde item.selected).
  args: { type: 'BORDER', status: 'SELECTED' } as any,
};

export const UseCaseTwo: Story = {
  // Tarjeta promocional con botón.
  args: { type: 'BORDER', presentation: true } as any,
};

// ver documento: StrokeTypeWithSelected y StrokeTypeUseCase (expanded por item, detalle solo si expanded y existe detail) se mencionan en 2.7/2.8/2.10 pero no figuran en la tabla de stories principales; no se escriben.
