import ChatMessageProvider from "@/context/chat/chatMessage.Provider";
import SocketContextProvider from "@/context/socket/socketContext.Provider";
import UserProfileProvider from "@/context/user/userContext.Provide";

export const metadata = {
  title: "Chat with developers",
  description: "Get into the world of development",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen py-[3vh] justify-start">
      <SocketContextProvider>
        <UserProfileProvider>
          <ChatMessageProvider>{children}</ChatMessageProvider>
        </UserProfileProvider>
      </SocketContextProvider>
    </div>
  );
}
