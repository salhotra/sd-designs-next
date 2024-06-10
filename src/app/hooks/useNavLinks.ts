import { useCallback } from "react";
import { BlogLink } from "../constants";

enum NavLink {
  Projects = "projects",
  Blog = "blog",
  About = "about",
  Contact = "contact",
}

type UseNavLinksReturnType = Array<{
  id: string;
  title: string;
  href: string;
  onClick?: () => void;
}>;

interface Props {
  overrides?: {
    [key in NavLink]?: Partial<UseNavLinksReturnType[number]>;
  };
}

function useNavLinks(props?: Props): UseNavLinksReturnType {
  const { overrides } = props ?? {};

  const handleBlogClick = useCallback(() => {
    window.open(BlogLink, "_blank");
  }, []);

  return [
    {
      id: "projects",
      title: "Projects",
      href: "/projects",
      ...overrides?.projects,
    },
    {
      id: "blog",
      title: "Blog",
      href: "",
      onClick: handleBlogClick,
      ...overrides?.blog,
    },
    {
      id: "about",
      title: "About",
      href: "/#about",
      ...overrides?.about,
    },
    {
      id: "contact",
      title: "Contact",
      href: "/#contact",
      ...overrides?.contact,
    },
  ];
}

export default useNavLinks;
