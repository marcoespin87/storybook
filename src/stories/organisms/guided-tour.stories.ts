/*eslint-disable @typescript-eslint/naming-convention */
import { signal } from '@angular/core';
import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import {
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  GuidedTourComponent,
  HeaderComponent
} from '../../app/components';
import { ITourAction } from '../../lib/interfaces/i-guided-tour.interfaces';
import { componentImportDoc } from '../utils';

const meta: Meta<GuidedTourComponent> = {
  component: GuidedTourComponent,
  title: 'Organisms/Guided Tour',
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description:
        'Two-way bound model (`model<boolean>`) that controls tour visibility. ' +
        'Use `[(visible)]` in the template so the parent can show or hide the tour programmatically ' +
        'and automatically receive the updated value when the user closes it via the close button.',
      table: { defaultValue: { summary: 'false' } }
    },
    steps: {
      control: 'object',
      description:
        'Array of `IGuidedTourStep` objects defining the content for each stage of the tour. ' +
        'Each entry requires a `title` (card heading) and a `description` (body text). ' +
        'The `target` field accepts only element ID (`#id`) ' +
        'to resolve the anchor DOM element for that step.',
      table: { type: { summary: 'IGuidedTourStep[]' } }
    },
    ariaLabel: {
      control: 'text',
      description:
        'ARIA label applied to the tour card dialog element. ' +
        'Used by screen readers and other assistive technologies to describe the component purpose. ' +
        'Override the default value when the page context requires a more specific label.',
      table: { defaultValue: { summary: 'Guided Tour Component' } }
    },
    isMobile: {
      control: 'boolean',
      description:
        'Set to `true` when the tour is rendered on a mobile viewport. ' +
        'Switches the card `max-width` from `21.25rem` (desktop) to `20.5rem` (mobile). ' +
        "Typically driven by the consuming application's responsive breakpoint logic.",
      table: { defaultValue: { summary: 'false' } }
    },
    styleClass: {
      control: 'text',
      description:
        'Optional CSS class appended to the tour card container. ' +
        'Use it to apply consumer-specific theme overrides or layout rules ' +
        'without modifying the component internals.',
      table: { defaultValue: { summary: '' } }
    },
    pboTourAction: {
      action: 'pboTourAction',
      description:
        'Output event emitted on every user interaction with the navigation controls. ' +
        'The payload is an `ITourAction` object:\n\n' +
        '| Field | Type | Present when |\n' +
        '|---|---|---|\n' +
        "| `action` | `'prev' \\| 'next' \\| 'close'` | Always |\n" +
        "| `from` | `number` | `'prev' / 'next'` |\n" +
        "| `to` | `number` | `'prev' / 'next'` |\n" +
        "| `currentStepIndex` | `number` | `'close'` |\n" +
        '| `step` | `IGuidedTourStep` | Always |\n\n' +
        'Listen with `(pboTourAction)="handler($event)"` to react to navigation or closure events.',
      table: {
        type: { summary: 'OutputEmitterRef<ITourAction>' },
        category: 'outputs'
      }
    }
  },
  decorators: [
    componentWrapperDecorator(
      (story) =>
        `<div style="display: flex; justify-content: flex-start; min-height:300px;">${story}</div>`
    )
  ],
  parameters: {
    docs: {
      source: {
        transform: (source: string) =>
          source
            .replaceAll(/\s*\[([^\]]+)\]="'([^']+)'"/g, '$1="$2"')
            .replaceAll(/\s*\[([^\]]+)\]="undefined"/g, '')
            .replaceAll(/\s*\[([^\]]+)\]="true"/g, ' $1')
            .replaceAll(/\s*\[([^\]]+)\]="false"/g, '')
            .replaceAll(/<([\w-]+)([^>]*)><\/\1>/g, '<$1$2 />')
            .replaceAll(/\s{2,}/g, ' ')
            .replaceAll(/>\s+</g, '><')
      },
      description: {
        component: componentImportDoc('GuidedTourComponent')
      }
    }
  }
};

export default meta;

type Story = StoryObj<GuidedTourComponent>;

export const Default: Story = {
  args: {
    steps: [
      {
        title: 'Caracteristica 1',
        description:
          'Descripcion general de caracteristica 1, esta seccion no puede exceder las 6 lineas'
      },
      {
        title: 'Caracteristica 2',
        description:
          'Descripcion general de caracteristica 2, esta seccion no puede exceder las 6 lineas'
      },
      {
        title: 'Caracteristica 3',
        description:
          'Descripcion general de caracteristica 3, esta seccion no puede exceder las 6 lineas'
      },
      {
        title: 'Caracteristica 4',
        description:
          'Descripcion general de caracteristica 4, esta seccion no puede exceder las 6 lineas'
      },
      {
        title: 'Caracteristica 5',
        description:
          'Descripcion general de caracteristica 5, esta seccion no puede exceder las 6 lineas'
      }
    ],
    visible: true
  }
};

export const WithEventLogging: Story = {
  name: 'With Event Logging',
  render: (): any => {
    const visible = signal<boolean>(true);

    const onTourAction = (event: ITourAction): void => {
      console.log(event);
    };

    return {
      props: {
        visible,
        onTourAction,
        steps: [
          {
            title: 'Caracteristica 1',
            description:
              'Descripcion general de caracteristica 1, esta seccion no puede exceder las 6 lineas'
          },
          {
            title: 'Caracteristica 2',
            description:
              'Descripcion general de caracteristica 2, esta seccion no puede exceder las 6 lineas'
          },
          {
            title: 'Caracteristica 3',
            description:
              'Descripcion general de caracteristica 3, esta seccion no puede exceder las 6 lineas'
          }
        ]
      },
      template: `
        <pbo-guided-tour
          [steps]="steps"
          [(visible)]="visible"
          (pboTourAction)="onTourAction($event)"
        />
      `
    };
  }
};

const usageExampleTemplate = `
  <main class="relative min-h-[720px] bg-gray-50 p-6 md:p-10">
    <pbo-header id="usage-example-header" class="mb-6 block w-full" [showBorder]="true">
      <ng-template #content>
        <div class="flex h-full items-center justify-between">
          <pbo-button label="Inicio" color="tertiary" />
          <pbo-avatar
            id="usage-example-avatar"
            class="relative"
            [class.z-30]="activeTarget() === 'avatar'"
            label="JD"
            size="md"
          />
        </div>
      </ng-template>
    </pbo-header>

    <section class="pbo-row min-h-[640px] items-stretch">
      <pbo-card class="relative col-span-full h-full md:col-span-3 md:col-start-1">
        <div class="grid gap-3">
          <pbo-button label="Resumen" color="tertiary" />
          <pbo-button
            id="usage-example-movements"
            label="Movimientos"
            color="tertiary"
            [class.z-30]="activeTarget() === 'movements'"
            [class]="activeTarget() === 'movements' ? 'bg-white' : ''"
          />
          <pbo-button label="Configuracion" color="tertiary" />
        </div>
      </pbo-card>

      <div class="col-span-full flex min-h-[640px] flex-col md:col-span-9 md:col-start-4">
        <div class="pbo-row flex-1 items-center">
          <pbo-button
            id="usage-example-action"
            class="relative col-span-full self-end justify-self-center md:col-span-4 md:col-start-1"
            [class.z-30]="activeTarget() === 'action'"
            label="Realizar operacion"
            color="primary"
          />

          <pbo-card
            id="usage-example-card"
            class="relative col-span-full md:col-span-4 md:col-start-5 xl:col-span-4 xl:col-start-9"
            [class.z-30]="activeTarget() === 'card'"
          >
            <p class="text-sm text-gray-500">Saldo disponible</p>
            <p class="mt-2 text-3xl font-bold text-gray-900">$ 2.480,00</p>
            <p class="mt-2 text-sm text-green-700">Actualizado hace 5 minutos</p>
          </pbo-card>
        </div>
      </div>
    </section>

    @if (visible()) {
      <div class="pointer-events-auto absolute inset-0 z-20 bg-black/60"></div>
      <pbo-guided-tour
        class="z-40"
        [style]="tourPosition()"
        [steps]="steps"
        [(visible)]="visible"
        (pboTourAction)="onTourAction($event)"
      />
    } @else {
      <div class="absolute inset-0 z-40 flex items-center justify-center">
        <pbo-button label="Relanzar tour" color="primary" (pboClick)="restartTour()" />
      </div>
    }
  </main>
\`;

export const UsageExample: Story = {
  name: 'Usage Example',
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent,
        ButtonComponent,
        CardComponent,
        GuidedTourComponent,
        HeaderComponent
      ]
    })
  ],
  render: (): any => {
    const activeTarget = signal<'avatar' | 'menu' | 'movements' | 'card' | 'action'>('avatar');
    const tourPosition = signal<Record<string, string>>({
      position: 'absolute',
      top: '152px',
      right: '32px',
      left: 'auto',
      bottom: 'auto'
    });

    const stepTargets = ['avatar', 'movements', 'card', 'action'] as const;

    const positions = [
      { position: 'absolute', top: '152px', right: '32px', left: 'auto', bottom: 'auto' },
      { position: 'absolute', top: '220px', left: '244px', right: 'auto', bottom: 'auto' },
      { position: 'absolute', top: '420px', left: '154px', right: 'auto', bottom: 'auto' },
      { position: 'absolute', top: '592px', left: '268px', right: 'auto', bottom: 'auto' }
    ];

    const visible = signal<boolean>(true);

    const restartTour = (): void => {
      activeTarget.set('avatar');
      tourPosition.set(positions[0]);
      visible.set(true);
    };

    const onTourAction = (event: ITourAction): void => {
      if (event.to === undefined) return;

      const target = stepTargets[event.to];

      activeTarget.set(target);
      tourPosition.set(positions[event.to]);
    };

    return {
      props: {
        activeTarget,
        onTourAction,
        restartTour,
        tourPosition,
        visible,
        steps: [
          {
            title: 'Tu perfil',
            description: 'Desde aqui puedes consultar y administrar la informacion de tu perfil.',
            target: '#usage-example-avatar'
          },
          {
            title: 'Menu principal',
            description: 'Usa este boton para consultar tus movimientos recientes.',
            target: '#usage-example-movements'
          },
          {
            title: 'Resumen de cuenta',
            description: 'Consulta el saldo disponible y el estado de tu cuenta.',
            target: '#usage-example-card'
          },
          {
            title: 'Nueva operacion',
            description: 'Inicia una operacion desde este boton de accion.',
            target: '#usage-example-action'
          }
        ]
      },
      template: usageExampleTemplate
    };
  }
};
