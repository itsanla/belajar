import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "belajar next",
  description: "Web untuk belajar next.js oleh full stack developer anla harpanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
