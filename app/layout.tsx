import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

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
      <body className={`bg-[#f7f4ef] text-[#2f3a1f] font-body antialiased ${GeistSans.variable} ${bricolage.variable}`}>
        {children}
      </body>
    </html>
  );
}
