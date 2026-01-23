import React, { memo } from "react";

const PartnershipCard = memo(({ logo }) => {
  return (
    <div className="col partnership-container">
        <div className="partnership-item">
            <a href="#">
                <img src={logo} alt="Partner Logo" className="img-fluid" loading="lazy" />
            </a>
        </div>
    </div>
  );
});

PartnershipCard.displayName = 'PartnershipCard';

export default PartnershipCard;
