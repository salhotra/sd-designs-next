import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

function indexToReadableIndex(index: number): string {
  const readableIndex = index + 1;
  return readableIndex < 10 ? `0${readableIndex}` : readableIndex.toString();
}

interface ProjectListItemProps {
  id: string;
  index: number;
  title: string;
  thumbnail: string;
  isLastItem: boolean;
}

function SingleImage({
  src,
  alt,
  scale,
}: {
  src: string;
  alt: string;
  scale: number;
}): JSX.Element {
  return (
    <motion.div
      className="h-full w-full absolute inset-0"
      variants={{
        initial: { scale: 1 },
        hover: {
          scale: [1, scale, scale, 1],
        },
      }}
      transition={{
        duration: 0.8,
        times: [0, 0.3, 0.45, 0.8],
      }}
      initial={false}
    >
      <Image src={src} alt={alt} fill quality={50} className="object-cover" />
    </motion.div>
  );
}

function AnimatingImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): JSX.Element {
  return (
    <motion.div
      className="relative h-full w-full"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          filter: "grayscale(100)",
        },
        hover: {
          filter: "grayscale(0)",
        },
      }}
    >
      <SingleImage src={src} alt={alt} scale={1} />
      <SingleImage src={src} alt={alt} scale={0.8} />
      <SingleImage src={src} alt={alt} scale={0.4} />
    </motion.div>
  );
}

function ProjectListItem({
  index,
  title,
  id,
  thumbnail,
  isLastItem,
}: ProjectListItemProps): JSX.Element {
  return (
    <div
      className={clsx(
        "border-slate-800 lg:mx-8 mx-2 py-2 lg:h-[15vw] h-[30vw]",
        {
          "lg:pl-0": index % 4 === 0,
          "lg:pl-[25vw]": index % 4 === 1 || index % 4 === 3,
          "lg:pl-[50vw]": index % 4 === 2,
          "border-t-1": index === 0,
          "border-b-1": !isLastItem,
        },
      )}
    >
      <div className="flex flex-row items-center h-full">
        <Link href={`/projects/${id}`} className="h-full lg:w-[25vw] w-[50vw]">
          <AnimatingImage src={thumbnail} alt={title} />
        </Link>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 flex flex-col items-start h-full w-full justify-between ml-2">
          <span className="text-slate-950 text-md md:mt-8 font-semibold">
            {indexToReadableIndex(index)}
          </span>
          <h2 className="font-bold md:mb-8 mb-2 md:text-lg text-md">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectListItem;
