import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { StepperNolinealComponent } from './stepper-nolineal.component';
import { ButtonComponent } from '../../molecules/button/button.component';
import { CheckboxComponent } from '../../molecules/checkbox/checkbox.component';

const meta: Meta<StepperNolinealComponent> = {
  title: 'Organisms/Stepper Nolineal',
  component: StepperNolinealComponent,
  tags: ['autodocs'],
  // Dependencias demostradas: Button y Checkbox. Los templates globales
  // `interactiveTpl` (Mark as Completed / Mark as Incomplete, llama
  // updateCompleted(boolean, levelIndex, subIndex)) y `checkboxTpl`
  // (CheckboxComponent `binary`, `checked` enlazado a sub.completed, `changeEvent`)
  // se definen en el render global; ver documento: sus plantillas completas no se detallan.
  decorators: [moduleMetadata({ imports: [ButtonComponent, CheckboxComponent, StepperNolinealComponent] })],
  args: {
    showLevelBadge: true,
    subitemsInteractive: true,
    verticalSubitems: true,
  },
  argTypes: {
    showLevelBadge: {
      control: { type: 'boolean' },
      description: 'Muestra el badge de cada nivel.',
      table: { defaultValue: { summary: 'true' } },
    },
    subitemsInteractive: {
      control: { type: 'boolean' },
      description: 'Permite interacción con los subitems.',
      table: { defaultValue: { summary: 'true' } },
    },
    verticalSubitems: {
      control: { type: 'boolean' },
      description: 'Define orientación vertical u horizontal.',
      table: { defaultValue: { summary: 'true' } },
    },
    levels: {
      control: { type: 'object' },
      description: 'Arreglo de niveles, subniveles y templates.',
      table: { defaultValue: { summary: '[]' } },
    },
  },
  parameters: {
    // La transformación de docs simplifica bindings de texto y booleanos y autocierra elementos vacíos.
    docs: {
      source: { transform: (code: string) => code },
      // descripción: componentImportDoc('StepperNolinealComponent')
    },
  },
};
export default meta;
type Story = StoryObj<StepperNolinealComponent>;

// ver documento: el selector del componente no se indica; `pbo-stepper-nolineal` en los templates es un marcador de fixture.
// Estructura de cada nivel (levels): header, content?, id?, completed, sublevels?, template? (TemplateRef)

// Stepper interactivo con botones y checkboxes. Badges, interacción y orientación vertical.
export const Default: Story = {
  // ver documento: los niveles se fijan en la plantilla del render y no se detallan
  render: (args) => ({
    props: args,
    template: `<pbo-stepper-nolineal [showLevelBadge]="showLevelBadge" [subitemsInteractive]="subitemsInteractive" [verticalSubitems]="verticalSubitems"></pbo-stepper-nolineal>`,
  }),
};

// Resumen informativo horizontal de origen y destino. Tres flags false.
export const TransferenciaCuentas: Story = {
  args: { showLevelBadge: false, subitemsInteractive: false, verticalSubitems: false },
  // ver documento: los datos demostrativos de cuentas no se detallan
  render: (args) => ({
    props: args,
    template: `<pbo-stepper-nolineal [showLevelBadge]="showLevelBadge" [subitemsInteractive]="subitemsInteractive" [verticalSubitems]="verticalSubitems"></pbo-stepper-nolineal>`,
  }),
};

// Dos niveles informativos con varios subniveles. Tres flags false.
// El segundo nivel está completo y sus tres subniveles incompletos (según el documento).
export const Informative: Story = {
  args: { showLevelBadge: false, subitemsInteractive: false, verticalSubitems: false },
  render: (args) => ({
    props: args,
    template: `<pbo-stepper-nolineal [showLevelBadge]="showLevelBadge" [subitemsInteractive]="subitemsInteractive" [verticalSubitems]="verticalSubitems"></pbo-stepper-nolineal>`,
  }),
};
