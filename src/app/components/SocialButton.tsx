import React from "react";
import Image from "next/image";

function getSvgByType(type: "facebook" | "twitter" | "instagram"): string {
  switch (type) {
    case "facebook":
      return "/fb_logo.svg";
    case "twitter":
      return "/twitter_logo.svg";
    case "instagram":
      return "/instagram_logo.svg";
    default:
      throw new Error("Invalid social platform type");
  }
}

export default function SocialButton({
  type,
  onClick,
}: {
  type: "facebook" | "twitter" | "instagram";
  onClick: () => void;
}): JSX.Element {
  return (
    <button>
      <Image src={getSvgByType(type)} height={18} width={18} alt={type} />
    </button>
  );
}
