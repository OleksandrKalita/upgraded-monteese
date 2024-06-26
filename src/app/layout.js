import { Inter } from "next/font/google";
import localFont from "next/font/local";
// import "./globals.css";
import "./default.css";

const inter = Inter({ subsets: ["latin"] });

const myFonts = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Medium.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal"
    }
  ],
  display: "swap",
  variable: "--neue-montreal-font"
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFonts.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
