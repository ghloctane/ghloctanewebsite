import React, { memo, useState } from "react";
import Image from "next/image";
import AnimatedButton from "../Button/AnimatedButton";
import { Tool } from "../../Data/ToolsData";
import { FaPlay } from "react-icons/fa";

interface ToolCardProps {
    tool: Tool;
}

const ToolCard = memo(({ tool }: ToolCardProps) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <div
            className="card card-tool"
            style={{
                background: tool.gradient,
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                border: '1px solid rgba(168, 184, 224, 0.3)',
                boxShadow: '0 8px 30px rgba(39, 66, 140, 0.3)',
                borderRadius: 'var(--global-border-radius)',
                overflow: 'hidden',
                height: '100%',
                transition: 'all 0.3s ease',
            }}
        >
            {/* Image / Video Area - poster fills entire top */}
            <div
                className="tool-image-area"
                style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: tool.videoId ? 'pointer' : 'default',
                    backgroundColor: '#0D1B3E',
                    flexShrink: 0,
                }}
            >
                {!isVideoPlaying ? (
                    <div
                        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                        onClick={() => tool.videoId && setIsVideoPlaying(true)}
                    >
                        <Image
                            src={tool.image}
                            alt={tool.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 600px"
                            quality={100}
                        />
                        {tool.videoId && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'rgba(25, 40, 90, 0.85)',
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '24px',
                                    boxShadow: '0 0 25px rgba(39, 66, 140, 0.6)',
                                    transition: 'all 0.3s ease',
                                    zIndex: 2,
                                }}
                            >
                                <FaPlay style={{ marginLeft: '4px' }} />
                            </div>
                        )}
                    </div>
                ) : (
                    <div style={{ width: '100%', height: '100%' }}>
                        {tool.isVimeo ? (
                            <iframe
                                src={tool.videoId}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title={tool.title}
                            ></iframe>
                        ) : (
                            <video
                                width="100%"
                                height="100%"
                                src={tool.videoId}
                                controls
                                autoPlay
                                playsInline
                                style={{ objectFit: 'cover' }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                )}
            </div>

            {/* Card Body */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: '24px 28px 28px',
                    flexGrow: 1,
                }}
            >
                <h4 style={{ color: '#ffffff', marginBottom: '0', fontSize: '1.4rem' }}>{tool.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.65', marginBottom: '0', fontSize: '0.95rem' }}>
                    {tool.description}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                    <AnimatedButton href={tool.ctaLink} className="btn-primary">
                        {tool.ctaText}
                    </AnimatedButton>
                </div>
            </div>
        </div>
    );
});

ToolCard.displayName = 'ToolCard';

export default ToolCard;
