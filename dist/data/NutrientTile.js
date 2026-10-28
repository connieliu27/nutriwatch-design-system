function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
export function NutrientTile({
  value,
  unit,
  label,
  flagged
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: flagged ? 'var(--orange-50)' : 'var(--white)',
      border: '1px solid ' + (flagged ? 'var(--orange-200)' : 'var(--line)'),
      borderRadius: 'var(--radius-m)',
      padding: '20px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1,
      color: flagged ? 'var(--orange-600)' : 'var(--ink-900)',
      letterSpacing: '-0.01em'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 400,
      color: flagged ? 'var(--orange-600)' : 'var(--ink-400)',
      marginLeft: 1
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: flagged ? 'var(--orange-600)' : 'var(--ink-900)'
    }
  }, label));
}
export function NutrientGrid({
  items = [],
  columns = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0, 1fr))',
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(NutrientTile, _extends({
    key: i
  }, it))));
}