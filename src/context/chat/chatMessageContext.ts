import React, { ReactNode, createContext, useContext, useState } from "react";

export type userChatMetaData = {
  name: string;
  email: string;
  userId: string;
  _id: string;
};

export interface chatUser {
  currentChat: userChatMetaData;
  changeChat: (user: userChatMetaData) => void;
  messages: any[];
  addMessages: (chat: any) => void;
  emptyMessages: () => void;
}

export const chatMessageContext = createContext<chatUser>({
  currentChat: {} as userChatMetaData,
  changeChat: (user: userChatMetaData) => {},
  messages: [],
  addMessages: (chat: any) => {},
  emptyMessages: () => {},
});

export const useChatMessageContext = () => useContext(chatMessageContext);
