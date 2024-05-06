import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { playfair } from "../fonts";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { HeadingOffsetPx } from "../constants";

export default function NavBar({ scrollY }: { scrollY: MotionValue<number> }) {
  const scaleXWithoutSpring = useTransform(
    scrollY,
    [0, HeadingOffsetPx],
    [1, 0],
  );
  const scaleX = useSpring(scaleXWithoutSpring, {
    stiffness: 1000, // Increase stiffness to reduce bounce; adjust as needed
    damping: 50, // Increase damping to quickly reduce motion; adjust as needed
    mass: 0.1, // Keep mass relatively low to prevent excessive momentum
    restDelta: 0.001, // Smaller values make the animation more likely to settle without bouncing
    restSpeed: 0.001, // Smaller values here also help in reducing the bounce by making the animation settle faster
  });

  const opacity = useTransform(scrollY, [0, 100, HeadingOffsetPx], [1, 0.8, 0]);

  return (
    <div>
      <header className="flex justify-between items-center mx-16 mt-6 pb-6 text-slate-300">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={45}
          height={45}
          className="cursor-pointer"
        />
        <nav>
          <ul className="flex space-x-12 text-lg">
            <li>
              <Link href="#about-us-section-id" scroll>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#about-us-section-id" scroll>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#about-us-section-id" scroll>
                About
              </Link>
            </li>
            <li>
              <Link href="#contact-us-section-id" scroll>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <motion.div
        className="h-px bg-slate-300 text-center lg:mx-16 md:mx-0"
        style={{ scaleX, opacity }}
      />
    </div>
  );
}
