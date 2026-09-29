import type { SVGProps } from 'react';

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export const LockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" aria-hidden {...base} {...p}><rect x="2" y="7.5" width="14" height="9" rx="2" /><path d="M5 7.5V5a4 4 0 0 1 8 0v2.5" /></svg>
);
export const ShieldIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" aria-hidden {...base} {...p}><path d="M9 1l7 2.6v5.4c0 4.2-3.4 6.8-7 8-3.6-1.2-7-3.8-7-8V3.6z" /><path d="M6 9l2.2 2.2L12.3 7" /></svg>
);
export const MonitorIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" aria-hidden {...base} {...p}><rect x="1" y="2" width="16" height="11" rx="2" /><path d="M9 13v3.5M5.5 16.5h7" /></svg>
);
export const UserIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 28 28" aria-hidden {...base} {...p}><circle cx="14" cy="8" r="5" /><path d="M4 26c0-8 20-8 20 0" /></svg>
);
export const ChevronIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 9 16" aria-hidden {...base} strokeWidth={1.8} {...p}><path d="M1 1l7 7-7 7" /></svg>
);
export const GlobeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden {...base} {...p}><circle cx="9" cy="9" r="7.5" /><path d="M1.5 9h15M9 1.5c2 2.2 3 4.7 3 7.5s-1 5.3-3 7.5c-2-2.2-3-4.7-3-7.5s1-5.3 3-7.5z" /></svg>
);
export const ArrowLeftIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...base} strokeWidth={1.8} {...p}><path d="M20 12H4M10 6l-6 6 6 6" /></svg>
);
