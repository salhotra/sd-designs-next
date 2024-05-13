"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion, useScroll, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import HomeContent from "./components/HomeContent";
import { HeaderHeightPx, HeadingOffsetPx } from "./constants";
import Overlay from "./components/Overlay";

config.autoAddCss = false;

function FixedNavBar(): JSX.Element {
  const { scrollY } = useScroll();
  const animationControls = useAnimation();
  const headerStatus = useRef<"transparent" | "white">("transparent");

  // TODO: Cleanup the hard-coded values

  useEffect(() => {
    // Register a scroll listener

    const unsubscribe = scrollY.on("change", (currentScrollY) => {
      if (
        currentScrollY > HeadingOffsetPx / 2 &&
        headerStatus.current === "transparent"
      ) {
        animationControls.start({ backgroundColor: "rgba(255, 255, 255, 1)" });
        animationControls.start({ height: 95 });
        headerStatus.current = "white";
      } else if (
        currentScrollY <= HeadingOffsetPx / 2 &&
        headerStatus.current === "white"
      ) {
        animationControls.start({ height: HeaderHeightPx });
        animationControls.start({ backgroundColor: "rgba(255, 255, 255, 0)" });
        headerStatus.current = "transparent";
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
        height: HeaderHeightPx,
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
        <FixedNavBar />
        <ToastContainer />
        <main>
          <div className="fixed h-screen w-screen md:block hidden">
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
          <HomeContent />
        </main>
      </div>
    </div>
  );
}
