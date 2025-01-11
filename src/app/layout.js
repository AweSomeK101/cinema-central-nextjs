import { Inter } from "next/font/google";
import Header from "@/components/root-header/Header";
import Sidebar from "@/components/nav-sidebar/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description:
    "Cinema Central, The premier spot to find details about your favourite movies and TV shows!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-1 px-4 sm:px-6 py-4 mb-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
