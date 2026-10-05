/**
 * @description
 * Tipo que define las variantes visuales del boton segun especificaciones de diseno.
 * @typedef {('normal' | 'neutral' | 'vertical' | '')} ButtonVariant
 */
export type ButtonVariant = 'normal' | 'neutral' | 'vertical' | 'secondary' | '';

/**
 * @description
 * Tipo que define la posicion del icono relativa al texto del boton.
 * @typedef {('left' | 'right')} IconPosition
 */
export type IconPosition = 'left' | 'right';

/**
 * @description
 * Tipo que define los tipos nativos de boton HTML soportados.
 * @typedef {('button' | 'submit' | 'reset')} ButtonType
 */
export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * @description
 * Reglas de mapeo entre combinaciones de color, variante y modo link con sus clases CSS correspondientes.
 * @constant {Array<{color: string, variant?: string, link?: boolean, class: string}>} RULES_BUTTON_CLASS
 */
export const RULES_BUTTON_CLASS = [
  { color: 'secondary', variant: 'neutral', class: 'p-button-secondary-neutral' },
  { color: 'tertiary', variant: 'vertical', class: 'p-button-tertiary-vertical' },
  { color: 'tertiary', variant: 'neutral', class: 'p-button-tertiary-neutral' },
  { color: 'alert', variant: 'neutral', class: 'p-button-danger-neutral' },
  { color: 'secondary', link: true, class: 'p-button-link-secondary' },
  { color: 'alert', variant: 'secondary', class: 'p-button-danger-secondary' }
];

/**
 * @description
 * Reglas de mapeo para agregar clase grid movil en variantes de botones.
 */
export const RULE_GRID_BUTTON_CLASS = [
  { color: 'primary', variant: '' },
  { color: 'primary', variant: 'normal' },
  { color: 'secondary', variant: '' },
  { color: 'secondary', variant: 'normal' },
  { color: 'secondary', variant: 'neutral' },
  { color: 'alert', variant: '' },
  { color: 'alert', variant: 'normal' },
  { color: 'alert', variant: 'secondary' }
];
