import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/navigation/topbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-6xl mx-auto p-4 ${inter.className}`}>
      <Topbar /> {/* The Topbar will appear on every page */}
        <div className="">
          {children}
        </div>
<Footer />
      </body>
    </html>
  );
}
