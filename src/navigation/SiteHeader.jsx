import React from 'react';
import { Wordmark } from '../core/Wordmark.jsx';
import { Button } from '../core/Button.jsx';

export function SiteHeader({ links = ['How it works', 'The agents', 'Science'], cta = 'Get the app', onCta, onLink, markSrc }) {
  return <header style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(250,251,252,0.86)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
      <Wordmark markSrc={markSrc} size={17} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {links.map(l => <a key={l} href="#" onClick={e => { e.preventDefault(); onLink && onLink(l); }} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ink-600)', textDecoration: 'none' }}>{l}</a>)}
        <Button size="sm" onClick={onCta}>{cta}</Button>
      </nav>
    </div>
  </header>;
}
