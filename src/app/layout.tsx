import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import SideHeader from "../components/sideHeader/sideHeader";
import MobileFooter from "../components/mobileFooter/mobileFooter";
import {Metadata} from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cristi Scarlat",
    description: "Cristian Scarlat portfolio and blog articles",
    publisher: "Cristi Scarlat",
    keywords: "Cristi, Scarlat, blog, next js, react js, typescript, software developer ",
    openGraph: {
        siteName: "Cristi Scarlat",
        type: "website",
        title: "Cristi Scarlat",
        description: "Cristian Scarlat portfolio and blog articles",
        url: "https://cristiscarlat.com/",
        images: ["/images/me.jpg"]
    },
    twitter: {
        title: "Cristi Scarlat",
        description: "Cristian Scarlat portfolio and blog articles",
        site: "https://cristiscarlat.com/",
        images: ["/images/me.jpg"],
        card: "summary_large_image",
    }
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
