"use client";

import Link from "next/link";

export default function LogoutButton() {
  return (
    <Link
      href={"/auth/login"}
      className={`border-2 border-white/50 px-4 py-1 justify-end flex`}
      onClick={() => {
        localStorage.removeItem("token");
      }}
    >
      Logout
    </Link>
  );
}
