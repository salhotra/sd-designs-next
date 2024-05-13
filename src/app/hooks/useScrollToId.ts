import { useRouter } from "next/navigation";

function useScrollToId() {
  const router = useRouter();

  function scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      router.push(`#${id}`);
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
