
export const metadata = {
  title: 'Authentication',
  description: 'Get into the world of development',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className="rounded-lg flex justify-center items-center h-full bg-black">
    {children}
   </div>
  )
}
