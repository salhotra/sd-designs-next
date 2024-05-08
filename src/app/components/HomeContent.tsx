import React from "react";
import clsx from "clsx";

import Image from "next/image";
import About from "./About";
import { playfair } from "../fonts";
import Contact from "./Contact";
import { Button } from "../ui/form/Button";
import Overlay from "./Overlay";

export default function HomeContent() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col items-center justify-center h-screen relative">
        <Overlay>
          {/* TODO: Make sure this looks good on slow internet */}
          <Image
            priority
            src="/hero-1.jpg"
            quality={100}
            alt="Background"
            layout="fill"
            className="object-cover"
          />
        </Overlay>
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

      <div className="py-8 h-screen">
        <About />
      </div>

      <div className="p-8 h-screen">
        <Contact />
      </div>
    </div>
  );
}
