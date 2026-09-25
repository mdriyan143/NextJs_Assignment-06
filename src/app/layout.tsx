import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PlanProvider from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitlog",
  description: "Track your workouts and build your fitness plan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='dark'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PlanProvider>
          <Navbar />

          {children}


          <Footer />
        </PlanProvider>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
          toastClassName="!rounded-2xl !border !border-zinc-800 !bg-zinc-900 !text-white !shadow-xl"
        />
      </body>
    </html>
  );
}
