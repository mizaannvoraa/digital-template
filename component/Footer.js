// components/Footer.tsx
"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
} from "lucide-react";
// import { FaBehance } from "react-icons/fa"; // ✅ Behance icon from react-icons

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-7 md:py-15 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2">
            <Image src="/assets/trial_logo.png" alt="Logo" width={170} height={300} />
          </div>
          <p className="text-sm text-gray-400">© 2025 Nebro Creative Agency.</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <Link href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full">
            <Facebook className="w-5 h-5 text-white" />
          </Link>
          <Link href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full">
            <Twitter className="w-5 h-5 text-white" />
          </Link>
          <Link href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full">
            <Instagram className="w-5 h-5 text-white" />
          </Link>
          <Link href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full">
            <Dribbble className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-bold">Get In Touch</h4>
          <p className="text-gray-400">hi@nebro.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
