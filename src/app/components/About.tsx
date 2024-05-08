import clsx from "clsx";
import React from "react";
import { playfair } from "../fonts";
import { Button } from "../ui/form/Button";

export default function About() {
  return (
    <div className="flex flex-col relative bg-white">
      <div className="flex flex-col z-10 px-20 py-32 items-center">
        <h1 className="xl:text-6xl text-4xl mb-24 mt-4 text-golden-100 text-center">
          FULL SERVICE INTERIOR DESIGN
          <span className="text-xs mx-4 relative xl:-top-4 -top-2 lg:inline-block hidden">
            •
          </span>
          <br className="lg:hidden" />
          DELHI + NCR
        </h1>
        <div
          className={clsx(playfair.className, "text-xl leading-10 text-center")}
        >
          At SD Designs, we specialize in creating personalized interiors that
          perfectly capture your personality and vision. Our passion for design
          shines through in every detail, whether it&apos;s a sleek, modern
          space or a warm, inviting home. We work closely with you to create
          distinctive designs that are both functional and stylish, reflecting
          your unique lifestyle. From the initial concept to the finishing
          touches, our team crafts spaces that feel authentically yours.
          <br />
          We are keenly aware that the spaces we inhabit can have a profound
          effect on our happiness and emotional wellbeing.
          <br />
          Let&apos;s transform your space together into something truly
          extraordinary.
        </div>
        {/* TODO: This needs to be a primary buttom */}
        <Button className="mt-16" onClick={() => ({})}>
          BOOK A CONSULTATION
        </Button>
      </div>
    </div>
  );
}
