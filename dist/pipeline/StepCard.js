import React from 'react';
export function StepCard({
  step,
  glyph,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-m)',
      padding: '24px 20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-sans)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.2em',
      color: 'var(--ink-400)',
      textTransform: 'uppercase'
    }
  }, step), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--green-50)',
      color: 'var(--green-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 600
    }
  }, glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink-900)',
      marginTop: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--ink-600)',
      textWrap: 'pretty'
    }
  }, children));
}