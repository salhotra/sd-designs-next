import React from "react";
import clsx from "clsx";

import About from "./About";
import Contact from "./Contact";
import { Button } from "../ui/form/Button";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import useScrollToId from "../hooks/useScrollToId";

export default function HomeContent() {
  const { scrollToId } = useScrollToId();

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-center justify-center z-10 relative">
          {/* TODO: Make it better for mobile */}
          <h1 className={clsx("text-center text-6xl leading-tight text-white")}>
            YOUR SPACE DESERVES MORE
          </h1>

          <Button
            className="mt-12"
            icon={faArrowRightLong}
            iconSize="xs"
            iconColor="rgba(2 6 23 / 0.6)"
            onClick={() => {
              scrollToId("contact-us-section-id");
            }}
          >
            BOOK A CONSULTATION
          </Button>
        </div>
      </div>

      <About />

      <Contact />
    </div>
  );
}
