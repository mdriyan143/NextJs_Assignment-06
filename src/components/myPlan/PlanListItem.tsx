"use client";

import Image from "next/image";
import Link from "next/link";

import type { Workout } from "@/types/workout.type";

type PlanListItemProps = {
  workout: Workout;
  isCompleted: boolean;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
  showDone: boolean;
};

const PlanListItem = ({
  workout,
  isCompleted,
  onDone,
  onRemove,
  showDone }: PlanListItemProps) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border p-4 transition sm:flex-row sm:items-center ${
        isCompleted
          ? "border-lime-400/30 bg-lime-400/5 opacity-60"
          : "border-zinc-800 bg-zinc-900/70"}`}>
      <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg sm:w-36">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"/>
      </div>

      <div className="min-w-0 flex-1">
        <h2
          className={`text-base font-black uppercase tracking-tight ${
            isCompleted ? "text-zinc-500 line-through" : "text-white"}`}>
          {workout.name}
        </h2>

        <p className="mt-1 text-xs text-zinc-500">
          {workout.equipment}
        </p>

        
        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <span className="text-lime-400">
              ◷
            </span>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span className="text-lime-400">
              ♨
            </span>
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <span className="text-lime-400">
              ☆
            </span>
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">

        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-zinc-700 px-5 py-2 text-xs font-medium text-white transition hover:bg-zinc-800">
          View Details
        </Link>

        {showDone && (
          <button
            type="button"
            onClick={() => onDone(workout.id)}
            disabled={isCompleted}
            className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-xs font-bold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50">
            <span>✓</span>

            {isCompleted ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove(workout.id)}
          className="px-1 text-xl leading-none text-zinc-600 transition hover:text-white"
          aria-label={`Remove ${workout.name}`}>
          ×
        </button>
      </div>
    </div>
  );
};

export default PlanListItem;