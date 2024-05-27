import clsx from "clsx";
import React from "react";

type Intensity = "10" | "20" | "50" | "75";

export default function Overlay({
  children,
  intensity = "50",
}: {
  children?: React.ReactNode;
  intensity?: Intensity;
}) {
  return (
    <div className="z-0 absolute top-0 right-0 bottom-0 left-0">
      {children}
      <div
        className={clsx(
          "absolute bg-gradient-to-r from-neutral-950 to-neutral-900 top-0 bottom-0 left-0 right-0",
          {
            "opacity-10": intensity === "10",
            "opacity-20": intensity === "20",
            "opacity-50": intensity === "50",
            "opacity-75": intensity === "75",
          },
        )}
      />
    </div>
  );
}
