import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useAnimation,
} from "framer-motion";
import Image from "next/image";
import { HeadingOffsetPx } from "../constants";
import useScrollToId from "../hooks/useScrollToId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function MobileMenu({ onClose }: { onClose: () => void }): JSX.Element {
  return (
    <motion.div
      initial={{ translateX: -1000 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden absolute top-0 bottom-0 left-0 right-100 flex flex-col items-center justify-center h-screen bg-white text-golden-200 p-4"
    >
      <button onClick={onClose}>
        <FontAwesomeIcon icon={faClose} size="lg" />
      </button>
      <hr className="w-full my-4" />
      <ul className="flex flex-col space-y-4 text-xl font-semibold">
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/#about-us-section-id">About</Link>
        </li>
        <li>
          <Link href="/#contact-us-section-id">Contact</Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default function NavBar({ scrollY }: { scrollY: MotionValue<number> }) {
  const animationControls = useAnimation();
  const [isScrolledPastOffset, setIsScrolledPastOffset] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <header className="flex justify-between md:items-center md:mx-16 mx-8 mt-9 pb-6">
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
          <ul className="md:flex hidden space-x-12 text-xl font-semibold">
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

        {!mobileMenuOpen && (
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        )}

        {mobileMenuOpen && (
          <AnimatePresence>
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          </AnimatePresence>
        )}
      </header>
    </motion.div>
  );
}
