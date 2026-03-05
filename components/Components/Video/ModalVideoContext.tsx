import React, { createContext, useState, useContext } from "react";

interface ModalVideoContextValue {
    videoUrl: string;
    isOpen: boolean;
    openModal: (url: string) => void;
    closeModal: () => void;
}

const ModalVideoContext = createContext<ModalVideoContextValue | undefined>(undefined);

export const useModalVideo = () => {
    const ctx = useContext(ModalVideoContext);
    if (ctx === undefined) throw new Error("useModalVideo must be used within ModalVideoProvider");
    return ctx;
};

interface ModalVideoProviderProps {
    children: React.ReactNode;
}

export const ModalVideoProvider = ({ children }: ModalVideoProviderProps) => {
    const [videoUrl, setVideoUrl] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (url: string) => {
        setVideoUrl(url);
        setIsOpen(true);
    };

    const closeModal = () => {
        setVideoUrl("");
        setIsOpen(false);
    };

    return (
        <ModalVideoContext.Provider value={{ videoUrl, isOpen, openModal, closeModal }}>
            {children}
        </ModalVideoContext.Provider>
    );
};
