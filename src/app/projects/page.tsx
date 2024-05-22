"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

import ProjectListItem from "./components/ProjectListItem";
import SmoothScroll from "../components/SmoothScroll";
import { montserratUltraBold } from "../fonts";

const projects = [
  {
    id: "01",
    title: "Kalkaji - New Delhi - Aug 2023",
    thumbnail: "/kalkaji-hall.webp",
  },
  {
    id: "02",
    title: "Saket - New Delhi - Oct 2023",
    thumbnail: "/saket-bedroom-render.webp",
  },
  // {
  //   id: "03",
  //   title: "Kalkaji - New Delhi - Aug 2023",
  //   thumbnail: "/kalkaji-hall.webp",
  // },
  // {
  //   id: "04",
  //   title: "Saket - New Delhi - Oct 2023",
  //   thumbnail: "/saket-bedroom-render.webp",
  // },
  // {
  //   id: "05",
  //   title: "Kalkaji - New Delhi - Aug 2023",
  //   thumbnail: "/kalkaji-hall.webp",
  // },
  // {
  //   id: "06",
  //   title: "Saket - New Delhi - Oct 2023",
  //   thumbnail: "/saket-bedroom-render.webp",
  // },
];

function HeadingSpan({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}): JSX.Element {
  return (
    <motion.span
      initial={{
        translateY: -60,
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.2,
        },
      }}
      className="block"
    >
      {children}
    </motion.span>
  );
}

function Header(): JSX.Element {
  return (
    <header className="flex flex-col w-flul md:mx-16 mx-8 mt-9 pb-6">
      <Link href="/">
        <Image
          src="/logo-golden.svg"
          alt="Logo"
          width={45}
          height={45}
          className="cursor-pointer"
        />
      </Link>
      <div className="w-full align-center justify-center mt-8">
        <h1
          className={clsx(
            montserratUltraBold.className,
            "lg:text-8xl md:text-6xl text-4xl text-center mb-4",
          )}
        >
          <HeadingSpan delay={0}>SD DESIGNS</HeadingSpan>{" "}
          <HeadingSpan delay={0.4}>
            IS AN INTERIOR DESIGN FIRM IN{" "}
            <HeadingSpan delay={0.8}>DELHI NCR.</HeadingSpan>
          </HeadingSpan>
          <HeadingSpan delay={1.2}>CHECK OUT OUR WORK!</HeadingSpan>
        </h1>
      </div>
    </header>
  );
}

function PortfolioList(): JSX.Element {
  return (
    <div className="bg-offwhite flex flex-1">
      <SmoothScroll>
        <Header />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 0.5,
            },
          }}
        >
          {projects.map((item, index) => (
            <ProjectListItem
              key={index}
              index={index}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              isLastItem={index === projects.length - 1}
            />
          ))}
        </motion.div>
      </SmoothScroll>
    </div>
  );
}

export default PortfolioList;
