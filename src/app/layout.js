import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../app/Navbar/page.jsx';
import Fotter from '../app/Fotter/page.jsx';
import { Toaster } from 'react-hot-toast';  

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} 
      >
        <Toaster />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Fotter />
      </body>
    </html>
  );
}
