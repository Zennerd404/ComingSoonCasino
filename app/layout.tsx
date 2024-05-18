import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Meteors } from "@/components/ui/meteors";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "300", "200"],
  variable: "--font-inter",
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-syne",
});
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Meteor Games",
  description:
    "We can't wait to share the exciting launch of our website with you! 🚀 Stay tuned for the event. Subscribe now to be the first to know when we go live! 🌐✨",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.className} ${inter.className}`}>
      <link
        rel="icon"
        href="/svg/logo-grey.svg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className="bg-background text-foreground coming-soon-page-background">
        <main>{children}</main>
      </body>
    </html>
  );
}
