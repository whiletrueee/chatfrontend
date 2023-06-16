import RegisterForm from "@/app/components/auth/RegisterForm";
export const metadata = {
  title: "Register Page",
  description: "Get into the world of development",
};
export default function Login() {
  return (
    <div className="flex flex-col items-center py-5">
      <div className="text-3xl font-bold text-green-600 justify-center">
        Register Now
      </div>
      <RegisterForm />
    </div>
  );
}
