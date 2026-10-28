import React from 'react';

export function AgentStep({ title, status = 'complete', description, result, duration, last }) {
  const done = status === 'complete', running = status === 'running';
  return <div style={{ display: 'flex', gap: 18, fontFamily: 'var(--font-sans)' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
      <span style={{ width: 46, height: 46, borderRadius: '50%', boxSizing: 'border-box', background: done ? 'var(--green-600)' : 'var(--white)', border: done ? 'none' : '2px solid ' + (running ? 'var(--green-600)' : 'var(--line-strong)'), color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>
        {done ? '✓' : running ? <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--green-600)', animation: 'nwPulse 1.2s ease-in-out infinite' }} /> : null}
      </span>
      {!last ? <span style={{ width: 2, flex: 1, minHeight: 16, background: 'var(--line-strong)' }} /> : null}
    </div>
    <div style={{ flex: 1, minWidth: 0, paddingTop: 4, paddingBottom: last ? 0 : 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: status === 'pending' ? 'var(--ink-400)' : 'var(--ink-900)' }}>{title}</div>
        {duration ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-400)', paddingTop: 3 }}>{duration}</span> : null}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: done || running ? 'var(--green-600)' : 'var(--ink-400)' }}>{running ? 'running…' : status}</div>
      {description ? <div style={{ fontSize: 15, color: 'var(--ink-600)' }}>{description}</div> : null}
      {result && done ? <span style={{ alignSelf: 'flex-start', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink-600)', background: 'var(--chip)', borderRadius: 'var(--radius-xs)', padding: '7px 11px' }}>{result}</span> : null}
    </div>
    <style>{'@keyframes nwPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}'}</style>
  </div>;
}
