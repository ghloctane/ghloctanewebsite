import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './LottieAnimation.css';

const LottieAnimation = () => {
  return (
    <div className="section section-lottie">
      <div className="hero-container">
        <div className="lottie-content-wrapper">
          <div className="lottie-animation-wrapper lottie-animation-left">
            <DotLottieReact
              src="https://lottie.host/5f9329ae-f4bd-4f07-8340-47dbe2b14bac/to4xXypuCq.lottie"
              loop
              autoplay
              className="lottie-animation"
            />
          </div>
          <div className="lottie-animation-wrapper lottie-animation-right">
            <DotLottieReact
              src="https://lottie.host/f4efd005-a463-42e8-8f4c-dca8b4de72c5/ImKK4va7MC.lottie"
              loop
              autoplay
              className="lottie-animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottieAnimation;

