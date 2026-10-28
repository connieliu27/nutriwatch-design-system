import React from 'react';

export function AgentRow({ index, title, children, meta = [] }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 36, background: 'var(--bg-tint)', border: '1px solid var(--line)', borderRadius: 'var(--radius-l)', padding: '28px 22px', fontFamily: 'var(--font-sans)' }}>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 34, fontWeight: 400, color: 'var(--ink-200)', lineHeight: 1, flex: 'none', width: 56 }}>{index}</div>
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink-900)' }}>{title}</div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-600)', maxWidth: 520, textWrap: 'pretty' }}>{children}</div>
    </div>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-400)', textAlign: 'right', lineHeight: 1.6, flex: 'none' }}>{meta.map((m, i) => <div key={i}>{'→ ' + m}</div>)}</div>
  </div>;
}
