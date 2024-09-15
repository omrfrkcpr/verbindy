import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verbindy - The Ultimate Chat Experience",
  description:
    "Experience real-time, seamless communication with Verbindy. Connect with friends, share ideas, and manage conversations effortlessly with secure logins and an intuitive user interface.",
  keywords: [
    "chat",
    "messaging",
    "real-time communication",
    "secure chat",
    "social messaging",
    "Verbindy",
  ],
  authors: [
    {
      name: "Omer Faruk CAPUR",
      url: "https://omrfrkcpr.com",
    },
  ],
  icons: {
    icon: [{ url: "/verbindy-logo.png", sizes: "16x16", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          {/* <Navbar /> */}
          <div className="flex-grow flex-1">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              // forcedTheme="dark"
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
