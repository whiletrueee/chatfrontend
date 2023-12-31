"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const handlesubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      email: e.target.Email.value,
      password: e.target.password.value,
    };
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/auth/login`,
        formData
      );
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        toast.success(res.data.message);
      }
      setTimeout(() => {
        router.push("/chat");
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <form action="/login" onSubmit={handlesubmit}>
      <Toaster />
      <div className="flex flex-col  justify-between gap-8 mt-12 text-lg font-bold">
        <div className="flex justify-between gap-6 items-center">
          <label htmlFor="Email" className="text-green-600 text-xl">
            Email
          </label>
          <input
            type="text"
            name="Email"
            placeholder="Enter Email-Id"
            className="font-bold text-green-600 outline-none bg-transparent placeholder:text-green-600/40 px-2 py-1"
          />
        </div>
        <div className="flex justify-between gap-6 items-center">
          <label htmlFor="password" className="text-green-600 text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="font-bold text-green-600 outline-none bg-transparent placeholder:text-green-600/40 px-2 py-1"
          />
        </div>
      </div>
      <div className="mt-10 flex justify-between gap-10">
        <button
          type="submit"
          className="text-orange-400 border-2 border-orange-400 text-lg font-bold px-6 rounded-sm py-1"
        >
          Login
        </button>
        <Link href="/auth/register">
          <button className="text-orange-400/50 border-2 border-orange-400/50 text-lg font-bold px-6 rounded-sm py-1">
            Regsiter
          </button>
        </Link>
      </div>
    </form>
  );
}
