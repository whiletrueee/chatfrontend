"use client";

import React, { ReactNode, useState } from "react";
import { socket, socketContext } from "./socketContext";

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  
  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};

export default SocketContextProvider;
