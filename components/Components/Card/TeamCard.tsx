import React, { memo } from "react";
import Image from "next/image";
import SocialButton from "../Social/SocialButton";

const TeamCard = memo(({ name, title, image, socials }) => {
  return (
    <div className="col">
        <div className="d-flex flex-column">
            <div className="image-team">
                <Image src={image} alt={name} className="img-fluid" width={400} height={500} />
                <div className="social-team-wrapper">
                    <div className="social-team-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                        <div className="social-team-container">
                            <SocialButton href={socials.facebook} icon="facebook" />
                            <SocialButton href={socials.instagram} icon="instagram" />
                            <SocialButton href={socials.linkedin} icon="linkedin" />
                        </div>
                        <div className="social-team-spacer"></div>
                    </div>
                </div>
            </div>
            <div className="team-profile">
                <h4>{name}</h4>
                <span className="title">{title}</span>
            </div>
        </div>
    </div>
  );
});

TeamCard.displayName = 'TeamCard';

export default TeamCard;