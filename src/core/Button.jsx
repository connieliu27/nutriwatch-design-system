import React from 'react';

const base = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, border: '1px solid transparent', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500, whiteSpace: 'nowrap', transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)' };
const sizes = { sm: { height: 32, padding: '0 14px', fontSize: 12 }, md: { height: 40, padding: '0 20px', fontSize: 13 }, lg: { height: 48, padding: '0 24px', fontSize: 15 } };
const variants = {
  primary: { background: 'var(--green-800)', color: 'var(--white)', borderRadius: 'var(--radius-pill)' },
  secondary: { background: 'var(--white)', color: 'var(--ink-900)', borderColor: 'var(--line-strong)', borderRadius: 'var(--radius-pill)' },
  ghost: { background: 'var(--white)', color: 'var(--ink-600)', borderColor: 'var(--line-strong)', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-mono)', fontWeight: 400 },
  block: { background: 'var(--white)', color: 'var(--green-800)', borderColor: 'var(--green-200)', borderRadius: 'var(--radius-l)', fontFamily: 'var(--font-mono)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em' }
};
const hovers = { primary: { background: 'var(--green-700)' }, secondary: { borderColor: 'var(--ink-300)' }, ghost: { borderColor: 'var(--ink-300)', color: 'var(--ink-900)' }, block: { background: 'var(--green-50)' } };

export function Button({ variant = 'primary', size = 'md', icon, fullWidth, disabled, children, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = Object.assign({}, base, sizes[size], variants[variant], hover && !disabled ? hovers[variant] : null,
    { width: fullWidth ? '100%' : undefined, opacity: disabled ? 0.45 : 1, cursor: disabled ? 'not-allowed' : 'pointer', transform: press && !disabled ? 'scale(0.98)' : 'none' },
    variant === 'block' && size !== 'sm' ? { height: size === 'lg' ? 64 : 56, fontSize: 15 } : null, style);
  return <button type="button" disabled={disabled} onClick={onClick} style={s}
    onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
    onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>{icon}{children}</button>;
}
