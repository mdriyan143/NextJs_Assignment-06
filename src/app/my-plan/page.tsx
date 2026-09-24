"use client";

import React from 'react';
import { useContext } from "react";
import Image from "next/image";
import { PlanContext } from "@/context/PlanContext";

const MyPlanPage = () => {
 const { plan, setPlan } = useContext(PlanContext);

const totalMinutes = plan.reduce(
  (total, workout) => total + workout.duration,
  0
);

const totalCalories = plan.reduce(
  (total, workout) => total + workout.caloriesBurned, 0
);
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

      <div className="mb-8">
  <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
    My Plan
  </h1>

  <p className="mt-3 text-sm text-zinc-500 sm:text-base">
    Cap of five lifts for today. Finish them, then load more.
  </p>
</div>

<div className="mb-8 grid overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 sm:grid-cols-3">
  <div className="border-b border-zinc-800 p-6 sm:border-b-0 sm:border-r">
    <p className="text-xs text-zinc-500">
      Exercises
    </p>

    <p className="mt-2 text-4xl font-black text-lime-400">
      {plan.length}
    </p>
  </div>

  <div className="border-b border-zinc-800 p-6 sm:border-b-0 sm:border-r">
    <p className="text-xs text-zinc-500">
      Minutes
    </p>

    <p className="mt-2 text-4xl font-black text-white">
      {totalMinutes}
    </p>
  </div>

  <div className="p-6">
    <p className="text-xs text-zinc-500">
      Calories
    </p>

    <p className="mt-2 text-4xl font-black text-white">
      {totalCalories}
    </p>
  </div>
</div>

        {plan.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 px-6 py-16 text-center">
            <h2 className="text-xl font-bold uppercase">
              Your plan is empty
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              Add workouts from the library to start building your plan.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {plan.map((workout) => (
              <div
                key={workout.id}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <div className="relative aspect-4/3">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"/>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group) => (
                      <span
                        key={group}
                        className="rounded-full bg-lime-400/10 px-3 py-1 text-[10px] font-bold uppercase text-lime-400">
                        {group}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-4 text-lg font-black uppercase">
                    {workout.name}
                  </h2>

                  <div className="mt-4 flex gap-4 text-xs text-zinc-400">
                    <span>{workout.duration} min</span>
                    <span>{workout.sets} sets</span>
                    <span>{workout.reps} reps</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setPlan(plan.filter((item) => item.id !== workout.id));
                    }}
                    className="cursor-pointer mt-5 w-full rounded-md border border-zinc-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;