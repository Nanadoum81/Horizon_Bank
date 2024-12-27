// app/(root)/layout.tsx
// app/root/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main> 
        SIDEBAR
        {children}
    </main>
  );
}
