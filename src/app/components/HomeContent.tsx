import React from "react";
import clsx from "clsx";

import About from "./About";
import Contact from "./Contact";
import { Button } from "../ui/form/Button";

export default function HomeContent() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-center justify-center z-10 relative">
          {/* TODO: Make it better for mobile */}
          <h1 className={clsx("text-center text-6xl leading-tight text-white")}>
            YOUR SPACE DESERVES MORE
          </h1>

          <Button outline className="mt-12" onClick={() => console.log("Book")}>
            Book Call
          </Button>
        </div>
      </div>

      <About />

      <Contact />
    </div>
  );
}
