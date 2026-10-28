import React from 'react';

export function NutrientTile({ value, unit, label, flagged }) {
  return <div style={{ background: flagged ? 'var(--orange-50)' : 'var(--white)', border: '1px solid ' + (flagged ? 'var(--orange-200)' : 'var(--line)'), borderRadius: 'var(--radius-m)', padding: '20px 18px 18px', display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 26, lineHeight: 1, color: flagged ? 'var(--orange-600)' : 'var(--ink-900)', letterSpacing: '-0.01em' }}>{value}<span style={{ fontSize: 13, fontWeight: 400, color: flagged ? 'var(--orange-600)' : 'var(--ink-400)', marginLeft: 1 }}>{unit}</span></div>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: flagged ? 'var(--orange-600)' : 'var(--ink-900)' }}>{label}</div>
  </div>;
}

export function NutrientGrid({ items = [], columns = 3 }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + columns + ', minmax(0, 1fr))', gap: 12 }}>
    {items.map((it, i) => <NutrientTile key={i} {...it} />)}
  </div>;
}
