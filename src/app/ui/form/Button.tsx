import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: string;
  outline?: boolean;
  className?: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  icon?: IconProp;
  iconClassName?: string;
  iconColor?: string;
  iconSize?: SizeProp;
}

export function Button({
  children,
  outline,
  className,
  onClick,
  icon,
  iconClassName,
  iconColor,
  iconSize,
  type = "primary",
}: Props): JSX.Element {
  return (
    <motion.button
      type="submit"
      className={clsx(
        className,
        "text-xl rounded-full border-1 px-10 py-2.5",
        // Text and background colors
        "text-slate-950",
        !outline && "bg-slate-950",

        type === "primary" && "bg-white text-slate-950",
        type === "secondary" && "bg-magenta text-white font-semibold",
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
      {icon && (
        <span className={clsx("ml-3", iconClassName)}>
          <FontAwesomeIcon
            icon={icon}
            size={iconSize}
            className={iconClassName}
            color={iconColor}
          />
        </span>
      )}
    </motion.button>
  );
}
