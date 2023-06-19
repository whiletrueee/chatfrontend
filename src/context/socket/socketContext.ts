import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const BASE_API = process.env.BASE_API!;
export const socket = io(BASE_API);

export const socketContext = createContext<any>({
  socket: {} as any,
});

export const useSocketClientContext = () => useContext(socketContext);
