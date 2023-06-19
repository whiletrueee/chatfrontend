"use client";

import { use, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useChatMessageContext } from "@/context/chat/chatMessageContext";
import { useSocketClientContext } from "@/context/socket/socketContext";

export default function MessageDisplay() {
  const [typedMessage, setTypedMessage] = useState<string>("");
  const { currentChat, messages, addMessages } = useChatMessageContext();
  const socket = useSocketClientContext();
  const textMessageRef = useRef<HTMLTextAreaElement>(null);
  textMessageRef.current?.addEventListener("input", () => {
    textMessageRef.current!.style.height = "auto";
    textMessageRef.current!.style.height =
      textMessageRef.current!.scrollHeight + "px";
  });

  useEffect(() => {
    socket.on("send-message", (message: any) => {
      addMessages(message);
      console.log(message);
    });
  }, [socket]);

  const sendMessage = async () => {
    if (typedMessage === "") {
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const data = {
        from: localStorage.getItem("userId"),
        to: currentChat.userId,
        message: typedMessage,
        sentAt: new Date(),
      };

      const res = await axios.post(
        `http://localhost:5050/api/chat/send-message`,
        data,
        { headers: { authorization: token } }
      );

      if (res.status === 200) {
        setTypedMessage("");
        textMessageRef.current!.style.height = "auto";
        textMessageRef.current!.style.height =
          textMessageRef.current!.scrollHeight + "px";
      }
      // socket.emit("sendMessage", message);}
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="w-[50%] h-full border-4 border-green-800 flex flex-col justify-start px-3 py-4">
      <div className="h-[10%]">
        <div className="text-lg font-semibold text-green-600">
          {currentChat.name}
        </div>
        <div className="text-base opacity-50 text-orange-400 font-medium">
          {currentChat.email}
        </div>
      </div>
      <div className="h-[80%] overflow-y-auto flex flex-col-reverse">
        <div className="flex flex-col justify-end gap-1 mb-4 px-2 ">
          {messages.map((message, index) => {
            if (currentChat.userId === message.to) {
              return (
                <div
                  key={`${index}+${message._id}`}
                  className={`flex flex-col items-end`}
                >
                  <div
                    className={`flex flex-col gap-1 bg-green-700 w-fit px-2 py-1 rounded-xl max-w-[80%] h-auto break-words`}
                  >
                    <div className={`text-base font-semibold text-black`}>
                      {message.message}
                    </div>
                    <div className="text-sm text-white/40">
                      {new Date(message.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div
                key={`${index}+${message._id}`}
                className={`flex flex-col items-start`}
              >
                <div
                  className={`flex flex-col gap-1 bg-green-700 w-fit px-2 py-1 rounded-xl max-w-[80%]`}
                >
                  <div className={`text-base font-semibold text-black`}>
                    {message.message}
                  </div>
                  <div className="text-sm text-white/40">
                    {new Date(message.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <textarea
          ref={textMessageRef}
          value={typedMessage}
          name="textMessage"
          placeholder="Enter Message"
          className="font-semibold text-green-600 outline-none bg-transparent placeholder:text-green-600/40 px-2 py-1 w-full resize-none overflow-hidden"
          onChange={(e) => {
            setTypedMessage(e.target.value);
          }}
        />
        <button
          onClick={() => {
            sendMessage();
          }}
          className="text-orange-400/50 border-[1px] border-orange-400/50 text-sm font-bold px-4 rounded-sm py-1 w-fit ml-auto"
        >
          Send
        </button>
      </div>
    </div>
  );
}
