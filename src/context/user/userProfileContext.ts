import React, { ReactNode, createContext, useContext, useState } from "react";

export type userProfileType = {
  name: string;
  email: string;
  userId: string;
  _id: string;
  isAdmin: boolean;
};

export interface user {
  loggedInProfile: userProfileType;
  changeProfile: (user: userProfileType) => void;
}

export const userProfileContext = createContext<user>({
  loggedInProfile: {} as userProfileType,
  changeProfile: (user: userProfileType) => {},
});

export const useUserProfileContext = () => useContext(userProfileContext);
