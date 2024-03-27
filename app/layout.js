import { Outfit } from "next/font/google";
import "./globals.css";
import HeaderMenu from "@/components/headerMenu/HeaderMenu";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Lucas Geshef",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} text-light-50 bg-dark-950`}>
        <HeaderMenu />
        {children}
      </body>
    </html>
  );
}
