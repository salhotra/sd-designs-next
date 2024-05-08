"use client";

import { motion, useAnimate, useScroll, useAnimation } from "framer-motion";

import NavBar from "./components/NavBar";
import HomeContent from "./components/HomeContent";
import { useEffect, useRef, useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import { HeadingOffsetPx } from "./constants";
import Overlay from "./components/Overlay";
import Image from "next/image";

function FixedNavBar({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const { scrollY } = useScroll();
  const animationControls = useAnimation();

  // TODO: Cleanup the hard-coded values

  useEffect(() => {
    // Register a scroll listener
    const unsubscribe = scrollY.on("change", (currentScrollY) => {
      console.log({ currentScrollY, HeadingOffsetPx });
      if (currentScrollY > HeadingOffsetPx / 2) {
        animationControls.start({ backgroundColor: "rgba(255, 255, 255, 1)" });
        animationControls.start({ height: "95px" });
      } else {
        animationControls.start({ height: "140px" });
        animationControls.start({ backgroundColor: "rgba(255, 255, 255, 0)" });
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [animationControls, scrollY]);

  return (
    <motion.div
      className="fixed w-full z-20"
      initial={{
        backgroundColor: "rgba(255, 255, 255, 0)",
        height: "120px",
      }}
      animate={animationControls}
      transition={{ duration: 0.2 }}
    >
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
          <div className="fixed h-screen w-screen">
            <Overlay>
              {/* TODO: Make sure this looks good on slow internet */}
              <Image
                priority
                fill
                src="/hero-1.jpg"
                quality={100}
                alt="Background"
                className="object-cover"
              />
            </Overlay>
          </div>
          <SmoothScroll>
            <HomeContent />
          </SmoothScroll>
        </main>
      </div>
    </div>
  );
}
