import React from 'react';
export function Shutter({
  size = 116,
  onClick,
  disabled
}) {
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Capture",
    onClick: onClick,
    disabled: disabled,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      width: size + 12,
      height: size + 12,
      borderRadius: '50%',
      border: 'none',
      padding: 0,
      background: 'var(--green-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      transform: press ? 'scale(0.95)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--green-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.8,
      height: size * 0.8,
      borderRadius: '50%',
      border: '3px solid var(--white)',
      boxSizing: 'border-box'
    }
  })));
}