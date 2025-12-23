import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import AnimatedButton from "../Button/AnimatedButton";

const NotFoundSection = () => {

    return (
        <div className="section-404">
            <div className="banner-layout-404">
                <div className="layout-404">

                    <AnimateOnScroll>
                        <span className="text-404 title-heading">
                            404
                        </span>
                    </AnimateOnScroll>
                    <h3>Oops! Page Not Found</h3>
                    <p>
                        We couldn't find the page you're looking for. It might have been
                        removed, renamed, or never existed.
                    </p>
                    <div>
                        <AnimatedButton href="/">
                            Back to Home
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundSection;
