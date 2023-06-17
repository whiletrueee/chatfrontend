import ChatMessageProvider from "@/context/chat/chatMessage.Provider";
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
      <UserProfileProvider>
        <ChatMessageProvider>{children}</ChatMessageProvider>
      </UserProfileProvider>
    </div>
  );
}
