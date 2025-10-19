import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
// import { Sora } from "next/font/google";


import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Sajith R Sampath",
  description: "Intern Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen text-zinc-200 antialiased selection:bg-zinc-100 selection:text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
