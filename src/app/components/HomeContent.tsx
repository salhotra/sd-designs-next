"use client";

import React from "react";
import clsx from "clsx";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import About from "./About";
import Contact from "./Contact";
import { Button } from "../ui/form/Button";
import useScrollToId from "../hooks/useScrollToId";
import Footer from "./Footer";

export default function HomeContent() {
  const { scrollToId } = useScrollToId();

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col items-center justify-center md:h-screen h-[400px] relative">
        <div className="md:fixed w-full h-full md:hidden">
          <Image
            fill
            priority
            src="/hero-1.jpg"
            quality={100}
            alt="Background"
            objectFit="cover"
          />
        </div>
        <div className="md:flex hidden flex-col items-center justify-center z-10 relative">
          <h1
            className={clsx(
              "text-center md:text-6xl text-4xl leading-tight text-white",
            )}
          >
            YOUR SPACE DESERVES MORE
          </h1>

          <Button
            className="mt-12"
            icon={faArrowRightLong}
            iconSize="xs"
            iconColor="rgba(2 6 23 / 0.6)"
            onClick={() => {
              scrollToId("contact");
            }}
          >
            BOOK A CONSULTATION
          </Button>
        </div>
      </div>

      <About />

      <Contact />

      <Footer />
    </div>
  );
}
