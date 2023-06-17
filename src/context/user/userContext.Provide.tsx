"use client";

import React, { ReactNode, useState } from "react";
import { userProfileContext, userProfileType } from "./userProfileContext";

const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [loggedInProfile, setloggedInProfile] = useState<userProfileType>(
    {} as userProfileType
  );
  const changeProfile = (user: userProfileType) => {
    setloggedInProfile({ ...user });
  };

  return (
    <userProfileContext.Provider
      value={{
        loggedInProfile,
        changeProfile,
      }}
    >
      {children}
    </userProfileContext.Provider>
  );
};

export default UserProfileProvider;
