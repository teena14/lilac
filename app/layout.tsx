import "./globals.css";

export const metadata = {
  title: "Lilac Template",
  description: "Therapy website UI recreation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f4ef] text-[#2f3a1f] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
