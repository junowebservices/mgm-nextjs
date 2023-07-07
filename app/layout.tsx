import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";
export const metadata = {
  title: "MGM",
  description: "Museum and Gallery National Month",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
