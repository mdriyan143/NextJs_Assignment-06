import Image from "next/image";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={28}
            height={28}/>

          <span className="text-sm font-extrabold text-white">
            FITLOG
          </span>
        </div>

        <p className="text-xs text-zinc-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;