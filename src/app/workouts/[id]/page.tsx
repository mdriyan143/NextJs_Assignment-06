import React from 'react';
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Workout } from "@/types/workout.type";
import WorkoutActions from "@/components/workoutDetails/WorkoutActions";

type WorkoutDetailsPageProps = {
    params: Promise<{ id: string; }>;
};

const getWorkout = async (id: string): Promise<Workout | null> => {
    try {
        const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

        if (!response.ok) {
            return null;
        }

        const data: Workout = await response.json();

        return data;
    }

    catch (error) {
        console.error("Error fetching workout:", error);

        return null;
    }
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
    const { id } = await params;

    const workout = await getWorkout(id);

    if (!workout) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-950 px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr]">

                <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-zinc-900">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover" />
                </div>

                <div className="flex flex-col justify-center">

                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
                        {workout.name}
                    </h1>

                    <p className="mt-5 text-sm leading-6 text-zinc-400 sm:text-base">
                        {workout.description}
                    </p>

                    <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
                            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                Equipment
                            </span>

                            <span className="text-sm text-zinc-200">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
                            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                Difficulty
                            </span>

                            <span className="text-sm text-zinc-200">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
                            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                Sets
                            </span>

                            <span className="text-sm text-zinc-200">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
                            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                Reps
                            </span>

                            <span className="text-sm text-zinc-200">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
                            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                Duration
                            </span>

                            <span className="text-sm text-zinc-200">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
                            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                Calories
                            </span>

                            <span className="text-sm text-zinc-200">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-6 py-4">
                            <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                                Rating
                            </span>

                            <span className="text-sm text-zinc-200">
                                {workout.rating}
                            </span>
                        </div>

                    </div>

                    <div className="mt-9">
                        <h2 className="text-lg font-bold uppercase">
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-4">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={instruction}
                                    className="flex gap-4 text-sm leading-6 text-zinc-400">
                                    <span className="font-bold text-lime-400">
                                        {index + 1}.
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <WorkoutActions workout={workout} />
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetailsPage;