import React from "react";
import SocialButton from "../Social/SocialButton";

const   TeamCard = ({ name, title, image, socials }) => {
  return (
    <div className="col">
        <div className="d-flex flex-column">
            <div className="image-team">
                <img src={image} alt={name} className="img-fluid" />
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
};

export default TeamCard;