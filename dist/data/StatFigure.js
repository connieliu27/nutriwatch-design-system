import React from 'react';
export function StatFigure({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--green-600)',
      padding: '4px 0 4px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1,
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, label));
}