import "./globals.css";
import GSAPScroll from "@/components/GSAPScroll";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <GSAPScroll />
        {children}
      </body>
    </html>
  );
}
