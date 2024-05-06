import React from "react";

export default function Overlay({ children }: { children?: React.ReactNode }) {
  return (
    <div className="z-0 absolute top-0 right-0 bottom-0 left-0">
      {children}
      <div className="absolute bg-gradient-to-r from-neutral-950 to-neutral-900 opacity-70 top-0 bottom-0 left-0 right-0" />
    </div>
  );
}
