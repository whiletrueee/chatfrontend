"use client";
import useSWR from "swr";
import axios from "axios";
import { useChatMessageContext } from "@/context/chat/chatMessageContext";

const getChatData = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const config = {
      headers: {
        authorization: token,
      },
      params: {
        userId: userId,
      },
    };
    if (token === null || userId === null) {
      return new Error("Token or userId is null");
    }
    const res = await axios.get(
      `${process.env.BASE_API}/api/chat/all-users`,
      config
    );
    return res;
  } catch (error: any) {
    return error;
  }
};

export default function ChatDisplay() {
  const { changeChat, addMessages, emptyMessages } = useChatMessageContext();
  const { data, error } = useSWR("getChatData", getChatData);

  const fetchMessages = async (userIdTo: string) => {
    emptyMessages();
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const config = {
        headers: {
          authorization: token,
        },
        params: {
          from: userId,
          to: userIdTo,
        },
      };
      if (token === null) {
        return new Error("Token or userId is null");
      }
      const res = await axios.get(
        `${process.env.BASE_API}/api/chat/recieve-messages`,
        config
      );
      res.data.forEach((element: any) => {
        addMessages(element);
      });
    } catch (error: any) {
      return error;
    }
  };
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="w-[40%] h-full border-4 border-green-800">
      <div className="px-4 py-2 flex flex-col gap-5">
        {data.data.map((user: any) => {
          return (
            <div
              onClick={() => {
                changeChat(user);
                fetchMessages(user.userId);
              }}
              key={user._id}
              className="flex justify-between items-center py-2 m-1 border-b-2 border-black  hover:border-green-500 cursor-pointer"
            >
              <div className="">
                <div className="text-lg font-semibold text-green-600">
                  {user.name}
                </div>
                <div className="text-base opacity-50 text-orange-400 font-medium">
                  {user.email}
                </div>
              </div>
              {/* <div className="bg-green-500 px-1 rounded-full font-black text-black">
                online
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
