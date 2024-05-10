"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/form/Button";

function Blog(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-5xl my-8">Coming Soon!</h1>

      <Button
        type="secondary"
        onClick={() => {
          router.replace("/");
        }}
      >
        Back To Home
      </Button>
    </div>
  );
}

export default Blog;
