"use client";

import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

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
    console.log(config);
    if (token === null || userId === null) {
      return new Error("Token or userId is null");
    }
    const res = await axios.get(
      `http://localhost:5050/api/chat/recent`,
      config
    );
    console.log(res);
    return res;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

export default function ChatDisplay() {
  const { data, error } = useSWR("/api/profile-data", getChatData);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="w-[40%] h-[80vh] border-4 border-green-800">
      <div className="px-4 py-2 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-lg font-semibold text-green-600">Name</div>
            <div className="text-base opacity-40 text-green-600 font-medium">
              Last Text
            </div>
          </div>
          <div className="bg-green-500 px-1 rounded-full font-black text-black">
            online
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-lg font-semibold text-green-600">Name</div>
            <div className="text-base opacity-40 text-green-600 font-medium">
              Last Text
            </div>
          </div>
          <div className="bg-green-500 px-1 rounded-full font-black text-black">
            online
          </div>
        </div>
      </div>
    </div>
  );
}
