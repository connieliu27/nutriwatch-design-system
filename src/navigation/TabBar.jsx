import React from 'react';
import { ScanGlyph } from '../core/ScanGlyph.jsx';

function Tab({ glyph, label, active, onClick }) {
  return <button type="button" onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 90, fontFamily: 'var(--font-sans)', color: active ? 'var(--green-800)' : 'var(--ink-400)' }}>
    <span style={{ fontSize: 22, lineHeight: 1 }}>{glyph}</span>
    <span style={{ fontSize: 13, fontWeight: active ? 600 : 400 }}>{label}</span>
  </button>;
}

export function TabBar({ active = 'scan', onChange, onShutter }) {
  return <div style={{ position: 'relative', height: 92, background: 'var(--white)', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 34px 8px' }}>
    <Tab glyph="⌂" label="Saved" active={active === 'saved'} onClick={() => onChange && onChange('saved')} />
    <button type="button" aria-label="Scan" onClick={onShutter} style={{ position: 'absolute', left: '50%', top: -10, transform: 'translateX(-50%)', width: 64, height: 64, borderRadius: '50%', border: 'none', background: 'var(--green-800)', boxShadow: 'var(--shadow-fab)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
      <ScanGlyph size={20} color="#fff" weight={2.5} />
    </button>
    <Tab glyph="◎" label="Scan" active={active === 'scan'} onClick={() => onChange && onChange('scan')} />
  </div>;
}
