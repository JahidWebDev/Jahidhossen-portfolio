import React from "react";

/**
 * Separator component for dividing content.
 * Props:
 *  - direction: 'horizontal' | 'vertical'
 *  - thickness: number in px
 *  - color: string
 *  - className: additional classes
 */
const Separator = ({
  direction = "horizontal",
  thickness = 1,
  color = "rgba(255, 255, 255, 0.15)",
  className = "",
}) => {
  const styles =
    direction === "horizontal"
      ? { width: "100%", height: `${thickness}px`, backgroundColor: color }
      : { width: `${thickness}px`, height: "100%", backgroundColor: color };

  return <div style={styles} className={className} />;
};

export default Separator;