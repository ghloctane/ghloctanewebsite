import React from "react";
import { useModalVideo } from "./ModalVideoContext";
import { FaTimes as FaXmark } from "react-icons/fa";

function ModalVideoSection() {
  const { isOpen, videoUrl, closeModal } = useModalVideo();

  if (!isOpen) return null;

  // Check if it's an MP4 video file (not YouTube or Vimeo)
  const isMP4 = videoUrl && (
    videoUrl.toLowerCase().endsWith('.mp4') || 
    (videoUrl.toLowerCase().includes('.mp4') && !videoUrl.toLowerCase().includes('youtube') && !videoUrl.toLowerCase().includes('youtu.be') && !videoUrl.toLowerCase().includes('vimeo'))
  );
  
  // Check if it's a Vimeo video
  const isVimeo = videoUrl && videoUrl.toLowerCase().includes('vimeo');

  return (
    <div
      id="modal-overlay"
      className="modal-overlay"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target.id === "modal-overlay") closeModal();
      }}
    >
        <span className="my-close" onClick={closeModal}>
            <FaXmark />
        </span>
        <div className="my-modal">
            {isMP4 ? (
                <video
                    id="my-video-frame"
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="none"
                    type="video/mp4"
                >
                    Your browser does not support the video tag.
                </video>
            ) : isVimeo ? (
                <iframe
                    id="my-video-frame"
                    src={videoUrl}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Video"
                ></iframe>
            ) : (
                <iframe
                    id="my-video-frame"
                    src={videoUrl}
                    allowFullScreen
                    title="Video"
                ></iframe>
            )}
        </div>
    </div>
  );
}

export default ModalVideoSection;