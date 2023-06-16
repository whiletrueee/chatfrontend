import LogoutButton from "../components/chat/LogoutButton";
import ChatDisplay from "../components/chat/chatDisplay";
import MessageDisplay from "../components/chat/messageDisplay";

export const metadata = {
  title: "Chit-Chat with developers",
  description: "Get into the world of development",
};

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
