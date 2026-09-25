import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-950 px-6 text-center">
      <h2 className="text-xl font-black uppercase tracking-tight text-white">
        Nothing Here Yet
      </h2>

      <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-xs font-bold text-black transition hover:bg-lime-300">
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyState;