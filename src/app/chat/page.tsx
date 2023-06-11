import LogoutButton from "../components/LogoutButton";
import ChatDisplay from "../components/chatDisplat";
import MessageDisplay from "../components/messageDisplay";

export default function ChatPage() {
  return (
    <>
      <div className="flex justify-between items-center px-20 mb-6">
        <div className="">Home</div>
        <LogoutButton />
      </div>
      <div className="flex w-full justify-center items-start">
        <ChatDisplay />
        <MessageDisplay />
      </div>
    </>
  );
}
