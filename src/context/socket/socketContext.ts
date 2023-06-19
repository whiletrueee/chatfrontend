import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const NEXT_PUBLIC_SERVER_API = process.env.NEXT_PUBLIC_SERVER_API!;
export const socket = io(NEXT_PUBLIC_SERVER_API);

export const socketContext = createContext<any>({
  socket: {} as any,
});

export const useSocketClientContext = () => useContext(socketContext);
