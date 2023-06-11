
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
   <div className="rounded-lg m-32 bg-black">
    {children}
   </div>
  )
}
