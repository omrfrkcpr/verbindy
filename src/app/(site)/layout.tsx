import type { Metadata } from "next";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
