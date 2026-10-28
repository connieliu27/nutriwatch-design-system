import React from 'react';

export function ConcernItem({ title, detail, source, severity }) {
  return <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', fontFamily: 'var(--font-sans)' }}>
    <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--orange-100)', color: 'var(--orange-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flex: 'none' }}>!</span>
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 3 }}>
      <div style={{ fontSize: 18, fontWeight: 500, color: 'var(--ink-900)' }}>{title}</div>
      {detail ? <div style={{ fontSize: 15, color: 'var(--ink-400)', lineHeight: 1.4 }}>{detail}</div> : null}
    </div>
    {source ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink-400)', paddingTop: 6 }}>{source} ↗</span> : null}
    {!source && severity ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-400)', paddingTop: 6 }}>{severity}</span> : null}
  </div>;
}
