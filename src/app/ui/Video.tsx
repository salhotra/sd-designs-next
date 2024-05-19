import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";

interface Props extends ReactPlayerProps {}

function VideoPlayer({ ...rest }: Props): JSX.Element {
  return <ReactPlayer {...rest} />;
}

export default VideoPlayer;
