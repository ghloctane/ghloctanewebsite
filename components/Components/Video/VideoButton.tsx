import React from "react";
import { useModalVideo } from "./ModalVideoContext";
import { FaPlay } from "react-icons/fa";

function VideoButton({ videoUrl }) {
  const { openModal } = useModalVideo();

  return (
    <button className="request-loader" onClick={() => openModal(videoUrl)}>
        <FaPlay />
    </button>
  );
}

export default VideoButton;
