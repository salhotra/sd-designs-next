import * as React from "react";
import { motion } from "framer-motion";

const clip = {
  animate: {
    rotate: [0, 180, 360],
  },
  transition: {
    duration: 0.75,
    ease: "linear",
    repeat: Infinity,
  },
};

function ClipLoader({
  loading = true,
  color = "white",
  size = 25,
}: {
  loading?: boolean;
  color?: string;
  size?: number | string;
}): JSX.Element | null {
  const style: React.CSSProperties = {
    background: "transparent !important",
    width: size,
    height: size,
    borderRadius: "100%",
    border: "2px solid",
    borderTopColor: color,
    borderBottomColor: "transparent",
    borderLeftColor: color,
    borderRightColor: color,
    display: "inline-block",
  };

  if (!loading) {
    return null;
  }

  return (
    <motion.span
      style={style}
      animate={clip.animate}
      transition={clip.transition}
    />
  );
}

export default ClipLoader;
