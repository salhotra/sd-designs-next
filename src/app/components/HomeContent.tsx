import React from "react";
import clsx from "clsx";

import Image from "next/image";
import About from "./About";
import { playfair } from "../fonts";

export default function HomeContent() {
  return (
    <div className="flex flex-1 flex-col text-white">
      <div className="flex flex-col items-center justify-center h-[720px] relative">
        <div className="z-0 absolute top-0 right-0 bottom-0 left-0">
          {/* TODO: Make sure this looks good on slow internet */}
          <Image
            priority
            src="/hero-1.jpg"
            quality={100}
            alt="Background"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute bg-gradient-to-r from-neutral-950 to-neutral-900 opacity-75 top-0 bottom-0 left-0 right-0" />
        </div>
        <div className="flex flex-col items-center justify-center z-10 relative">
          {/* TODO: Make it better for mobile */}
          <h1
            className={clsx(
              playfair.className,
              "sm:text-2xl md:text-8xl leading-tight",
            )}
          >
            Interior Design.
          </h1>
          <p className="text-2xl mt-4">Dream &gt; Design &gt; Reality</p>
          <button className="mt-8 border-2 rounded-lg px-4 pb-2 pt-3 hover:opacity-60">
            Book Call
          </button>
        </div>
      </div>
      <div className="p-8">
        <About />
        <About />
        <About />
        <About />
        <About />
        <About />
      </div>
    </div>
  );
}
