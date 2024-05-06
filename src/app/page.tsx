"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import NavBar from "./components/NavBar";
import HomeContent from "./components/HomeContent";
import { useRef } from "react";
import SmoothScroll from "./components/SmoothScroll";

function FixedNavBar({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const { scrollY } = useScroll();

  return (
    <motion.div className="fixed w-full z-20">
      <NavBar scrollY={scrollY} />
    </motion.div>
  );
}

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="flex h-screen">
      <div className="flex flex-1 flex-col z-10">
        <FixedNavBar containerRef={containerRef} />
        <main>
          <SmoothScroll>
            <HomeContent />
          </SmoothScroll>
        </main>
      </div>
    </div>
  );
}
