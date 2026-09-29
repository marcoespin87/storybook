import { cx } from './cx';
import { ChevronIcon, UserIcon } from './icons';
import './cortex.css';

export interface RegisterCardProps {
  title?: string;
  subtitle?: string;
  /** Figma: true. false = sin icono (divergente) */
  showIcon?: boolean;
  /** Figma: `default` (80px). `compact` = 64px (divergente) */
  size?: 'default' | 'compact';
  forceHover?: boolean;
  onClick?: () => void;
}

export const RegisterCard = ({
  title = '¿No tienes usuario y contraseña?',
  subtitle = 'Regístrate para iniciar sesión',
  showIcon = true, size = 'default', forceHover, onClick,
}: RegisterCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cx('cx-register', size === 'compact' && 'cx-register--compact', forceHover && 'is-hover')}
  >
    {showIcon && <UserIcon className="cx-register__icon" />}
    <span className="cx-register__texts">
      <span className="cx-register__title">{title}</span>
      <span className="cx-register__sub">{subtitle}</span>
    </span>
    <ChevronIcon className="cx-register__chevron" />
  </button>
);
