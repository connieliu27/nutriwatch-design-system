import React from 'react';
import { logoMark } from '../assets/logo.js';
export function Wordmark({
  size = 18,
  markSrc = logoMark,
  showMark = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.5,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '-0.01em',
      lineHeight: 1
    }
  }, showMark ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: size * 1.3,
      height: size * 1.3,
      objectFit: 'contain'
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-800)'
    }
  }, "Nutri"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "Watch")));
}