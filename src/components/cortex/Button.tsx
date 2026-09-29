import type { ButtonHTMLAttributes } from 'react';
import { cx } from './cx';
import './cortex.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: `default` (radio 8px). `pill` = radio 24px (divergente) */
  shape?: 'default' | 'pill';
  /** Figma: `default` (48px). `compact` = 40px (divergente) */
  size?: 'default' | 'compact';
  /** Figma: true (430px). false = ancho según contenido (divergente) */
  fullWidth?: boolean;
  /** Solo para documentar estados interactivos en Storybook */
  forceState?: 'hover' | 'active' | 'focus';
}

export const Button = ({ shape = 'default', size = 'default', fullWidth = true, forceState, className, children, ...rest }: ButtonProps) => (
  <button
    type="button"
    className={cx(
      'cx-btn',
      shape === 'pill' && 'cx-btn--pill',
      size === 'compact' && 'cx-btn--compact',
      !fullWidth && 'cx-btn--auto',
      forceState && `is-${forceState}`,
      className,
    )}
    {...rest}
  >
    {children}
  </button>
);
