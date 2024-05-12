import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl mb-8 mt-4 px-8">{children}</h1>;
}
