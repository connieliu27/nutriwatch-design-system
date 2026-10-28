import React from 'react';

const corner = (pos) => Object.assign({ position: 'absolute', width: 50, height: 50, borderColor: 'var(--green-600)', borderStyle: 'solid', borderWidth: 0 }, pos);

export function Viewfinder({ hint = 'align the ingredient panel', status = 'Honey Almond Granola · ready', scanning, height = 440 }) {
  return <div style={{ position: 'relative', height, borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'repeating-linear-gradient(135deg, #eef2f0 0 14px, #f6f8f7 14px 28px)' }}>
    <span style={corner({ top: 20, left: 20, borderTopWidth: 2, borderLeftWidth: 2 })} />
    <span style={corner({ top: 20, right: 20, borderTopWidth: 2, borderRightWidth: 2 })} />
    <span style={corner({ bottom: 20, left: 20, borderBottomWidth: 2, borderLeftWidth: 2 })} />
    <span style={corner({ bottom: 20, right: 20, borderBottomWidth: 2, borderRightWidth: 2 })} />
    <span style={{ position: 'absolute', left: 20, right: 20, top: '49%', height: 2, background: 'var(--green-600)', boxShadow: '0 0 18px rgba(48,158,110,0.45)', animation: scanning ? 'nwScan 1.6s ease-in-out infinite alternate' : 'none' }} />
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 34, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, fontFamily: 'var(--font-mono)', fontSize: 13 }}>
      <span style={{ color: 'var(--ink-600)' }}>{hint}</span>
      <span style={{ color: 'var(--green-800)', fontWeight: 600 }}>{status}</span>
    </div>
    <style>{'@keyframes nwScan{from{top:12%}to{top:82%}}'}</style>
  </div>;
}
