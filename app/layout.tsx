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
      <link
        rel="stylesheet"
        precedence="default"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        precedence="default"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <body className="">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
