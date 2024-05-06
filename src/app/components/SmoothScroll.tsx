import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useTransform,
  useSpring,
  motion,
  useScroll,
  MotionValue,
} from "framer-motion";

function useSmoothScroll(pageHeight: number): MotionValue<number> {
  /* Measures how many pixels user has scrolled vertically
   * as scrollY changes between 0px and the scrollable height.
   */
  const { scrollY } = useScroll();

  const physics = { damping: 15, mass: 0.05, stiffness: 100 };
  const spring = useSpring(scrollY, physics);

  /**
   * Create a negative scroll value based on current scroll
   * position to translateY the document in a natural way.
   */
  const y = useTransform(spring, (value) => -value);

  return y;
}

function usePageHeight(containerRef: React.RefObject<HTMLDivElement | null>) {
  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    );

    if (containerRef?.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [containerRef, resizePageHeight]);

  return pageHeight;
}

function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const pageHeight = usePageHeight(containerRef);

  const y = useSmoothScroll(pageHeight);

  return (
    <>
      <motion.div
        ref={containerRef}
        // translateY of scroll container using negative scroll value
        style={{ y }}
        className="fixed top-0 left-0 w-full"
      >
        {children}
      </motion.div>
      {/* Blank div that has a dynamic height based on the content's inherent height */}
      {/* This is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      <div style={{ height: pageHeight }} className="hide-scrollbar" />
    </>
  );
}

export default SmoothScroll;
