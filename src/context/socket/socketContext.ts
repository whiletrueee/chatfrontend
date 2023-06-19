import { createContext, useContext } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:5050");

export const socketContext = createContext<any>({
  socket: {} as any,
});

export const useSocketClientContext = () => useContext(socketContext);
