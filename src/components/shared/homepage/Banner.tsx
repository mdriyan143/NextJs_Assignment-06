import React from 'react';
import banner from '@/assets/banner.png'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 lg:grid-cols-2">

        <div className="px-8 py-12 sm:px-10 lg:px-12 lg:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
            Workout Library
          </p>

          <h1 className="mt-5 max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300">
            Browse Workouts
            <FaArrowRight size={12} />
          </Link>
        </div>


        <div className="relative flex min-h-70 items-center justify-center px-6 py-6 lg:min-h-78">
          <Image
            src={banner}
            alt="FitLog workout Banner"
            width={520}
            height={360}
            className="h-full max-h-80 w-full object-contain" />
        </div>

      </div>
    </section>
  );
};

export default Banner;