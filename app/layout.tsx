import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./comp/navbar/Navbar";
import { AuthContextProvider } from "./context/authContext";
import { ReportContextProvider } from "./context/reportContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marqstats Admin",
  description: "Admin dashboard to control Marqstats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <ReportContextProvider>{children}</ReportContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
