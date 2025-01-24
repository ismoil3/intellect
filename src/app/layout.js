import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/header";
import ThemeWrapper from "./components/providers/theme-provider";
import ThemeSwitcher from "./components/providers/ThemeSwitcher";
import Footer from "./components/layout/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Educart",
  description: "courses and training materials for students...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0098CC" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWrapper>
          <div className="hidden">
            <ThemeSwitcher />
          </div>
          <Header />
          <main>{children}</main>
          <Footer/>

        </ThemeWrapper>
      </body>
    </html>
  );
}
