import React from "react";
import { useModalVideo } from "./ModalVideoContext";
import { FaPlay } from "react-icons/fa";

interface VideoButtonProps {
    videoUrl: string;
}

function VideoButton({ videoUrl }: VideoButtonProps) {
  const { openModal } = useModalVideo();

  return (
    <button className="request-loader" onClick={() => openModal(videoUrl)}>
        <FaPlay />
    </button>
  );
}

export default VideoButton;
