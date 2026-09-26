import React from 'react';
import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout.type";
import { PiClock, PiFire, PiStar } from "react-icons/pi";


type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-zinc-700" >
      <div className="relative aspect-4/3 overflow-hidden bg-zinc-800">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105" />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase text-lime-400">
              {group}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-xl font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          {workout.equipment}
        </p>

        <div className="mt-5 flex items-center gap-5 text-sm text-zinc-400">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <PiClock className="h-4 w-4" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <PiFire className="h-4 w-4" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <PiStar className="h-4 w-4" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;