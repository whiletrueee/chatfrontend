import LoginForm from "@/app/components/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col items-center py-5">
      <div className="text-3xl font-bold text-green-600 justify-center">
        Log In
      </div>
      <LoginForm />
    </div>
  );
}
