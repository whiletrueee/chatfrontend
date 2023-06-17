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

  const [messages, setmessages] = useState<any>([]);

  const addMessages = (message: any) => {
    setmessages([...messages, message]);
  };

  const emptyMessages = () => {
    setmessages([]);
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
