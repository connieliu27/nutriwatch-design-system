import React from 'react';

const tones = {
  green: { outline: { color: 'var(--green-600)', borderColor: 'var(--green-200)', background: 'var(--white)' }, soft: { color: 'var(--green-800)', borderColor: 'transparent', background: 'var(--green-50)' }, solid: { color: 'var(--white)', borderColor: 'var(--green-800)', background: 'var(--green-800)' } },
  neutral: { outline: { color: 'var(--ink-600)', borderColor: 'var(--line-strong)', background: 'var(--white)' }, soft: { color: 'var(--ink-600)', borderColor: 'transparent', background: 'var(--chip)' }, solid: { color: 'var(--white)', borderColor: 'var(--ink-900)', background: 'var(--ink-900)' } },
  orange: { outline: { color: 'var(--orange-600)', borderColor: 'var(--orange-200)', background: 'var(--white)' }, soft: { color: 'var(--orange-600)', borderColor: 'transparent', background: 'var(--orange-50)' }, solid: { color: 'var(--white)', borderColor: 'var(--orange-600)', background: 'var(--orange-600)' } }
};

export function Badge({ tone = 'neutral', variant = 'outline', shape = 'rounded', size = 'md', children, style }) {
  const t = tones[tone][variant];
  const s = Object.assign({ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontWeight: 400, lineHeight: 1, border: '1px solid', whiteSpace: 'nowrap', boxSizing: 'border-box' }, t,
    size === 'sm' ? { fontSize: 10, padding: '5px 9px', letterSpacing: '0.12em', textTransform: 'uppercase' } : { fontSize: 13, padding: '7px 11px', letterSpacing: '0.02em' },
    { borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-s)' }, style);
  return <span style={s}>{children}</span>;
}

export function SourceChip({ children }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', height: 32, padding: '0 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-xs)', background: 'var(--white)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--ink-900)', letterSpacing: '0.04em' }}>{children}</span>;
}
