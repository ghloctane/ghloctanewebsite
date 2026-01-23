import React, { createContext, useContext } from "react";
import { useRouter } from "next/router";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const router = useRouter();
    const pathname = router.pathname;

    const isDropdownActive = (paths = []) => paths.includes(pathname);

    const value = { pathname, isDropdownActive };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);