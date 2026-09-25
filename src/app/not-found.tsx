import React from 'react';

import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-zinc-950 px-4 text-white">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
          FitLog
        </p>

        <h1 className="mt-4 text-6xl font-black tracking-tight sm:text-8xl">
          404
        </h1>

        <p className="mt-4 text-sm text-zinc-500 sm:text-base">
          The workout you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300">
          Back to workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;