import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Ecommerce",
  description: "Test Ecommerce F&F Asociados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between items-center bg-[#fafafa]">
        <Navbar />
        <main className="w-[100%] m-auto  flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
