"use client";

import React, { ReactNode, useState } from "react";
import { chatMessageContext, userChatMetaData } from "./chatMessageContext";

const ChatMessageProvider = ({ children }: { children: ReactNode }) => {
  const [currentChat, setcurrentChat] = useState<userChatMetaData>(
    {} as userChatMetaData
  );
  const changeChat = (user: userChatMetaData) => {
    setcurrentChat({ ...user });
  };

  const [messages, setMessages] = useState<any>([] as any);

  const addMessages = (chat: any) => {
    setMessages((prev: any) => [...prev, chat]);
  };

  const emptyMessages = () => {
    setMessages((prev: any) => []);
  };

  return (
    <chatMessageContext.Provider
      value={{
        currentChat,
        changeChat,
        messages,
        addMessages,
        emptyMessages,
      }}
    >
      {children}
    </chatMessageContext.Provider>
  );
};

export default ChatMessageProvider;
