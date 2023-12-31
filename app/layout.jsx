import { Providers } from "./providers";
import "./globals.css";
import Navigation from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Next.js | Marvel APP",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Navigation />
          <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
