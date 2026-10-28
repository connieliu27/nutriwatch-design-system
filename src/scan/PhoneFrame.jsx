import React from 'react';

export function PhoneFrame({ width = 390, height = 820, children }) {
  return <div style={{ width, height, boxSizing: 'border-box', padding: 14, borderRadius: 54, background: 'var(--green-950)', boxShadow: 'var(--shadow-device)', flex: 'none' }}>
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 42, overflow: 'hidden', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 140, height: 32, background: 'var(--green-950)', borderRadius: '0 0 20px 20px', zIndex: 5 }} />
      {children}
    </div>
  </div>;
}
