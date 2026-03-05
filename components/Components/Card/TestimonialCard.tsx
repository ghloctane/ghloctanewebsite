import React from "react";
import { useModalVideo } from "../Video/ModalVideoContext";
import { FaStar, FaQuoteRight } from "react-icons/fa";

export interface TestimonialCardProps {
    name: string;
    title: string;
    content: string;
    rating: number;
    image: string;
    video?: string;
}

const TestimonialCard = ({ name, title, content, rating, image, video }: TestimonialCardProps) => {
  const { openModal } = useModalVideo();
  const hasVideo = video && video.trim() !== '';

  return (
    <div className="card card-testimonial">
        <div className="stars">
            {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} />
            ))}
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row gspace-2">
                <div className="d-flex flex-column">
                    <span className="profile-name">{name}</span>
                    <p className="profile-info">{title}</p>
                </div>
            </div>
            <FaQuoteRight className="accent-color" style={{ fontSize: '3em' }} />
        </div>
        <p className="testimonial-description">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;