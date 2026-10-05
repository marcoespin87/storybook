/*eslint-disable @typescript-eslint/naming-convention */
import type { Meta, StoryObj } from '@storybook/angular';

const typography = [
  { utility: 'H1/Title L', variable: 'pbo-title-lg' },
  { utility: 'H2/Title M', variable: 'pbo-title-md' },
  { utility: 'H3/Title S', variable: 'pbo-title-sm' },
  { utility: 'H4/Title XS', variable: 'pbo-title-xs' },

  { utility: 'Subtitle L', variable: 'pbo-subtitle-lg' },
  { utility: 'Subtitle M', variable: 'pbo-subtitle-md' },
  { utility: 'Subtitle S', variable: 'pbo-subtitle-sm' },

  { utility: 'Body XL/Regular', variable: 'pbo-body-regular-xl' },
  { utility: 'Body XL/Bold', variable: 'pbo-body-bold-xl' },
  { utility: 'Body L/Regular', variable: 'pbo-body-regular-lg' },
  { utility: 'Body L/Bold', variable: 'pbo-body-bold-lg' },
  { utility: 'Body M/Regular', variable: 'pbo-body-regular-md' },
  { utility: 'Body M/Bold', variable: 'pbo-body-bold-md' },
  { utility: 'Body S/Regular', variable: 'pbo-body-regular-sm' },
  { utility: 'Body S/Bold', variable: 'pbo-body-bold-sm' },
  { utility: 'Body XS/Regular', variable: 'pbo-body-regular-xs' },
  { utility: 'Body XS/Bold', variable: 'pbo-body-bold-xs' },

  { utility: 'Caption/Regular', variable: 'pbo-caption-regular' },
  { utility: 'Caption/Bold', variable: 'pbo-caption-bold' },

  { utility: 'Label L/Bold', variable: 'pbo-label-bold-lg' },
  { utility: 'Label L/Regular', variable: 'pbo-label-regular-lg' },
  { utility: 'Label M/Bold', variable: 'pbo-label-bold-md' },
  { utility: 'Label M/Regular', variable: 'pbo-label-regular-md' },
  { utility: 'Label S/Bold', variable: 'pbo-label-bold-sm' },
  { utility: 'Label S/Regular', variable: 'pbo-label-regular-sm' }
];

const meta: Meta = {
  title: 'Atoms',
  parameters: {
    docs: {
      description: {
        component:
          'Typography utilities follow the pattern: `--pbo-* + -title|-subtitle|-body|-caption|-label + -xl|-lg|-md|-sm|-xs`.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Typography: Story = {
  parameters: {
    options: {
      showPanel: false
    }
  },
  render: () => ({
    props: { typography },
    template: `
<div class="p-3">
  <h1 class="pbo-subtitle-lg font-bold mb-2">Typography</h1>
  <p class="mb-6 text-gray-700">
    All typography utilities follow the pattern <code>--pbo-* + -title|-subtitle|-body|-caption|-label + -xl|-lg|-md|-sm|-xs</code>.
  </p>
  <div class="flex flex-col gap-3">
    @for (item of typography; track item.variable) {
      <div style="text-align: center;">
        <div class="border rounded-lg p-6 bg-white shadow-sm flex flex-col items-center gap-2">
          <span [class]="(item.variable || '').trim()">{{ item.utility }}</span>
          <span class="pbo-label-bold-md text-gris-oscuro-90">{{ item.variable }}</span>
        </div>
      </div>
    }
  </div>
</div>
`
  })
};
