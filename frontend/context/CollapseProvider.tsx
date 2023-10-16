'use client';

import React from 'react';

interface ChatTypes {
    collapse: {
        selected: string;
        isSidebarOpen: boolean;
    };
    setCollapse: ({ selected, isSidebarOpen }: { selected: string; isSidebarOpen: boolean }) => void;
}

const CollapseContext = React.createContext<ChatTypes>({
    collapse: {
        selected: '',
        isSidebarOpen: true,
    },
    setCollapse: () => {},
});

export const CollapseProvider = ({ children }: { children: React.ReactNode }) => {
    const [collapse, setCollapse] = React.useState<{ selected: string; isSidebarOpen: boolean }>({
        selected: '',
        isSidebarOpen: false,
    });

    React.useEffect(() => {
        const localValue = localStorage.getItem('isCollapsed') as string;
        const value = JSON.parse(localValue);
        if (!localValue) {
            setCollapse({ selected: 'dashboard', isSidebarOpen: false });
        } else {
            setCollapse(value);
        }
    }, []);

    return <CollapseContext.Provider value={{ collapse, setCollapse }}>{children}</CollapseContext.Provider>;
};

export const useCollapse = () => React.useContext(CollapseContext);
