import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { cn } from "~/lib/utils";
import { getSeoTags, getViewport } from "~/lib/seo";
import ThemeContextProvider from "~/context/theme-context";
import ActiveSectionContextProvider from "~/context/active-section-context";
import Header from "~/components/header";
import Footer from "~/components/footer";
import ThemeSwitch from "~/components/theme-switch";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata = getSeoTags({ slug: "/" });

export const viewport = getViewport();

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          "relative bg-gray-50 pt-28 text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36",
          fontSans.className,
        )}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
