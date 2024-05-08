import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { playfair } from "../fonts";
import {
  MotionValue,
  motion,
  useAnimation,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { HeadingOffsetPx } from "../constants";

export default function NavBar({ scrollY }: { scrollY: MotionValue<number> }) {
  const animationControls = useAnimation();
  const [isScrolledPastOffset, setIsScrolledPastOffset] = useState(false);

  const variants = {
    // TODO: These colors are not being managed in a central place
    scrolledPastOffset: { color: "#91867d", translateY: -10 },
    scrolledToTop: { color: "rgb(255, 255, 255)", translateY: 0 },
  };

  useEffect(() => {
    // Register a scroll listener
    const unsubscribe = scrollY.on("change", (currentScrollY) => {
      setIsScrolledPastOffset(currentScrollY > HeadingOffsetPx / 2);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [animationControls, scrollY]);

  return (
    <motion.div
      initial={{ color: "rgb(255, 255, 255)" }}
      animate={isScrolledPastOffset ? "scrolledPastOffset" : "scrolledToTop"}
      transition={{ duration: 0.2 }}
      variants={variants}
    >
      <header className="flex justify-between items-center mx-16 mt-9 pb-6">
        {!isScrolledPastOffset && (
          <Image
            src="/logo.svg"
            alt="Logo"
            width={45}
            height={45}
            className="cursor-pointer"
          />
        )}
        {isScrolledPastOffset && (
          <Image
            src="/logo-golden.svg"
            alt="Logo"
            width={45}
            height={45}
            className="cursor-pointer"
          />
        )}
        <nav>
          <ul className="flex space-x-12 text-xl font-semibold">
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
    </motion.div>
  );
}
