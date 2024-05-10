import { useRouter } from "next/navigation";

function useScrollToId(containerRef?: React.RefObject<HTMLDivElement>) {
  const router = useRouter();

  function scrollToId(id: string) {
    const element = document.getElementById(id);
    console.log("element", element);
    if (element) {
      router.push(`#${id}`);
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return { scrollToId, scrollToTop };
}

export default useScrollToId;
