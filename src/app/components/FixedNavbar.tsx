"use client";

import { useScroll, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

import { HeadingOffsetPx, HeaderHeightPx } from "../constants";
import NavBar from "./NavBar";

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

export default FixedNavBar;
