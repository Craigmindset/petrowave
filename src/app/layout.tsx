import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Petrowave Energy Limited ",
  description:
    "PetrolLink is a modern energy sector partner delivering procurement, upstream, downstream, offshore, sustainability, and investor-ready execution.",
  icons: {
    icon: "/petrowave-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-[#0b1a2e]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
