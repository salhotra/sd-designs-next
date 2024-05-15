import React from "react";
import Image from "next/image";

import Link from "next/link";
import SocialLinks from "./SocialLinks";

function Footer(): JSX.Element {
  const internalLinks = (
    <ul className="flex w-full md:text-lg text-xs font-semibold items-center md:justify-end md:space-x-4 justify-between">
      <li>
        <Link href="/projects">PROJECTS</Link>
      </li>
      <li>
        <Link href="/blog">BLOG</Link>
      </li>
      <li>
        <Link href="/#about">ABOUT</Link>
      </li>
      <li>
        <Link href="/#contact">CONTACT</Link>
      </li>
    </ul>
  );

  return (
    <footer className="relative">
      <div className="flex w-full bg-brown text-white md:p-12 p-8">
        <div className="md:flex hidden flex-1 flex-col">
          <div className="md:flex hidden">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />

            <div className="flex flex-col ml-2">
              <h1 className="text-4xl">Interior</h1>
              <h1 className="text-4xl">Design</h1>
            </div>
          </div>

          <p className="mt-8 font-semibold">
            New Delhi | Gurgaon | Faridabad | Noida
          </p>
        </div>
        <div className="md:flex hidden flex-1 flex-col items-end relative">
          {internalLinks}

          <SocialLinks />

          <p className="text-sm absolute right-0 bottom-0">
            © 2024 SD DESIGNS / INTERIOR DESIGNER
          </p>
        </div>

        <div className="md:hidden flex flex-1 flex-col items-center justify-center">
          {internalLinks}

          <SocialLinks />

          <p className="text-xs mt-8">© 2024 SD DESIGNS / INTERIOR DESIGNER</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
