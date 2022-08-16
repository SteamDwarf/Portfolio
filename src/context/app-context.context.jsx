import { useState } from "react";
import { createContext } from "react";

const defaultValue = {
    isModalOpen: false,
    modalContent: null,
    setIsModalOpen: () => null,
    setModalContent: () => null
}

export const AppContext = createContext(defaultValue);

const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const value = {isModalOpen, modalContent, setIsModalOpen, setModalContent};

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider;