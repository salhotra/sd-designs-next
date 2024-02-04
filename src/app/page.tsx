"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import NavBar from "./components/NavBar";
import HomeContent from "./components/HomeContent";
import { useRef } from "react";

function FixedNavBar({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const { scrollY } = useScroll({
    container: containerRef,
  });

  const backgroundColor = useTransform(
    scrollY,
    [0, 50, 100, 150],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.95)"],
  );

  return (
    <motion.div className="fixed w-full z-20" style={{ backgroundColor }}>
      <NavBar scrollY={scrollY} />
    </motion.div>
  );
}

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex h-screen bg-gradient-to-r from-neutral-950 to-neutral-900 overflow-y-auto hide-scrollbar"
    >
      <div className="flex flex-1 flex-col z-10">
        <FixedNavBar containerRef={containerRef} />
        <main>
          <HomeContent />
        </main>
      </div>
    </div>
  );
}
