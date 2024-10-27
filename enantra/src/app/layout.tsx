import "@/styles/globals.css";

import { type Metadata } from "next";

import { APP_NAME, APP_TAGLINE } from "@/utils/constants";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_TAGLINE,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
