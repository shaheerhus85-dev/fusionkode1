import "./globals.css";
import CustomCursor from "@/components/system/CustomCursor";
import SmoothScroll from "@/components/system/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
