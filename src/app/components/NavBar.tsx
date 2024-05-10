import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MotionValue, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { HeadingOffsetPx } from "../constants";
import useScrollToId from "../hooks/useScrollToId";

export default function NavBar({ scrollY }: { scrollY: MotionValue<number> }) {
  const animationControls = useAnimation();
  const [isScrolledPastOffset, setIsScrolledPastOffset] = useState(false);
  const { scrollToId, scrollToTop } = useScrollToId();

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
        <div className="cursor-pointer" onClick={() => scrollToTop()}>
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
        </div>
        <nav>
          <ul className="flex space-x-12 text-xl font-semibold">
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link
                href="/#about-us-section-id"
                onClick={() => scrollToId("about-us-section-id")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact-us-section-id"
                onClick={() => scrollToId("contact-us-section-id")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </motion.div>
  );
}
