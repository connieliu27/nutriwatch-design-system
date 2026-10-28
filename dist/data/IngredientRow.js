import React from 'react';
export function IngredientRow({
  name,
  note,
  status = 'ok',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      width: '100%',
      textAlign: 'left',
      padding: '0 24px',
      minHeight: 64,
      background: 'var(--white)',
      border: '1px solid ' + (hover ? 'var(--line-strong)' : 'var(--line)'),
      borderRadius: 'var(--radius-l)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: status === 'flag' ? 'var(--orange-600)' : 'var(--green-600)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 17,
      color: 'var(--ink-900)'
    }
  }, name, note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-400)'
    }
  }, ' · ' + note) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)',
      fontSize: 18,
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  }, "\u203A"));
}