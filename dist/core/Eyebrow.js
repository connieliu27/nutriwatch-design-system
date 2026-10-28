import React from 'react';
export function Eyebrow({
  tone = 'accent',
  children,
  aside,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'accent' ? 'var(--green-600)' : 'var(--ink-400)',
      lineHeight: 1.4
    }, style)
  }, children, aside ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, ' / ', aside) : null);
}