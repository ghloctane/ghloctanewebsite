import React from "react";
import { useModalVideo } from "../Video/ModalVideoContext";

const TestimonialCard = ({ name, title, content, rating, image, video }) => {
  const { openModal } = useModalVideo();
  const hasVideo = video && video.trim() !== '';

  return (
    <div className="card card-testimonial">
        <div className="stars">
            {Array.from({ length: rating }).map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
            ))}
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row gspace-2">
                <div className="d-flex flex-column">
                    <span className="profile-name">{name}</span>
                    <p className="profile-info">{title}</p>
                </div>
            </div>
            <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
        </div>
        <p className="testimonial-description">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;