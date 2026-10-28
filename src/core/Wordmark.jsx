import React from 'react';
import { logoMark } from '../assets/logo.js';

export function Wordmark({ size = 18, markSrc = logoMark, showMark = true }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.5, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: size, letterSpacing: '-0.01em', lineHeight: 1 }}>
    {showMark ? <img src={markSrc} alt="" style={{ width: size * 1.3, height: size * 1.3, objectFit: 'contain' }} /> : null}
    <span><span style={{ color: 'var(--green-800)' }}>Nutri</span><span style={{ color: 'var(--ink-900)' }}>Watch</span></span>
  </span>;
}
