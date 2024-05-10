import React from "react";
import Image from "next/image";

import Link from "next/link";
import useScrollToId from "../hooks/useScrollToId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faMedium,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function SocialMediaIcon({
  icon,
  link,
}: {
  icon: IconProp;
  link: string;
}): JSX.Element {
  return (
    <div>
      <FontAwesomeIcon
        icon={icon}
        className="md:text-2xl text:md cursor-pointer"
        color="white"
        cursor="pointer"
        onClick={() => {
          window.open(link, "_blank");
        }}
      />
    </div>
  );
}

function Footer(): JSX.Element {
  const { scrollToId } = useScrollToId();

  const socialLinks = (
    <div className="flex mt-8 md:mb-12 mb-4 space-x-8">
      <SocialMediaIcon
        icon={faInstagram}
        link="https://www.instagram.com/sd.designs__"
      />
      <SocialMediaIcon icon={faFacebookF} link="https://www.facebook.com" />
      <SocialMediaIcon
        icon={faTwitter}
        link="https://twitter.com/SD___Designs"
      />
      <SocialMediaIcon
        icon={faLinkedinIn}
        link="https://www.linkedin.com/in/sd-designs-interior"
      />
      <SocialMediaIcon
        icon={faPinterestP}
        link="https://in.pinterest.com/sddesignsinterior"
      />
      <SocialMediaIcon
        icon={faMedium}
        link="https://medium.com/@sddesigns.interior"
      />
    </div>
  );

  const internalLinks = (
    <ul className="flex space-x-12 md:text-lg text-sm font-semibold">
      <li>
        <Link href="/projects">PROJECTS</Link>
      </li>
      <li>
        <Link href="/blog">BLOG</Link>
      </li>
      <li>
        <Link
          href="/#about-us-section-id"
          onClick={() => scrollToId("about-us-section-id")}
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          href="/#contact-us-section-id"
          onClick={() => scrollToId("contact-us-section-id")}
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );

  return (
    <footer>
      <div className="flex flex-1 bg-brown text-white md:p-12 p-8">
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

          {socialLinks}

          <p className="text-sm absolute right-0 bottom-0">
            © 2024 SD DESIGNS / INTERIOR DESIGNER
          </p>
        </div>

        <div className="md:hidden flex flex-col items-center justify-center">
          {internalLinks}

          {socialLinks}

          <p className="text-xs mt-8">© 2024 SD DESIGNS / INTERIOR DESIGNER</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
