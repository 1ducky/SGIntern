import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MenuUi } from "@/component/MenuUI";

import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display:"swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display:"swap"
});

export const metadata: Metadata = {
  title: {
    default: "SGIntern",
    template: "%s | SGIntern",
  },
  description:'Aplikasi Magang dan Lowongan Pekerjaan',
  openGraph:{
    title: {
      default: "SGIntern",
      template: "%s | SGIntern",
    },
    description:'Aplikasi Magang Dan Lowongan Pekerjaan',
    url: "https://kumangas.com",
    type:"website"
  }
}
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-100`}
        >
          <MenuUi></MenuUi>
          <div className="mt-20"></div>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
