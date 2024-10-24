import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SubHeader from "./components/SubHeader"; // Import the SubHeader component
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row min-h-screen md:px-[80px] lg:px-[90px] xl:px-[110px]">
          {/* Sidebar */}
          <div className="md:w-64 md:flex-shrink-0">
            <SideBar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Header />
            <SubHeader /> {/* SubHeader placed below Header */}
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
