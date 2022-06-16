import { createContext, ReactNode, useContext, useState } from "react"

interface SidebarDrawerProviderProps {
    children: ReactNode;
};

interface SidebarDrawerContextData {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean)=> void
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidebarDrawerContext.Provider value={{
            isOpen,
            setIsOpen
        }}>
            {children}
        </SidebarDrawerContext.Provider>
    );
};

function useSidebarToggle(){
    const context = useContext(SidebarDrawerContext);
    return context
};

export {
    useSidebarToggle,
    SidebarDrawerProvider
}