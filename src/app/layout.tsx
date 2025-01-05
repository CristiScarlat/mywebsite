import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import SideHeader from "../components/sideHeader/sideHeader";
import MobileFooter from "../components/mobileFooter/mobileFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cristi Scarlat",
  description: "Cristi Scarlat website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <SideHeader />
        {children}
      <MobileFooter />
      </body>
    </html>
  );
}
