"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className={`border-2 border-white/50 px-4 py-1 justify-end flex hover:transform hover:scale-105 hover:bg-white/50 hover:text-black/50`}
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        router.push("/auth/login");
      }}
    >
      Logout
    </button>
  );
}
