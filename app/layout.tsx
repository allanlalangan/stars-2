import "./globals.css";
import { Libre_Baskerville, Source_Sans_Pro } from "next/font/google";
import localFont from "next/font/local";

const scilla = localFont({
  src: [
    {
      path: "../public/fonts/Scilla/Scilla-Narrow.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Scilla/Scilla-Narrow-Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Scilla/Scilla-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Scilla/Scilla-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  // display: "swap",
  variable: "--font-scilla",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-libre",
});
const source_sans_pro = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-source",
});

export const metadata = {
  title: "Stars",
  description: "Stars Astrology App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libre.variable} ${scilla.variable} ${source_sans_pro.variable} dark`}
    >
      <body className="font-sans bg-light-300 text-base-950 dark:bg-secondary-900 dark:text-base-50">
        {children}
      </body>
    </html>
  );
}
