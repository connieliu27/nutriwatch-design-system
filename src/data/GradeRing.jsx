import React from 'react';

export function GradeRing({ grade = 'B+', score = 78, size = 140, stroke, tone }) {
  const sw = stroke || Math.round(size * 0.11);
  const r = (size - sw) / 2, c = 2 * Math.PI * r;
  const col = tone || (score >= 60 ? 'var(--green-600)' : score >= 40 ? '#c98a12' : 'var(--orange-600)');
  return <div style={{ position: 'relative', width: size, height: size, flex: 'none' }}>
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--track)" strokeWidth={sw} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={col} strokeWidth={sw} strokeDasharray={c} strokeDashoffset={c * (1 - score / 100)} style={{ transition: 'stroke-dashoffset 800ms var(--ease-out)' }} />
    </svg>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: size * 0.3, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>{grade}</div>
  </div>;
}

export function HealthSummary({ grade = 'B+', score = 78, verdict = 'Good choice overall', size = 140 }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
    <GradeRing grade={grade} score={score} size={size} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.18em', color: 'var(--ink-400)', textTransform: 'uppercase' }}>Health index</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 52, lineHeight: 1, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>{score}<span style={{ fontSize: 22, color: 'var(--ink-400)' }}>/100</span></div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 17, color: score >= 60 ? 'var(--green-600)' : 'var(--orange-600)' }}>{verdict}</div>
    </div>
  </div>;
}
