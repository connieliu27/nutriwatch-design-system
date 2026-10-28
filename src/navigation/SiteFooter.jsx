import React from 'react';
import { Wordmark } from '../core/Wordmark.jsx';

export function SiteFooter({ links = ['privacy', 'methodology', 'contact'], year = '2026', markSrc }) {
  return <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--bg)' }}>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
      <Wordmark markSrc={markSrc} size={17} />
      <div style={{ display: 'flex', gap: 22, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-400)' }}>
        {links.map(l => <a key={l} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>)}
        <span>{'© ' + year}</span>
      </div>
    </div>
  </footer>;
}
