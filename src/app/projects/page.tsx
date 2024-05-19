"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/form/Button";
import VideoPlayer from "../ui/Video";

function Projects(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <VideoPlayer
        url={`//player.vimeo.com/video/948022125`}
        playing={true}
        {...{
          loop: true,
          height: 500,
          key: "948022125",
        }}
      />
    </div>
  );
}

export default Projects;
