import React from 'react';
export function GradeRing({
  grade = 'B+',
  score = 78,
  size = 140,
  stroke,
  tone
}) {
  const sw = stroke || Math.round(size * 0.11);
  const r = (size - sw) / 2,
    c = 2 * Math.PI * r;
  const col = tone || (score >= 60 ? 'var(--green-600)' : score >= 40 ? '#c98a12' : 'var(--orange-600)');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--track)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: col,
    strokeWidth: sw,
    strokeDasharray: c,
    strokeDashoffset: c * (1 - score / 100),
    style: {
      transition: 'stroke-dashoffset 800ms var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: size * 0.3,
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, grade));
}
export function HealthSummary({
  grade = 'B+',
  score = 78,
  verdict = 'Good choice overall',
  size = 140
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(GradeRing, {
    grade: grade,
    score: score,
    size: size
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.18em',
      color: 'var(--ink-400)',
      textTransform: 'uppercase'
    }
  }, "Health index"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 52,
      lineHeight: 1,
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, score, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: 'var(--ink-400)'
    }
  }, "/100")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 17,
      color: score >= 60 ? 'var(--green-600)' : 'var(--orange-600)'
    }
  }, verdict)));
}