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
      {children}
    </div>
  );
}
