"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "@/assets/logo.png";
import { PlanContext } from "@/context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useContext(PlanContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMyPlan = pathname === "/my-plan";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="navbar min-h-24 px-4 sm:px-6 lg:px-8">

        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}>
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={40}
              height={40}/>

            <span className="text-xl font-extrabold tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <div className="flex items-center gap-2">

            <Link
              href="/"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !isMyPlan ? "bg-lime-400/10 text-lime-400"
                  : "text-zinc-400 hover:text-white"}`}>
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                isMyPlan
                  ? "bg-lime-400/10 text-lime-400"
                  : "text-zinc-400 hover:text-white"}`}>
              My Plan
            </Link>

          </div>
        </div>

        <div className="navbar-end hidden gap-5 md:flex">

          <Link
            href="/my-plan"
            className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">
              Plan
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-400 px-2 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">
              Saved
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-zinc-700 px-2 text-xs text-zinc-400">
              {saved.length}
            </span>
          </Link>

        </div>

        <div className="navbar-end md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl text-zinc-400 transition hover:text-white"
            aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {isMenuOpen && (
        <div className="border-t border-zinc-800 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                !isMyPlan
                  ? "bg-lime-400/10 text-lime-400"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}>
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                isMyPlan
                  ? "bg-lime-400/10 text-lime-400"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}>
              My Plan
            </Link>

            <div className="mt-2 flex gap-6 border-t border-zinc-800 pt-4">

              <Link
                href="/my-plan"
                onClick={closeMenu}
                className="flex items-center gap-2">
                <span className="text-sm text-zinc-400">
                  Plan
                </span>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-400 px-2 text-xs font-bold text-black">
                  {plan.length}
                </span>
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMenu}
                className="flex items-center gap-2">
                <span className="text-sm text-zinc-400">
                  Saved
                </span>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-zinc-700 px-2 text-xs text-zinc-400">
                  {saved.length}
                </span>
              </Link>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;