import { useState, type ReactNode } from 'react';
import { cx } from './cx';
import { Logo } from './Logo';
import { Button } from './Button';
import { TextField } from './TextField';
import { RegisterCard } from './RegisterCard';
import { ArrowLeftIcon, GlobeIcon, LockIcon, MonitorIcon, ShieldIcon } from './icons';
import './cortex.css';

export interface LoginPageProps {
  /** Figma: `desktop` 1440×900. `mobile` 390×844 no existe en Figma (divergente) */
  layout?: 'desktop' | 'mobile';
  /** Figma: true. false oculta el panel izquierdo (divergente) */
  showInfoPanel?: boolean;
  /** Valor inicial del usuario. Vacío = estado de Figma (error + botón deshabilitado) */
  initialUsername?: string;
}

const NET_POINTS: Array<[number, number]> = [[120, 900], [360, 420], [560, 700], [610, 900], [830, 560], [500, 260], [250, 620], [700, 120]];
const NET_EDGES: Array<[number, number]> = [[0, 1], [1, 2], [2, 3], [2, 4], [1, 5], [5, 7], [1, 6], [6, 0], [4, 7]];

const Network = () => (
  <svg className="cx-login__net" viewBox="0 0 830 900" preserveAspectRatio="none" aria-hidden>
    {NET_EDGES.map(([a, b]) => (
      <line key={`${a}-${b}`} x1={NET_POINTS[a][0]} y1={NET_POINTS[a][1]} x2={NET_POINTS[b][0]} y2={NET_POINTS[b][1]} stroke="rgba(79,195,247,.18)" strokeWidth="1" />
    ))}
    {NET_POINTS.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="rgba(79,195,247,.5)" />)}
  </svg>
);

const InfoRow = ({ icon, children }: { icon: ReactNode; children: string }) => (
  <div className="cx-row">
    <span className="cx-row__icon">{icon}</span>
    <p className="cx-row__text">{children}</p>
  </div>
);

export const LoginPage = ({ layout = 'desktop', showInfoPanel = true, initialUsername = '' }: LoginPageProps) => {
  const [username] = useState(initialUsername);
  const empty = username.trim() === '';
  return (
    <div className={cx('cx-login', layout === 'mobile' && 'cx-login--mobile', !showInfoPanel && 'cx-login--no-info')}>
      <aside className="cx-login__left">
        <Network />
        <div className="cx-cards">
          <section className="cx-card">
            <h2 className="cx-card__title">¡Recomendaciones para ti!</h2>
            <InfoRow icon={<LockIcon />}>No compartas tu usuario ni contraseña, evita guardarlos en el navegador y cámbialos periódicamente. Su uso y resguardo son tu responsabilidad.</InfoRow>
            <InfoRow icon={<ShieldIcon />}>Cortex nunca solicita contraseñas por correo, chat o mensajes. Si alguien lo hace, no compartas tu información.</InfoRow>
            <InfoRow icon={<MonitorIcon />}>Verifica siempre que ingresas desde el sitio oficial de Cortex y mantén actualizado tu sistema operativo y navegador.</InfoRow>
          </section>
          <section className="cx-card">
            <h2 className="cx-card__title">¡Protege tu dinero y tus datos!</h2>
            <p className="cx-card__text">
              Saca el máximo provecho a nuestros canales. Descubre cómo en nuestras <a href="#guias">Guías de uso</a> y <a href="#tips">Tips de Seguridad</a>.
            </p>
          </section>
        </div>
        <p className="cx-login__copyright">©2026 Cortex. Todos los derechos reservados.</p>
      </aside>

      <main className="cx-login__right">
        <button type="button" className="cx-topbar__back" aria-label="Volver"><ArrowLeftIcon /></button>
        <button type="button" className="cx-topbar__lang"><GlobeIcon />Translate to English</button>
        <div className="cx-form">
          <Logo />
          <h1 className="cx-form__title">Bienvenido a Cortex Empresas</h1>
          <TextField
            label="Usuario"
            placeholder="Ingresa tu usuario"
            defaultValue={username}
            state={empty ? 'error' : 'default'}
            helperText="Este campo es obligatorio"
          />
          <Button disabled={empty}>Continuar</Button>
          <a className="cx-link" href="#recuperar">¿Olvidaste tu usuario? Recupéralo</a>
          <RegisterCard />
        </div>
        <p className="cx-login__help">Si tienes problemas para ingresar, comunícate al: <strong>1800 CORTEX</strong></p>
      </main>
    </div>
  );
};
