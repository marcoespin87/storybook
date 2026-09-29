import { cx } from './cx';
import './cortex.css';

export interface LogoProps {
  /** Muestra "EMPRESAS" bajo el nombre. Figma: true */
  showSubtitle?: boolean;
  /** `inverse` = texto blanco para fondos oscuros (no existe en Figma) */
  tone?: 'default' | 'inverse';
}

export const Logo = ({ showSubtitle = true, tone = 'default' }: LogoProps) => (
  <div className={cx('cx-logo', tone === 'inverse' && 'cx-logo--inverse')} aria-label="Cortex Empresas">
    <svg className="cx-logo__mark" viewBox="0 0 44 44" aria-hidden>
      <defs>
        <linearGradient id="cx-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4FC3F7" />
          <stop offset="1" stopColor="#0B3D91" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="12" fill="url(#cx-logo-g)" />
      <path d="M30.67 27.93A10.5 10.5 0 1 1 30.67 16.07" fill="none" stroke="#fff" strokeWidth="5" />
      <circle cx="30.5" cy="22" r="3.5" fill="#fff" />
    </svg>
    <span className="cx-logo__words">
      <span className="cx-logo__name">Cortex</span>
      {showSubtitle && <span className="cx-logo__sub">EMPRESAS</span>}
    </span>
  </div>
);
