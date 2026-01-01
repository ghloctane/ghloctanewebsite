import React from "react";
import { useModalVideo } from "./ModalVideoContext";

function ModalVideoSection() {
  const { isOpen, videoUrl, closeModal } = useModalVideo();

  if (!isOpen) return null;

  // Check if it's an MP4 video file (not YouTube)
  const isMP4 = videoUrl && (
    videoUrl.toLowerCase().endsWith('.mp4') || 
    (videoUrl.toLowerCase().includes('.mp4') && !videoUrl.toLowerCase().includes('youtube') && !videoUrl.toLowerCase().includes('youtu.be'))
  );

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
            <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="my-modal">
            {isMP4 ? (
                <video
                    id="my-video-frame"
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    type="video/mp4"
                >
                    Your browser does not support the video tag.
                </video>
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