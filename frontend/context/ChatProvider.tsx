'use client';

import React from 'react';

interface ChatTypes {
    chatId: number | null;
    setChatId: (chatId: number | null) => void;
}

const ChatContext = React.createContext<ChatTypes>({ chatId: null, setChatId: () => {} });

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [chatId, setChatId] = React.useState<number | null>(null);

    return <ChatContext.Provider value={{ chatId, setChatId }}>{children}</ChatContext.Provider>;
};

export const useChat = () => React.useContext(ChatContext);
