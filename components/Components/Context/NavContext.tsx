import React, { createContext, useContext } from "react";
import { useRouter } from "next/router";

interface NavContextValue {
    pathname: string;
    isDropdownActive: (paths?: string[]) => boolean;
}

const NavContext = createContext<NavContextValue | undefined>(undefined);

interface NavProviderProps {
    children: React.ReactNode;
}

export const NavProvider = ({ children }: NavProviderProps) => {
    const router = useRouter();
    const pathname = router.pathname;

    const isDropdownActive = (paths: string[] = []) => paths.includes(pathname);

    const value = { pathname, isDropdownActive };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = () => {
    const ctx = useContext(NavContext);
    if (ctx === undefined) throw new Error("useNav must be used within NavProvider");
    return ctx;
};