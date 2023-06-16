"use client";

import { useRouter } from "next/navigation";

export default function VisitChat() {
  const router = useRouter();
  const visitChat = () => {
    const user = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    console.log(user, token);
    if (user !== null && token !== null) {
      router.push("/chat");
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <button
      onClick={() => visitChat()}
      className="h-screen flex justify-center items-center font-semibold text-green-600 text-xl"
    >
      Visit chat
    </button>
  );
}
