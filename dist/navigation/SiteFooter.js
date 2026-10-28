import React from 'react';
import { Wordmark } from '../core/Wordmark.js';
export function SiteFooter({
  links = ['privacy', 'methodology', 'contact'],
  year = '2026',
  markSrc
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--line)',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '36px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    markSrc: markSrc,
    size: 17
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-400)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement("span", null, '© ' + year))));
}