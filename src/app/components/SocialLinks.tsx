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
import clsx from "clsx";

type IconSize = "md" | "lg";

function SocialMediaIcon({
  icon,
  link,
  size,
}: {
  icon: IconProp;
  link: string;
  size?: IconSize;
}): JSX.Element {
  return (
    <div>
      <FontAwesomeIcon
        icon={icon}
        className={clsx("cursor-pointer", {
          "md:text-2xl text-md": size === "md",
          "md:text-3xl text-xl": size === "lg",
        })}
        color="white"
        cursor="pointer"
        onClick={() => {
          window.open(link, "_blank");
        }}
      />
    </div>
  );
}

function SocialLinks({
  size = "md",
  containerClassName,
}: {
  size?: IconSize;
  containerClassName?: string;
} = {}): JSX.Element {
  return (
    <div
      className={clsx("flex mt-8 md:mb-12 mb-4 space-x-8", containerClassName)}
    >
      <SocialMediaIcon
        size={size}
        icon={faInstagram}
        link="https://www.instagram.com/sd.designs__"
      />
      <SocialMediaIcon
        size={size}
        icon={faFacebookF}
        link="https://www.facebook.com/profile.php?id=61559804181158"
      />
      <SocialMediaIcon
        size={size}
        icon={faTwitter}
        link="https://twitter.com/SD___Designs"
      />
      <SocialMediaIcon
        size={size}
        icon={faLinkedinIn}
        link="https://www.linkedin.com/company/sddesigns-interiordesign"
      />
      <SocialMediaIcon
        size={size}
        icon={faPinterestP}
        link="https://in.pinterest.com/sddesignsinterior"
      />
      <SocialMediaIcon
        size={size}
        icon={faMedium}
        link="https://medium.com/@sddesigns.interior"
      />
    </div>
  );
}

export default SocialLinks;
