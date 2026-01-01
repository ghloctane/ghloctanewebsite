import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import NotFoundSection from "../../Components/NotFound/notfound";

function NotFoundPage(){
    return(
        <>
            <HeadTitle title="Error 404 - GHL Octane - GoHighLevel Solutions" />
            <NotFoundSection />
        </>
    );
}

export default NotFoundPage;