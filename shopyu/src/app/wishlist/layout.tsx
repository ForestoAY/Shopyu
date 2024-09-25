import ProtectedComponent from "@/components/ProtectedComponent"

export default function WishlistLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProtectedComponent>
      {children}
    </ProtectedComponent>
  )
}