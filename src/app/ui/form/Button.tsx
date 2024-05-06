import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: string;
  outline?: boolean;
  className?: string;
  onClick: () => void;
}

export function Button({
  children,
  outline,
  className,
  onClick,
}: Props): JSX.Element {
  return (
    <motion.button
      type="submit"
      className={clsx(
        className,
        "text-lg rounded-full border-2 px-10 py-2",
        // Text and background colors
        // "color-white",
        "bg-white text-slate-950",
        !outline && "bg-slate-950",
      )}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
