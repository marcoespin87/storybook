import { useId } from 'react';
import { cx } from './cx';
import './cortex.css';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  /** Figma solo muestra `error`. El resto son extensiones. */
  state?: 'default' | 'focus' | 'error' | 'disabled';
  helperText?: string;
  /** Figma: true. false = error sin icono (divergente) */
  showErrorIcon?: boolean;
  /** Figma: `default` (8px). `square` = 4px (divergente) */
  shape?: 'default' | 'square';
  /** Figma: `token` (#C62828). `alt` = #D32F2F (divergente) */
  errorTone?: 'token' | 'alt';
}

export const TextField = ({
  label, placeholder, defaultValue, state = 'default', helperText,
  showErrorIcon = true, shape = 'default', errorTone = 'token',
}: TextFieldProps) => {
  const id = useId();
  const helpId = `${id}-help`;
  const isError = state === 'error';
  return (
    <div
      className={cx(
        'cx-field',
        isError && 'cx-field--error',
        state === 'disabled' && 'cx-field--disabled',
        shape === 'square' && 'cx-field--square',
        errorTone === 'alt' && 'cx-field--alt-error',
      )}
    >
      <label className="cx-field__label" htmlFor={id}>{label}</label>
      <div className={cx('cx-input', state === 'focus' && 'is-focus')}>
        <input
          id={id}
          className="cx-input__control"
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={state === 'disabled'}
          aria-invalid={isError || undefined}
          aria-describedby={isError && helperText ? helpId : undefined}
        />
        {isError && showErrorIcon && <span className="cx-input__error-icon" aria-hidden>!</span>}
      </div>
      {isError && helperText && <span id={helpId} className="cx-field__helper">{helperText}</span>}
    </div>
  );
};
