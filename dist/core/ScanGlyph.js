import React from 'react';
export function ScanGlyph({
  size = 12,
  color = 'currentColor',
  weight = 1.5
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size * 0.85,
      border: weight + 'px solid ' + color,
      borderRadius: Math.max(2, size * 0.28),
      boxSizing: 'border-box',
      flex: 'none'
    }
  });
}