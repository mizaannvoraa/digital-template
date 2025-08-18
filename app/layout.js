import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

// Existing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ➕ Add Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights you need
});

export const metadata = {
  title: "Thinkmint | New Age Digital Agency for Digital Growth",
  description: "Thinkmint is a performance first creative agency blending design, strategy, and innovation to help brands grow with fresh ideas, bold visuals, and impactful digital solutions.",
  icons:{
    icon:'favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
