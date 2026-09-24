"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import logo from "@/assets/logo.png";
import { PlanContext } from "@/context/PlanContext";

const Navbar = () => {
  const { plan, saved } = useContext(PlanContext);

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="navbar min-h-24 px-4 sm:px-6 lg:px-8">

        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={40}
              height={40} />

            <span className="text-xl font-extrabold tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        <div className="navbar-center">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full bg-lime-400/10 px-5 py-2 text-sm font-semibold text-lime-400 transition hover:bg-lime-400/20">
              Workouts
            </Link>

            <Link href="/my-plan"
              className="rounded-full px-5 py-2 text-sm font-semibold text-zinc-400 transition hover:text-white">
              My Plan
            </Link>
          </div>
        </div>

        <div className="navbar-end gap-5">
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">
              Plan
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-400 px-2 text-xs font-bold text-black">
              {plan.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">
              Saved
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-zinc-700 px-2 text-xs text-zinc-400">
              {saved.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;