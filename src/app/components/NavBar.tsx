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
import SocialLinks from "./SocialLinks";

function MobileMenu({ onClose }: { onClose: () => void }): JSX.Element {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <button className="absolute top-4 right-4" onClick={onClose}>
        <FontAwesomeIcon icon={faClose} size="lg" />
      </button>
      <div>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          className="cursor-pointer"
        />
        <ul className="flex flex-col space-y-6 text-2xl font-semibold mt-16 uppercase">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link
              href="/#about"
              onClick={() => {
                onClose();
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              onClick={() => {
                onClose();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <SocialLinks size="lg" containerClassName="justify-center mb-16" />
    </div>
  );
}

export default function NavBar({ scrollY }: { scrollY: MotionValue<number> }) {
  const animationControls = useAnimation();
  const [isScrolledPastOffset, setIsScrolledPastOffset] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToTop } = useScrollToId();

  const headerVariants = {
    // TODO: These colors are not being managed in a central place
    scrolledPastOffset: { color: "#91867d", translateY: -10 },
    scrolledToTop: { color: "rgb(255, 255, 255)", translateY: 0 },
  };

  const mobileMenuVariants = {
    open: { translateX: 0 },
    closed: { translateX: -1000 },
  };

  useEffect(() => {
    // Register a scroll listener
    const unsubscribe = scrollY.on("change", (currentScrollY) => {
      if (currentScrollY > HeadingOffsetPx / 2) {
        setIsScrolledPastOffset(true);
      } else {
        setIsScrolledPastOffset(false);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [animationControls, scrollY]);

  return (
    <motion.div
      initial={{ color: "rgb(255, 255, 255)" }}
      animate={isScrolledPastOffset ? "scrolledPastOffset" : "scrolledToTop"}
      transition={{ duration: 0.2 }}
      variants={headerVariants}
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
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        <motion.div
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          variants={mobileMenuVariants}
          className="md:hidden absolute top-0 bottom-0 left-0 right-100 flex flex-col h-screen w-screen p-4 text-white bg-magenta overflow-hidden"
        >
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        </motion.div>
      </header>
    </motion.div>
  );
}
