import React, { memo } from "react";
import Image from "next/image";

export interface PartnershipCardProps {
    logo: string;
}

const PartnershipCard = memo(({ logo }: PartnershipCardProps) => {
  return (
    <div className="col partnership-container">
        <div className="partnership-item">
            <a href="#">
                <Image src={logo} alt="Partner Logo" width={160} height={80} quality={85} className="img-fluid" />
            </a>
        </div>
    </div>
  );
});

PartnershipCard.displayName = 'PartnershipCard';

export default PartnershipCard;
